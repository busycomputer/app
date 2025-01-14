import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import Bounded from '@/components/elements/Bounded'
import BcLogo from '@/assets/images/logo-192x192.png'

export default function HomeNav() {
  return (
    <div className="sticky top-0 border-b bg-background/95 py-1 backdrop-blur-md">
      <Bounded as={'nav'} className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <Image
            className="h-12 w-12 overflow-hidden rounded-full"
            src={BcLogo}
            alt="Busy computer logo"
          />
          <div>
            <span className="flex flex-col justify-center text-xs font-bold">
              <span>Busy</span>
              <span>Computers</span>
            </span>
          </div>
        </div>
        <div>
          <Link
            className={buttonVariants({
              variant: 'secondary',
              size: 'xs',
              className:
                'flex items-center justify-center rounded-2xl border p-1.5 px-2.5 text-sm leading-none hover:bg-primary',
            })}
            href={'/auth/sign-in'}
          >
            Sign in
          </Link>
        </div>
      </Bounded>
    </div>
  )
}
