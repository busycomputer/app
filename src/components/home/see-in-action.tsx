import Image from 'next/image'
import Bounded from '../elements/Bounded'
import workFlow5 from '@/assets/images/workflow-image5.png'

export default function SeeInAction() {
  return (
    <Bounded className="h-screen ">
      <p className="font-sans-plex mx-auto  w-fit text-primary mt-[100px]">SEE IN ACTION</p>
      <h1 className="font-space mx-auto w-fit text-4xl mb-16 mt-6">SEE HOW BC WORKS</h1>
      <div className="flex flex-col">
        <div className="">
          <div className="h-[600px] ">
            <Image alt="" src={workFlow5} />
          </div>
          <div className="flex h-16 border border-border  items-center justify-end">
            <div className="flex gap-4 mr-5 ">
              <div className="h-4 w-4 rounded-full border border-primary"></div>
              <div className="h-4 w-4 rounded-full border border-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  )
}
