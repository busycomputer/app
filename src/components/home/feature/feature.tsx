'use client'

import Bounded from '../../elements/Bounded'
import workFlow1 from '@/assets/images/feature/Asset 1.webp'
import workFlow3 from '@/assets/images/feature/Asset 2.webp'
import workFlow2 from '@/assets/images/feature/Asset 5.webp'
import workFlow4 from '@/assets/images/feature/Rectangle 49.png'
import FeatureBox from './feature-box'
import { useFeatureAnimation } from '@/hooks/use-feature-animation'

export default function Feature() {
  const {
    containerRef,
    headingRef,
    titleRef,
    featureBoxOneRef,
    featureBoxFourRef,
    featureBoxThreeRef,
    featureBoxTwoRef,
  } = useFeatureAnimation()

  return (
    <Bounded className="overflow-clip px-7 pb-3 pt-20 sm:pt-32" ref={containerRef}>
      {/* <DottedBackground/> */}
      <p ref={headingRef} className="font-sans-mono w-fit pt-2 text-base text-primary md:mx-auto">
        FEATURES
      </p>
      <h1
        ref={titleRef}
        className="font-space mb-10 mt-1 w-fit text-4xl text-mutedText md:mx-auto md:text-4xl lg:mb-16 lg:mt-5"
      >
        DESIGN FOR SCALE. BUILD TO CONTROL
      </h1>
      <div className="mt-7 border">
        <div className="flex flex-col md:flex-row">
          <FeatureBox
            type="long"
            key={'box1'}
            imageSrc={workFlow1}
            imageAlt={'Customizable Drag Component'}
            label="Customizable Drag Component"
            className="border-r md:basis-2/3"
            ref={featureBoxOneRef}
            imagePosition="md:px-20 md:py-16 py-4 px-4"
            enableGradient
            gradient={{
              position: 'center',
              shape: 'ellipse',
              stops: [
                { color: 'transparent', percentage: 30 },
                // { color: 'rgba(0,0,0,0.3)', percentage: 20 },
                { color: 'black', percentage: 100 },
              ],
            }}
            // `radial-gradient(ellipse at center, transparent 0%, transparent 50%,  black 100%)`,
          />
          <FeatureBox
            enableGradient
            type="small"
            key={'box2'}
            imageSrc={workFlow2}
            imageAlt={'WORKFLOW MARKETPLACE'}
            label="WORKFLOW MARKETPLACE"
            className="md:basis-1/3"
            ref={featureBoxTwoRef}
            gradient={{
              position: 'center',
              shape: 'circle',
              stops: [
                { color: 'transparent', percentage: 40 },
                { color: 'black', percentage: 100 },
              ],
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <FeatureBox
            enableGradient
            type="small"
            key={'box3'}
            imageSrc={workFlow3}
            imageAlt={'PROMPT TO GENERATE'}
            label="WORKFLOW MARKETPLACE"
            className="border-r md:basis-1/3"
            ref={featureBoxThreeRef}
            gradient={{
              position: 'center',
              shape: 'ellipse',
              stops: [
                { color: 'transparent', percentage: 30 },
                // { color: 'rgba(0,0,0,0.3)', percentage: 60 },
                { color: 'black', percentage: 100 },
              ],
            }}
          />
          <FeatureBox
            type="long"
            enableGradient
            key={'box4'}
            imageSrc={workFlow4}
            imageAlt={'REUSABLE MODULES'}
            label="REUSABLE MODULES"
            className="md:basis-2/3"
            ref={featureBoxFourRef}
            gradient={{
              position: 'center',
              shape: 'ellipse',
              stops: [
                { color: 'transparent', percentage: 30 },
                // { color: 'rgba(0,0,0,0.3)', percentage: 60 },
                { color: 'black', percentage: 100 },
              ],
            }}
            imageClassName="md:object-contain object-cover"
          />
        </div>
      </div>
    </Bounded>
  )
}
// <div className="font-space-grotesk space-y-2 text-mutedText md:space-y-0">
//   {/* box1 */}
//   <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
//     {/* <div className="max-md:w-full"> */}
//     <div className="max-md:w-full">
//       <Image
//         src={workFlow1}
//         alt="Customizable Drag Component"
//         className="object-cover max-md:w-full"
//       />
//     </div>
//     <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       CUSTOMIZABLE DRAG COMPONENT
//     </div>
//     <div className="max-md:w-full">
//       <Image
//         src={workFlow2}
//         alt="Workflow Marketplace"
//         className="object-cover max-md:w-full"
//       />
//     </div>
//     <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       WORKFLOW MARKETPLACE
//     </div>
//   </div>
//   <div className="hidden font-medium md:flex">
//     <div className="basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       CUSTOMIZABLE DRAG COMPONENT
//     </div>
//     <div className="basis-1/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       WORKFLOW MARKETPLACE
//     </div>
//   </div>
//   {/* box2 */}
//   <div className="flex flex-col-reverse items-center gap-2 md:flex-row md:gap-0">
//     {/* <div className="max-md:w-full"> */}
//     <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       PROMPT TO GENERATE
//     </div>
//     <div className="max-md:w-full">
//       <Image
//         src={workFlow3}
//         alt="Customizable Drag Component"
//         className="object-cover max-md:w-full"
//       />
//     </div>

//     <div className="block w-full basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:hidden md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       REUSABLE MODULES
//     </div>
//     <div className="max-md:w-full">
//       <Image
//         src={workFlow4}
//         alt="Workflow Marketplace"
//         className="object-cover max-md:w-full"
//       />
//     </div>
//   </div>

//   <div className="hidden font-medium md:flex">
//     <div className="basis-1/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       PROMPT TO GENERATE
//     </div>
//     <div className="basis-2/3 border-[1px] px-4 py-3 text-[10px] sm:px-5 md:px-7 md:py-4 md:text-sm lg:px-8 lg:pl-5 lg:text-xl">
//       REUSABLE MODULES
//     </div>
//   </div>
// </div>
