import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get all keys matching the pattern "views:*"
    const keys = await redis.keys('views:*');
    
    if (keys.length === 0) {
      return res.status(200).json({});
    }

    // Get all values
    const values = await redis.mget<number[]>(...keys);
    
    // Build the response object
    const views: Record<string, number> = {};
    keys.forEach((key, index) => {
      const slug = key.replace('views:', '');
      views[slug] = values[index] || 0;
    });

    return res.status(200).json(views);
  } catch (error) {
    console.error('Error fetching views:', error);
    return res.status(500).json({ error: 'Failed to fetch views' });
  }
}
