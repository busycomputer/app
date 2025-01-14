import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/middleware/updateSession'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
}
