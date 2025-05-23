import StarIcon from '@/components/icons/star-icon'

export default function HeroDescription() {
  return (
    <div className="mx-auto flex h-72 max-w-screen-xl flex-col items-center justify-between ">
      <div className="font-space-mono flex h-16 max-w-96 items-center  gap-3 text-sm text-muted-foreground">
        <span className="h-10 w-10 bg-[#131316]"></span>AUTOMATE, OPTIMIZE, OWN YOUR STACK
      </div>
      <div className="flex w-full max-w-[884px] flex-col items-center gap-4 ">
        <div className="font-space text-center text-6xl">BUILD AMAZING WORKFLOW AT WARPSEED</div>
        <div className="font-sans-plex w-full max-w-[630px]  text-muted-foreground text-base">
          Infrastructure that combines powerful AI, DeFi, and data scraping modules with a vibrant
          marketplace where creators can share and monetize their automated solutions
        </div>
      </div>
    </div>
  )
}
