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
      <div className="mt-7 space-y-5 md:space-y-0 md:border">
        <div className="flex flex-col gap-5 md:flex-row md:gap-0">
          <FeatureBox
            id="box1"
            type="long"
            key={'box1'}
            imageSrc={workFlow1}
            imageAlt={'Customizable Drag Component'}
            label="Customizable Drag Component"
            className="border md:basis-2/3 md:border-y-0 md:border-l-0 md:border-r"
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
            id="box2"
            enableGradient
            type="small"
            key={'box2'}
            imageSrc={workFlow2}
            imageAlt={'WORKFLOW MARKETPLACE'}
            label="WORKFLOW MARKETPLACE"
            className="border md:basis-1/3 md:border-none"
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
        <div className="flex flex-col gap-5 md:flex-row md:gap-0">
          <FeatureBox
            id="box3"
            enableGradient
            type="small"
            key={'box3'}
            imageSrc={workFlow3}
            imageAlt={'PROMPT TO GENERATE'}
            label="PROMPT TO GENERATE"
            className="border md:basis-1/3 md:border-y-0 md:border-l-0 md:border-r"
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
            id="box4"
            type="long"
            enableGradient
            key={'box4'}
            imageSrc={workFlow4}
            imageAlt={'REUSABLE MODULES'}
            label="REUSABLE MODULES"
            className="border md:basis-2/3 md:border-none"
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
