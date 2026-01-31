import { users, type User, type InsertUser, type BlogView } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  // Blog views methods
  getViewsBySlug(slug: string): Promise<number>;
  incrementViews(slug: string): Promise<number>;
  getAllViews(): Promise<Record<string, number>>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogViews: Map<string, number>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.blogViews = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Blog views methods
  async getViewsBySlug(slug: string): Promise<number> {
    return this.blogViews.get(slug) || 0;
  }

  async incrementViews(slug: string): Promise<number> {
    const currentViews = this.blogViews.get(slug) || 0;
    const newViews = currentViews + 1;
    this.blogViews.set(slug, newViews);
    return newViews;
  }

  async getAllViews(): Promise<Record<string, number>> {
    const views: Record<string, number> = {};
    this.blogViews.forEach((count, slug) => {
      views[slug] = count;
    });
    return views;
  }
}

export const storage = new MemStorage();
