import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '../supabase/server'
import { publicRoutes } from '@/constants/routes'

export const updateSession = async (request: NextRequest): Promise<NextResponse> => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
  const { pathname } = request.nextUrl
  const { auth } = await createClient()

  // To refresh session if expired
  const { error, data } = await auth.getUser()
  if (error) {
    if (error.code === 'session_not_found' || error.name === 'AuthSessionMissingError') {
      response = NextResponse.redirect(new URL('/auth/sign-in', request.url))
    } else if (error.code === 'user_not_found') {
      response = NextResponse.redirect(new URL('/auth/sign-in', request.url))
    } else {
      console.error(`[ERROR] ${error.code} | ${error.status} | ${error.name} | ${error.message}`)
      //handle error search param in React Component.
      response = NextResponse.redirect(
        new URL(`/auth/sign-in?error='true'&message=${error.message}`, request.url)
      )
    }
  }
  console.log(pathname)
  if (data.user && publicRoutes.includes(pathname)) {
    response = NextResponse.redirect(new URL('/dashboard/', request.url))
  }

  return response
}
