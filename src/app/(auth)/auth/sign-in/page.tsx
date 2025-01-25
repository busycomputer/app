'use client'

import Image from 'next/image'
import Link from 'next/link'
import authBgImage from '@/assets/images/bg-image.png'
import Logo from '@/assets/images/logo_Image.png'
import Bounded from '@/components/elements/Bounded'
import BzLogo from '@/components/Icons/bz-logo'
import AuthFlow from './auth-flow'
import FlickeringGrid from '@/components/ui/flickering-grid'
export default function LoginPage() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute -z-10 h-full w-full">
        {/* <Image src={authBgImage.src} alt="Auth background gradient" fill /> */}
        <FlickeringGrid
          className="relative -z-10 opacity-40"
          // squareSize={4}
          // gridGap={6}
          color="#56BEA1"
          maxOpacity={0.5}
          flickerChance={0.09}
          // height={800}
          // width={800}
        />
      </div>
      <Bounded className="h-full w-full">
        <div className="flex h-full w-full items-center justify-between gap-4">
          <Link href={'/'} className="hidden max-w-[250px] md:block md:max-w-xs">
            <BzLogo />
          </Link>
          <div className="flex h-full w-full items-center justify-center md:justify-end">
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
