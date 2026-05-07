import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
	id: uuid("id").defaultRandom().primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	phone: text("phone"),
	service: text("service").notNull(),
	message: text("message").notNull(),
	status: text("status").notNull().default("new"),
	notes: text("notes"),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;
