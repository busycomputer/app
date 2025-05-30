'use client'

import Image from 'next/image'
import Bounded from '../elements/Bounded'
import workFlow5 from '@/assets/images/workflow-image5.png'
import { useSeeInActionAnimation } from '@/hooks/use-see-in-action-animation'

export default function SeeInAction() {
  const { containerRef, headingRef, titleRef, videoRef } = useSeeInActionAnimation()
  return (
    <Bounded className="mb-5 overflow-clip px-7 pt-3 lg:mb-10 xl:mb-40" ref={containerRef}>
      <p className="font-sans-plex mt-[100px] w-fit text-primary md:mx-auto" ref={titleRef}>
        SEE IN ACTION
      </p>
      <h1
        className="font-space mb-10 mt-1 w-fit text-4xl text-mutedText md:mx-auto md:text-4xl lg:mb-16 lg:mt-5"
        ref={headingRef}
      >
        SEE HOW BC WORKS
      </h1>
      <div className="flex flex-col" ref={videoRef}>
        <div className="">
          {/* <div className="max-h-[600px] h-full border border-primary"> */}
          <Image alt="" src={workFlow5} className="h-full w-full object-cover" />
          {/* </div> */}
          <div className="flex h-10 items-center justify-end border border-border sm:h-12 md:h-14 lg:h-16">
            <div className="mr-5 flex gap-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='stroke-2'
              >
                <rect x="0.5" y="0.5" width="15" height="15" stroke="#36AA6F" />
              </svg>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-[2px]"
              >
                <path d="M17.7275 15.25H1.27246L9.5 0.999023L17.7275 15.25Z" stroke="#36AA6F" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  )
}
