import { describe, expect, it, vi } from "vitest";
import { createRateLimiter } from "../rate-limit";

describe("createRateLimiter", () => {
	it("allows the first request", () => {
		const limiter = createRateLimiter(3, 60_000);
		const result = limiter.check("ip-1");
		expect(result.success).toBe(true);
		expect(result.remaining).toBe(2);
	});

	it("tracks remaining count across requests", () => {
		const limiter = createRateLimiter(3, 60_000);
		expect(limiter.check("ip-1").remaining).toBe(2);
		expect(limiter.check("ip-1").remaining).toBe(1);
		expect(limiter.check("ip-1").remaining).toBe(0);
	});

	it("blocks once the limit is reached", () => {
		const limiter = createRateLimiter(2, 60_000);
		limiter.check("ip-1");
		limiter.check("ip-1");
		const blocked = limiter.check("ip-1");
		expect(blocked.success).toBe(false);
		expect(blocked.remaining).toBe(0);
	});

	it("tracks keys independently", () => {
		const limiter = createRateLimiter(1, 60_000);
		expect(limiter.check("ip-a").success).toBe(true);
		expect(limiter.check("ip-b").success).toBe(true);
		expect(limiter.check("ip-a").success).toBe(false);
		expect(limiter.check("ip-b").success).toBe(false);
	});

	it("resets the window after windowMs elapses", () => {
		vi.useFakeTimers();
		const limiter = createRateLimiter(1, 1_000);

		limiter.check("ip-1");
		expect(limiter.check("ip-1").success).toBe(false);

		vi.advanceTimersByTime(1_001);
		expect(limiter.check("ip-1").success).toBe(true);

		vi.useRealTimers();
	});

	it("reset() clears all entries", () => {
		const limiter = createRateLimiter(1, 60_000);
		limiter.check("ip-1");
		expect(limiter.check("ip-1").success).toBe(false);
		limiter.reset();
		expect(limiter.check("ip-1").success).toBe(true);
	});
});
