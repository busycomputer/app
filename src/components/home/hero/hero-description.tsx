export default function HeroDescription() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center sm:h-60 lg:h-72 ">
      <div className="font-space-mono mx-3 flex max-w-96 shrink-0 items-center gap-3 overflow-hidden border-2 bg-[#070708] px-1 py-1 text-xs font-light text-muted-foreground sm:px-2 sm:py-2 md:mb-3 md:text-sm lg:font-normal">
        <span className="h-8 w-8 shrink-0 bg-[#131316] md:h-10 md:w-10"></span>
        <p className="line-clamp-1">AUTOMATE, OPTIMIZE, OWN YOUR STACK</p>
      </div>
      <div className="flex w-full max-w-xl flex-col items-center gap-4 md:max-w-3xl lg:max-w-[884px]">
        <div className="font-space pt-3 text-center text-3xl sm:text-4xl md:pt-0 md:text-4xl lg:text-[62px] lg:leading-[4.5rem]">
          BUILD AMAZING WORKFLOW AT WARPSEED
        </div>
        <div className="font-sans-plex w-full max-w-80 text-center text-xs text-muted-foreground sm:max-w-sm md:max-w-md md:text-sm lg:max-w-[630px] lg:text-[16px] lg:leading-[1.5]">
          Infrastructure that combines powerful AI, DeFi, and data scraping modules with a vibrant
          marketplace where creators can share and monetize their automated solutions
        </div>
      </div>
    </div>
  )
}
