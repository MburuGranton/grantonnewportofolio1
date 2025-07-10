import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    console.log('Contact form submission:', { name, email, subject, message });

    return res.status(200).json({
      message: 'Message received successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ message: 'Server error processing your request' });
  }
}
