import Image from 'next/image'
import Bounded from '../elements/Bounded'
import workFlow5 from '@/assets/images/workflow-image5.png'

export default function SeeInAction() {
  return (
    <Bounded className="mb-5 px-7 lg:mb-10">
      <p className="font-sans-plex mt-[100px] w-fit text-primary md:mx-auto">SEE IN ACTION</p>
      <h1 className="font-space mb-10 w-fit text-2xl md:mx-auto md:text-4xl lg:mb-16 lg:mt-6">
        SEE HOW BC WORKS
      </h1>
      <div className="flex flex-col">
        <div className="">
          {/* <div className="max-h-[600px] h-full border border-primary"> */}
          <Image alt="" src={workFlow5} className="h-full w-full object-cover" />
          {/* </div> */}
          <div className="flex h-10 items-center justify-end border border-border sm:h-12 md:h-14 lg:h-16">
            <div className="mr-5 flex gap-4">
              <div className="h-3 w-3 rounded-full border border-primary lg:h-4 lg:w-4"></div>
              <div className="h-3 w-3 rounded-full border border-primary lg:h-4 lg:w-4"></div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  )
}
