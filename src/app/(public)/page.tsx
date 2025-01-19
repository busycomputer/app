import Bounded from '@/components/elements/Bounded'
import { BentoGridSecondDemo } from '@/components/home/bento-grid'
import { TimelineDemo } from '@/components/home/time-line'
import { Cover } from '@/components/ui/cover'
import Footer from '../../components/home/footer'
import VideoPreview from '../../components/home/video-preview'
export default function HomePage() {
  return (
    <div className="bg-neutral-950">
      <div className="px-2">
        <div className="relative h-[calc(100vh-5rem)] w-full bg-neutral-950 bg-dot-neutral-400/[0.2]">
          <Bounded className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="px-5 text-center">
                <div className="flex items-center justify-center">
                  <div className="bg-primary px-6 py-0.5">
                    <p className="text-lg font-semibold tracking-widest">AI POWERED</p>
                  </div>
                </div>
                <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text pb-6 text-center text-5xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-7xl lg:text-7xl">
                  Build amazing websites <br /> at <Cover>warp speed</Cover>
                </h1>
              </div>
              <div className="px-2 py-2 text-center">
                <p className="max-w-prose">
                  Infrastructure that combines powerful AI, DeFi, and data scraping modules with a
                  vibrant marketplace where creators can share and monetize their automated
                  solutions.{' '}
                </p>
              </div>
            </div>
          </Bounded>
          {/* <div className="absolute top-0 h-full w-full bg-gradient-to-t from-background to-black/0" /> */}
        </div>
        <div className="relative z-10 pb-40 pt-40">
          <Bounded className="">
            <div className="flex flex-col items-center justify-center py-12">
              <h2 className="text-center text-4xl font-medium">
                Smarter workflows, seamless integrations{' '}
              </h2>
              <p className="mt-2 w-full max-w-prose text-center font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi ea ipsam magni
                aliquid possimus officia, maiores enim incidunt vitae?
              </p>
            </div>
            <BentoGridSecondDemo />
          </Bounded>
        </div>
      </div>

      <div className="pb-10 pt-20">
        <Bounded>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-4xl font-medium">
              Turn complexity into simplicity{' '}
              <span className="text-muted-foreground">
                <br />
                Drag, drop, and design workflows like never before{' '}
              </span>
            </h3>
            <div className="h-full w-full py-12">
              <VideoPreview />
            </div>
          </div>
        </Bounded>
      </div>
      <div className="pt-40">
        <TimelineDemo />
      </div>
      <Footer />
    </div>
  )
}
