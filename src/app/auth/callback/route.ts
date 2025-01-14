// src/app/auth/callback/route.ts

import { NextResponse } from 'next/server'
import { getServerClient } from '@/lib/supabase/server'

/**
 * Handles GET requests by processing authentication codes from the URL parameters,
 * exchanging them for a session, and redirecting the user based on the provided
 * redirect URL or to a default protected user page.
 *
 * @param {Request} request - The incoming HTTP request object containing information such as
 *                            the URL and any query parameters.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object,
 *                                 which includes a redirect to either a specified URL or
 *                                 a default user page.
 */
export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl?.searchParams?.get('code')

    const origin = requestUrl?.origin
    const redirectTo = requestUrl.searchParams.get('redirect_to')?.toString()

    if (code) {
      const supabase = await getServerClient()
      await supabase.auth.exchangeCodeForSession(code)
    }

    if (redirectTo) {
      return NextResponse.redirect(`${origin}${redirectTo}`)
    }

    return NextResponse.redirect(`${origin}/dashboard/`)
  } catch (error) {
    console.log(error)
    return NextResponse.redirect(`${origin}/auth/sign-in`)
  }
}
