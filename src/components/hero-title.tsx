import React from 'react'
import { cn } from '@/lib/utils'
interface ITopComponent {
  TitleFirst: string
  TitleHero: string
  TitleEnd: string
  ShortDesc: string
  descClass?: string
}
export default function HeroTitle({
  TitleFirst,
  TitleHero,
  TitleEnd,
  ShortDesc,
  descClass,
}: ITopComponent) {
  return (
    <>
      <div className="mt-12 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-lg text-3xl tracking-tight sm:text-4xl">
          {TitleFirst}
          <span className=""> {TitleHero} </span>
          <span className="text-green-500/90">{TitleEnd}</span>
        </h1>
        <p className={cn('mt-5 max-w-prose break-words text-muted-foreground')}>{ShortDesc}</p>
      </div>
    </>
  )
}
