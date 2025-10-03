/**
 * Contract Test: Health Check API
 *
 * Tests the health check endpoint to ensure the website is accessible
 * and returns the expected response format.
 */

import { describe, it, expect } from "@jest/globals";

describe("Health Check API Contract", () => {
  const baseUrl = process.env.API_BASE_URL || "https://snooker-nb.vercel.app";
  const healthEndpoint = `${baseUrl}/api/health`;

  it("should return 200 status for health check", async () => {
    const response = await fetch(healthEndpoint);
    expect(response.status).toBe(200);
  });

  it("should return valid JSON response", async () => {
    const response = await fetch(healthEndpoint);
    const data = await response.json();

    expect(data).toHaveProperty("status");
    expect(data).toHaveProperty("timestamp");
    expect(typeof data.status).toBe("string");
    expect(typeof data.timestamp).toBe("string");
  });

  it('should return status "healthy"', async () => {
    const response = await fetch(healthEndpoint);
    const data = await response.json();

    expect(data.status).toBe("healthy");
  });

  it("should return valid timestamp format", async () => {
    const response = await fetch(healthEndpoint);
    const data = await response.json();

    // Check if timestamp is valid ISO 8601 format
    const timestamp = new Date(data.timestamp);
    expect(timestamp).toBeInstanceOf(Date);
    expect(timestamp.getTime()).not.toBeNaN();
  });

  it("should respond within acceptable time", async () => {
    const startTime = Date.now();
    const response = await fetch(healthEndpoint);
    const endTime = Date.now();

    expect(response.status).toBe(200);
    expect(endTime - startTime).toBeLessThan(5000); // 5 seconds max
  });
});
