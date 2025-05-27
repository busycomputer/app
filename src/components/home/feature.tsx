import Image from 'next/image'
import Bounded from '../elements/Bounded'
import workFlow1 from '@/assets/images/workflow-image1.png'
import workFlow2 from '@/assets/images/workflow-image2.png'
import workFlow3 from '@/assets/images/workflow-image3.png'
import workFlow4 from '@/assets/images/workflow-image4.png'

export default function Feature() {
  return (
    <Bounded className="px-7">
      <p className="font-sans-plex w-fit pt-24 text-base text-primary md:mx-auto">FEATURES</p>
      <h1 className="font-space mb-10 w-fit text-2xl md:mx-auto md:text-4xl lg:mb-16 lg:mt-6">
        DESIGN FOR SCALE. BUILD TO CONTROL
      </h1>
      <div className="font-space-grotesk space-y-2 text-[#CACACA] md:space-y-0">
        {/* box1 */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
          {/* <div className="max-md:w-full"> */}
          <div className="max-md:w-full">
            <Image
              src={workFlow1}
              alt="Customizable Drag Component"
              className="object-cover max-md:w-full"
            />
          </div>
          <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            CUSTOMIZABLE DRAG COMPONENT
          </div>
          <div className="max-md:w-full">
            <Image
              src={workFlow2}
              alt="Workflow Marketplace"
              className="object-cover max-md:w-full"
            />
          </div>
          <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            WORKFLOW MARKETPLACE
          </div>
        </div>
        <div className="hidden font-medium md:flex">
          <div className="basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            CUSTOMIZABLE DRAG COMPONENT
          </div>
          <div className="basis-1/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            WORKFLOW MARKETPLACE
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:gap-0">
          {/* <div className="max-md:w-full"> */}
          <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            PROMPT TO GENERATE
          </div>
          <div className="max-md:w-full">
            <Image
              src={workFlow3}
              alt="Customizable Drag Component"
              className="object-cover max-md:w-full"
            />
          </div>

          <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            REUSABLE MODULES
          </div>
          <div className="max-md:w-full">
            <Image
              src={workFlow4}
              alt="Workflow Marketplace"
              className="object-cover max-md:w-full"
            />
          </div>
        </div>

        <div className="hidden font-medium md:flex">
          <div className="basis-1/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            PROMPT TO GENERATE
          </div>
          <div className="basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
            REUSABLE MODULES
          </div>
        </div>
      </div>
    </Bounded>
  )
}
