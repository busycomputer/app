import EarlyAccessInput from './early-access-input'
import HeroDescription from './hero-description'
import WorkFlowSection from './WorkFlowSection'

export default function Hero() {
  return (
    <div className="bg-[#070706] px-3 bg-box-neutral-700">
      <div className="relative flex w-full flex-col justify-around pb-10">
        <div className="bg-circle-gradient absolute -top-[400px] left-1/2 h-[465px] w-64 -translate-x-1/2 rounded-full blur-[400px] md:-top-72 md:w-[365px]" />
        <HeroDescription />
        <EarlyAccessInput />
        <WorkFlowSection />
      </div>
    </div>
  )
}
