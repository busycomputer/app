import AnimatedBackgroundSquare from '@/components/svg/animated-background-square'
import EarlyAccessInput from './early-access-input'
import HeroDescription from './hero-description'
import WorkFlowSection from './WorkFlowSection'
import Bounded from '@/components/elements/Bounded'

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-full">
        <AnimatedBackgroundSquare />
      </div>
      <Bounded className="max-w-[1312] px-5 pb-28">
        <div className="bg-circle-gradient absolute -top-[400px] left-1/2 h-[465px] w-64 -translate-x-1/2 rounded-full blur-[400px] md:-top-72 md:w-[365px]" />
        <HeroDescription />
        <EarlyAccessInput />
        <WorkFlowSection />
      </Bounded>
    </div>
  )
}
// <div className="px-3">
//   <div className="relative flex w-full flex-col justify-around pb-10">
//     <div className="absolute left-0 top-0 w-full">
//       <AnimatedBackgroundSquare />
//     </div>

//   </div>
// </div>
