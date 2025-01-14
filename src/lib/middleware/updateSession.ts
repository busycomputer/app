import { NextRequest, NextResponse } from 'next/server'
import { getServerClient } from '@/lib/supabase/server'
import { authRoutes, DEFAULT_REDIRECT, publicRoutes } from '@/constants/routes'

export const updateSession = async (request: NextRequest): Promise<NextResponse> => {
  // Initialize response
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const { pathname } = request.nextUrl
  const { auth } = await getServerClient()

  try {
    // Check authentication status
    const {
      data: { user },
      error,
    } = await auth.getUser()

    // Handle authentication errors
    if (error) {
      if (
        error.code === 'session_not_found' ||
        error.name === 'AuthSessionMissingError' ||
        error.code === 'user_not_found'
      ) {
        // If accessing protected route, redirect to sign in
        if (!publicRoutes.includes(pathname)) {
          return NextResponse.redirect(new URL('/auth/sign-in', request.url))
        }
        // If on public route, allow access
        return response
      }

      // Handle other errors
      console.error(
        `[AUTH ERROR] ${error.code} | ${error.status} | ${error.name} | ${error.message}`
      )
      return NextResponse.redirect(
        new URL(
          `/auth/sign-in?error=true&message=${encodeURIComponent(error.message)}`,
          request.url
        )
      )
    }

    if (user) {
      // Prevent authenticated users from accessing auth routes
      if (authRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL(DEFAULT_REDIRECT, request.url))
      }

      // Allow access to protected routes
      return response
    }

    // No user and trying to access protected route
    if (!publicRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    }

    return response
  } catch (error) {
    console.error('[MIDDLEWARE ERROR]', error)
    return NextResponse.redirect(
      new URL('/auth/sign-in?error=true&message=An unexpected error occurred', request.url)
    )
  }
}
