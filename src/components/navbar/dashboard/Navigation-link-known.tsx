import Link from 'next/link'
import React, { ReactNode } from 'react'
type TNavigationLinkKnown = {
  Icon: ReactNode
  title: string
  link?: string
}
export default function NavigationLinkKnown({ Icon, link, title }: TNavigationLinkKnown) {
  return (
    <Link className="flex w-full rounded-md hover:bg-secondary" href={link ?? '/dashboard'}>
      <div className="flex w-full items-center gap-3 px-4 py-2">
        <div className="">
          <div className="bg-primary-muted flex h-8 w-8 items-center justify-center rounded-xl p-1.5">
            {Icon}
          </div>
        </div>
        <p className="font-medium text-sm">{title}</p>
      </div>
    </Link>
  )
}
