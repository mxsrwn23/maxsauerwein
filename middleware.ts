import { NextResponse } from "next/server"

// Nur laden, wenn die ENV da ist
const HAS_UPSTASH =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN

let limiter: any = null

if (HAS_UPSTASH) {
  // Lazy import, damit beim lokalen Dev ohne ENV nichts crasht
  const { Ratelimit } = require("@upstash/ratelimit")
  const { Redis } = require("@upstash/redis")
  const redis = Redis.fromEnv()
  limiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1 m"), // 5 req/min pro IP
  })
}

export const config = { matcher: ["/api/contact"] }

export default async function middleware(req: Request) {
  // Wenn kein Rate-Limiter konfiguriert ist → einfach durchlassen
  if (!limiter) return NextResponse.next()

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    // Fallbacks
    (req as any).ip ||
    "127.0.0.1"

  const { success, reset } = await limiter.limit(ip)
  if (!success) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: { "Retry-After": String(reset ?? 60) },
    })
  }
  return NextResponse.next()
}
