'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

const PageKnownLink = ({
  LinkTo,
  LinkIn,
  LinkTitle,
}: {
  LinkTo: string
  LinkIn: string
  LinkTitle: string
}) => {
  const pathname = usePathname()
  const Path = pathname.split('/')
  const isCurrent = Path.find((p) => p.toLowerCase() === LinkIn.toLowerCase())
  return (
    <Link
      href={LinkTo}
      className={cn(
        buttonVariants({
          variant: `${isCurrent ? 'default' : 'secondary'}`,
          size: 'lg',
          className: 'w-full rounded-md p-2 text-center text-lg font-medium tracking-tight',
        }),
        {
          'bg-primary': isCurrent,
          //   'bg-': !isCurrent, // adjust and Implement
        }
      )}
    >
      {LinkTitle}
    </Link>
  )
}

export default PageKnownLink
