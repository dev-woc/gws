import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
	id: uuid("id").defaultRandom().primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	phone: text("phone"),
	service: text("service").notNull(),
	message: text("message"),
	// "inquiry" = contact form  |  "consultation" = booked a call
	source: text("source").notNull().default("inquiry"),
	status: text("status").notNull().default("new"),
	notes: text("notes"),
	// Calendly webhook fields — null for inquiry leads
	calendlyUri: text("calendly_uri"),
	scheduledAt: timestamp("scheduled_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;
