import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import Bounded from '@/components/elements/Bounded'
import BcLogo from '@/assets/images/logo_Image.png'
import LogoRow from '@/components/Icons/logo-row'
import ButtonContainer from '@/assets/icons/Buttons Container.svg'

export default function HomeNav() {
  return (
    <div className="sticky top-0 z-50 flex h-36 items-center justify-center">
      <Image src={ButtonContainer} alt="Logo" />
      {/* <Bounded as={'nav'} className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <LogoRow />
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
      </Bounded> */}
    </div>
  )
}
