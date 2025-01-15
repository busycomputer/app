import Link from 'next/link'
import React from 'react'
import LoginSideCarousal from '@/components/carousal/login-side-carousel'
import Bounded from '@/components/elements/Bounded'
import { Button, buttonVariants } from '@/components/ui/button'
import { Carousel } from '@/components/ui/carousel'

export default function LoginPage() {
  return (
    <Bounded className="w-full px-0 md:px-0 lg:px-0">
      <div className="grid h-[calc(100vh-3.9rem)] w-full place-items-center md:grid-cols-[40%_60%]">
        <div className="h-full w-full bg-surface py-5">
          <div className="flex h-full w-full flex-col items-center justify-center px-2">
            <h1 className="text-xl font-bold">Login with GitHub</h1>
            <p className="max-w-xs text-center text-sm text-muted-foreground">
              Use your GitHub account for quick and secure access to
              <span className="font-medium text-green-500"> AI-powered workflows.</span>
            </p>
            <Link
              href={'/auth/github'}
              className={buttonVariants({
                className: 'mt-2 w-full max-w-sm',
                variant: 'default',
              })}
            >
              Continue with Github
            </Link>
          </div>
        </div>
        <div className="hidden h-full items-center justify-center md:flex">
          <LoginSideCarousal />
        </div>
      </div>
    </Bounded>
  )
}
