import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href={'/dashboard/'} className={cn(buttonVariants({ variant: 'secondary' }))}>
        Dashboard
      </Link>
    </div>
  )
}
