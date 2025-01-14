import Bounded from '@/components/elements/Bounded'
import HeroTitle from '@/components/hero-title'
import { BentoGridDemo } from '@/components/home/bento-grid'
import GreenMoodyOverlay from '@/components/overlay/greeny-moody-overlay'
import { Button } from '@/components/ui/button'
import { Cover } from '@/components/ui/cover'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import SupabaseTableEditor from '@/assets/images/supabase-table-editor.png'
import VideoPreview from './video-preview'
import { TimelineDemo } from '@/components/home/time-line'
import Footer from './footer'
export default function HomePage() {
  return (
    <div className="">
      <div className="px-2 bg-grid-small-white/[0.1]">
        <div className="relative h-[calc(100vh-5rem)] w-full bg-background bg-dot-white/[0.5]">
          <Bounded className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="px-5 text-center">
                <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-5xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-7xl lg:text-7xl">
                  Build amazing websites <br /> at <Cover>warp speed</Cover>
                </h1>
              </div>
              <div className="px-2 py-2 text-center">
                <p className="max-w-prose">
                  Supabase is an open source Firebase alternative. Start your project with a
                  Postgres database, Authentication, instant APIs, Edge Functions, Realtime
                  subscriptions, Storage, and Vector embeddings.
                </p>
              </div>
            </div>
          </Bounded>
          {/* <div className="absolute top-0 h-full w-full bg-gradient-to-t from-background to-black/0" /> */}
        </div>
        <div className="relative z-10 pb-10 pt-20">
          <Bounded>
            <div className="flex flex-col items-center justify-center py-12">
              <h2 className="text-center text-4xl font-medium">
                Build amazing websites at warp speed
              </h2>
              <p className="mt-2 w-full max-w-prose text-center font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi ea ipsam magni
                aliquid possimus officia, maiores enim incidunt vitae?
              </p>
            </div>
          </Bounded>
          <BentoGridDemo />
        </div>
      </div>

      <div className="pb-10 pt-20">
        <Bounded>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-4xl font-medium">
              Stay productive and manage your app
              <span className="text-muted-foreground">
                <br />
                without leaving the dashboard
              </span>
            </h3>
            <div className="h-full w-full py-12">
              <VideoPreview />
            </div>
          </div>
        </Bounded>
      </div>
      <TimelineDemo />
      <Footer />
    </div>
  )
}
