import Bounded from '@/components/elements/Bounded'
import HeroTitle from '@/components/hero-title'
import GreenMoodyOverlay from '@/components/overlay/greeny-moody-overlay'
import { Cover } from '@/components/ui/cover'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

export default function HomePage() {
  return (
    <div className="">
      <div className="bg-dot-slate-300/[0.2]  h-[calc(100vh-5rem)] w-full">
        <Bounded className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className='text-center px-5 '>
              <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-4xl lg:text-6xl">
                Build amazing websites <br /> at <Cover>warp speed</Cover>
              </h1>
            </div>
            <div className="px-2 py-2 text-center">
              <p className="max-w-prose">
                Supabase is an open source Firebase alternative. Start your project with a Postgres
                database, Authentication, instant APIs, Edge Functions, Realtime subscriptions,
                Storage, and Vector embeddings.
              </p>
            </div>
          </div>
        </Bounded>
      </div>
    </div>
  )
}
