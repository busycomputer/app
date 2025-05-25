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
      <h1 className="font-space mb-10 lg:mb-16 lg:mt-6 w-fit text-2xl md:mx-auto md:text-4xl">
        DESIGN FOR SCALE. BUILD TO CONTROL
      </h1>
      <div className="space-y-2 md:space-y-0">
        {/* box1 */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
          <div className="max-md:w-full">
            <div className="max-md:w-full">
              <Image
                src={workFlow1}
                alt="Customizable Drag Component"
                className="object-cover max-md:w-full"
              />
            </div>
            <p className="truncate border-2 px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
              CUSTOMIZABLE DRAG COMPONENT
            </p>
          </div>
          <div className="border max-md:w-full">
            <div className="max-md:w-full">
              <Image
                src={workFlow2}
                alt="Workflow Marketplace"
                className="object-cover max-md:w-full"
              />
            </div>
            <p className="truncate border-2 px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
              WORKFLOW MARKETPLACE
            </p>
          </div>
        </div>
        {/* box2 */}
        <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:gap-0">
          <div className="max-md:w-full">
            <div className="max-md:w-full">
              <Image
                src={workFlow3}
                alt="Customizable Drag Component"
                className="object-cover max-md:w-full"
              />
            </div>
            <p className="truncate border-2 px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
              PROMPT TO GENERATE
            </p>
          </div>

          <div className="max-md:w-full">
            <div className="max-md:w-full">
              <Image
                src={workFlow4}
                alt="Workflow Marketplace"
                className="object-cover max-md:w-full"
              />
            </div>
            <p className="truncate border-2 px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
              REUSABLE MODULES
            </p>
          </div>
        </div>
      </div>
    </Bounded>

    // <div className="space-y-6 md:space-y-10">
    //   {/* Row 1 */}
    //   <div className="flex flex-col gap-4 md:flex-row md:gap-6">
    //     <div className="w-full md:w-1/2">
    //       <Image
    //         src={workFlow1}
    //         alt="Customizable Drag Component"
    //         className="h-auto w-full object-cover"
    //       />
    //     </div>
    //     <div className="w-full md:w-1/2">
    //       <Image
    //         src={workFlow2}
    //         alt="Workflow Marketplace"
    //         className="h-auto w-full object-cover"
    //       />
    //     </div>
    //   </div>
    //   {/* Row 2 */}
    //   <div className="flex flex-col gap-4 md:flex-row md:gap-6">
    //     <div className="w-full md:w-1/2">
    //       <Image src={workFlow3} alt="Feature 3" className="h-auto w-full object-cover" />
    //     </div>
    //     <div className="w-full md:w-1/2">
    //       <Image src={workFlow4} alt="Feature 4" className="h-auto w-full object-cover" />
    //     </div>
    //   </div>
    // </div>

    // <div className="">
    //   <div className="flex border">
    //     <div className="flex flex-col border">
    //     {/* <Image src={workFlow1} alt="" className="" /> */}
    //     {/* <div className="flex h-full items-center lg:pl-14">CUSTOMIZABLE DRAG COMPONENT</div> */}
    //     </div>
    //     {/* <div className="flex flex-col border"> */}
    //     {/* <Image src={workFlow2} alt="" className="" /> */}
    //     {/* <div className="flex h-full items-center lg:pl-14">WORKFLOW MARKETPLACE</div> */}
    //     {/* </div> */}
    //   </div>
    //   {/* <div className="flex h-[340px] border"> */}
    //     {/* <div className="flex flex-col border"> */}
    //     {/* <Image src={workFlow3} alt="" className="" /> */}
    //     {/* <div className="flex h-full items-center lg:pl-14">PROMPT TO GENERATE</div> */}

    //     {/* </div> */}
    //     {/* <div className="flex flex-col border"> */}
    //     {/* <Image src={workFlow4} alt="" className="" /> */}
    //     {/* <div className="flex h-full items-center lg:pl-14 ">PROMPT TO GENERATE</div> */}

    //     {/* </div> */}
    //   {/* </div> */}
    // </div>

    // <Bounded className="h-screen px-7">
    //   <p className="font-sans-plex mx-auto w-fit text-base text-primary pt-24">FEATURES</p>
    //   <h1 className="font-space mx-auto mb-16 mt-6 w-fit text-4xl">
    //     DESIGN FOR SCALE. BUILD TO CONTROL
    //   </h1>
    //   <div className="">
    //     <div className="flex h-[340px] ">
    //       <div className="flex flex-col border">
    //         <Image src={workFlow1} alt="" className="" />
    //         <div className="flex h-full items-center lg:pl-14">CUSTOMIZABLE DRAG COMPONENT</div>
    //       </div>
    //       <div className="flex flex-col border">
    //         <Image src={workFlow2} alt="" className="" />
    //         <div className="flex h-full items-center lg:pl-14">WORKFLOW MARKETPLACE</div>
    //       </div>
    //     </div>
    //     <div className="flex h-[340px] border">
    //       <div className="flex flex-col border">
    //         <Image src={workFlow3} alt="" className="" />
    //         <div className="flex h-full items-center lg:pl-14">PROMPT TO GENERATE</div>

    //       </div>
    //       <div className="flex flex-col border">
    //         <Image src={workFlow4} alt="" className="" />
    //         <div className="flex h-full items-center lg:pl-14 ">PROMPT TO GENERATE</div>

    //       </div>
    //     </div>
    //   </div>
    // </Bounded>
  )
}
// {/* <div className="space-y-8">
// {/* box1 */}
// <div className="flex flex-col items-center gap-6 font-medium md:flex-row md:justify-between">
//   {/* Item 1 */}
//   <div className="flex w-full flex-col items-center md:w-1/2">
//     <Image
//       src={workFlow1}
//       alt="Customizable Drag Component"
//       className="w-full object-cover"
//     />
//     <p className="mt-3 w-full truncate border-2 px-4 py-3 text-center text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
//       CUSTOMIZABLE DRAG COMPONENT
//     </p>
//   </div>
//   {/* Item 2 */}
//   <div className="flex w-full flex-col items-center md:w-1/2">
//     <Image src={workFlow2} alt="Workflow Marketplace" className="w-full object-cover" />
//     <p className="mt-3 w-full truncate border-2 px-4 py-3 text-center text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
//       WORKFLOW MARKETPLACE
//     </p>
//   </div>
// </div>

// {/* box2 */}
// <div className="flex flex-col items-center gap-6 font-medium md:flex-row md:justify-between">
//   {/* Item 3 */}
//   <div className="flex w-full flex-col items-center md:w-1/2">
//     <Image src={workFlow3} alt="Prompt to Generate" className="w-full object-cover" />
//     <p className="mt-3 w-full truncate border-2 px-4 py-3 text-center text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
//       PROMPT TO GENERATE
//     </p>
//   </div>
//   {/* Item 4 */}
//   <div className="flex w-full flex-col items-center md:w-1/2">
//     <Image src={workFlow4} alt="Reusable Modules" className="w-full object-cover" />
//     <p className="mt-3 w-full truncate border-2 px-4 py-3 text-center text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:py-5 lg:text-xl">
//       REUSABLE MODULES
//     </p>
//   </div>
// </div>
// </div> */}
