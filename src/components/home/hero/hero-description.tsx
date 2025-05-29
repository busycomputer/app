import { cn } from '@/lib/utils'
import Sparkle from './sparkle'

export default function HeroDescription({className}:{className?:string}) {
  return (
    <div className={cn("mx-auto flex max-w-screen-xl flex-col items-center pt-36",className)}>
      <div className="z-20  font-space-mono mr-auto sm:mx-3 flex max-w-96 shrink-0 items-center gap-3 overflow-hidden border-2 border-[#172b21] bg-[#06110C] px-1 py-1 text-xs font-light text-muted-foreground sm:px-2 sm:py-2 md:mb-3 md:text-sm lg:font-normal">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#131316] md:h-10 md:w-10">
          <Sparkle />
        </span>
        <p className="line-clamp-1 pr-3">AUTOMATE, OPTIMIZE, OWN YOUR STACK</p>
      </div>
      <div className="flex w-full max-w-xl flex-col items-center gap-4 md:max-w-3xl lg:max-w-[884px]">
        <div className="z-20  font-space pt-3 text-3xl sm:text-4xl md:pt-0 sm:text-center md:text-4xl lg:text-[62px] lg:leading-[4.5rem]">
          BUILD AMAZING WORKFLOW AT WARPSEED
        </div>
        <div className="z-20  font-space-mono w-full text-xs uppercase text-muted-foreground sm:max-w-sm md:max-w-md md:text-center md:text-sm lg:max-w-[830px] lg:text-[16px] lg:leading-[1.5]">
          Infrastructure that combines powerful AI, DeFi, and data scraping modules with a vibrant
          marketplace where creators can share and monetize their automated solutions
        </div>
      </div>
    </div>
  )
}
