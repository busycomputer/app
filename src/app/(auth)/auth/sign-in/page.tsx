'use client'

import authBgImage from '@/assets/images/bg-image.png'
import Logo from '@/assets/images/logo_Image.png'
import Bounded from '@/components/elements/Bounded'
import Image from 'next/image'
import AuthFlow from './auth-flow'
export default function LoginPage() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute -z-10 h-full w-full bg-white">
        <Image src={authBgImage.src} alt="Auth background gradient" fill />
      </div>
      <Bounded className="h-full w-full">
        <div className="flex h-full w-full items-center justify-between">
          <div className="max-w-xs">
            <Image src={Logo.src} alt="Auth background gradient" width={1920} height={1080} />
          </div>
          <div className="flex h-full w-full items-center justify-end">
            {/* Auth flow starts here. */}
            <AuthFlow />
          </div>
        </div>
      </Bounded>
    </div>
  )
}

/**
 * <Bounded className="w-full px-0 md:px-0 lg:px-0">
        <div className="grid h-[calc(100vh)] w-full place-items-center md:grid-cols-[40%_60%]">
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
 */
