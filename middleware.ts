import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = await getToken({ 
    req: request,
    secret: process.env.AUTH_SECRET
  })

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    const signInUrl = new URL('/auth/signin', request.url)
    signInUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

// Add the matcher configuration
export const config = {
  matcher: [
    '/dashboard/:path*'
  ]
}