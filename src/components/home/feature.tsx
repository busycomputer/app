import Image from 'next/image'
import Bounded from '../elements/Bounded'
import workFlow1 from '@/assets/images/workflow-image1.png'
import workFlow2 from '@/assets/images/workflow-image2.png'
import workFlow3 from '@/assets/images/workflow-image3.png'
import workFlow4 from '@/assets/images/workflow-image4.png'

export default function Feature() {
  return (
    <Bounded className="h-screen px-7">
      <p className="font-sans-plex mx-auto w-fit text-base text-primary pt-24">FEATURES</p>
      <h1 className="font-space mx-auto mb-16 mt-6 w-fit text-4xl">
        DESIGN FOR SCALE. BUILD TO CONTROL
      </h1>
      <div className="">
        <div className="flex h-[340px] ">
          <div className="flex flex-col border">
            <Image src={workFlow1} alt="" className="" />
            <div className="flex h-full items-center lg:pl-14">CUSTOMIZABLE DRAG COMPONENT</div>
          </div>
          <div className="flex flex-col border">
            <Image src={workFlow2} alt="" className="" />
            <div className="flex h-full items-center lg:pl-14">WORKFLOW MARKETPLACE</div>
          </div>
        </div>
        <div className="flex h-[340px] border">
          <div className="flex flex-col border">
            <Image src={workFlow3} alt="" className="" />
            <div className="flex h-full items-center lg:pl-14">PROMPT TO GENERATE</div>

          </div>
          <div className="flex flex-col border">
            <Image src={workFlow4} alt="" className="" />   
            <div className="flex h-full items-center lg:pl-14 ">PROMPT TO GENERATE</div>
            
          </div>
        </div>
      </div>
    </Bounded>
  )
}
