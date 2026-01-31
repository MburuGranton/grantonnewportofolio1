import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Blog views tracking
export const blogViews = pgTable("blog_views", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  views: integer("views").notNull().default(0),
});

export const insertBlogViewSchema = createInsertSchema(blogViews).pick({
  slug: true,
  views: true,
});

export type InsertBlogView = z.infer<typeof insertBlogViewSchema>;
export type BlogView = typeof blogViews.$inferSelect;
