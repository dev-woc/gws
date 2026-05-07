import { describe, expect, it } from "vitest";
import { consultationFormSchema, contactFormSchema } from "../validations";

describe("contactFormSchema", () => {
	const valid = {
		name: "John Smith",
		email: "john@example.com",
		phone: "8135550000",
		service: "credit-repair" as const,
		message: "I need help fixing my credit score before I apply for a mortgage.",
	};

	it("accepts a fully valid submission", () => {
		expect(contactFormSchema.safeParse(valid).success).toBe(true);
	});

	it("accepts a submission without phone", () => {
		const { phone: _, ...rest } = valid;
		expect(contactFormSchema.safeParse(rest).success).toBe(true);
	});

	it("accepts all three service values", () => {
		for (const service of ["credit-repair", "financial-coaching", "both"] as const) {
			expect(contactFormSchema.safeParse({ ...valid, service }).success).toBe(true);
		}
	});

	it("rejects a missing name", () => {
		const result = contactFormSchema.safeParse({ ...valid, name: "" });
		expect(result.success).toBe(false);
	});

	it("rejects a name shorter than 2 characters", () => {
		const result = contactFormSchema.safeParse({ ...valid, name: "J" });
		expect(result.success).toBe(false);
	});

	it("rejects an invalid email", () => {
		const result = contactFormSchema.safeParse({ ...valid, email: "not-an-email" });
		expect(result.success).toBe(false);
	});

	it("rejects an invalid service value", () => {
		const result = contactFormSchema.safeParse({ ...valid, service: "plumbing" });
		expect(result.success).toBe(false);
	});

	it("rejects a message shorter than 10 characters", () => {
		const result = contactFormSchema.safeParse({ ...valid, message: "Too short" });
		expect(result.success).toBe(false);
	});

	it("rejects a message over 1000 characters", () => {
		const result = contactFormSchema.safeParse({ ...valid, message: "a".repeat(1001) });
		expect(result.success).toBe(false);
	});

	it("rejects a missing service", () => {
		const { service: _, ...rest } = valid;
		const result = contactFormSchema.safeParse(rest);
		expect(result.success).toBe(false);
	});
});

describe("consultationFormSchema", () => {
	const valid = {
		name: "Jane Doe",
		email: "jane@example.com",
	};

	it("accepts name and email only", () => {
		expect(consultationFormSchema.safeParse(valid).success).toBe(true);
	});

	it("accepts all optional fields populated", () => {
		const result = consultationFormSchema.safeParse({
			...valid,
			phone: "8135550001",
			service: "financial-coaching",
		});
		expect(result.success).toBe(true);
	});

	it("accepts without service (optional)", () => {
		expect(consultationFormSchema.safeParse({ ...valid, phone: "8135550001" }).success).toBe(true);
	});

	it("rejects a missing name", () => {
		const result = consultationFormSchema.safeParse({ ...valid, name: "" });
		expect(result.success).toBe(false);
	});

	it("rejects an invalid email", () => {
		const result = consultationFormSchema.safeParse({ ...valid, email: "bad" });
		expect(result.success).toBe(false);
	});

	it("rejects an invalid service value", () => {
		const result = consultationFormSchema.safeParse({ ...valid, service: "unknown" });
		expect(result.success).toBe(false);
	});

	it("does not require a message", () => {
		const result = consultationFormSchema.safeParse(valid);
		expect(result.success).toBe(true);
		if (result.success) {
			expect("message" in result.data).toBe(false);
		}
	});
});
