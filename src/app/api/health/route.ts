import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  try {
    const healthCheck = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: SITE_CONFIG.name,
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development",
      uptime: process.uptime(),
      memory: {
        used:
          Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) /
          100,
        total:
          Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) /
          100,
      },
    };

    return NextResponse.json(healthCheck, { status: 200 });
  } catch (error) {
    console.error("Health check failed:", error);

    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        service: SITE_CONFIG.name,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
