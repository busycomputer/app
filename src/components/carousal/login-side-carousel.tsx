'use client'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
const fakeReviews = [
  { name: 'Emma W.', review: 'Absolutely love how easy it makes managing tasks. This is genius!' },
  {
    name: 'James T.',
    review: 'Wow, automation done right! My workflow’s never been this smooth before.',
  },
  { name: 'Sophia L.', review: 'This app is fire! Got me finishing projects way ahead of time.' },
  { name: 'Liam K.', review: 'Honestly, didn’t expect it to be this good. Totally impressed!' },
  {
    name: 'Olivia M.',
    review: 'AI workflows that actually work? Yep, this one nailed it perfectly.',
  },
]
export default function LoginSideCarousal() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex w-full">
          {fakeReviews.map(({ review, name }, index) => (
            <CarouselItem key={index} className="ml-1.5 aspect-video w-full">
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex flex-col p-2">
                  <div className="relative">
                    <span className="absolute -top-5 font-serif text-5xl leading-none text-muted-foreground">
                      "
                    </span>
                  </div>
                  <span className="max-w-md text-xl font-semibold">{review}</span>
                  <span>{name}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
