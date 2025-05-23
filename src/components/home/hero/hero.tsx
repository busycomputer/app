import EarlyAccessInput from "./early-access-input";
import HeroDescription from "./hero-description";
import WorkFlowSection from "./work-flow-section";

export default function Hero() {
  return (
    <div className="bg-neutral-950">
      <div className="relative h-screen w-full bg-box-neutral-700">
        <div className="bg-circle-gradient absolute -top-3 left-1/2 h-[465px] w-[365px] -translate-x-1/2 rounded-full blur-[400px]"/>
        <div className="h-36"/>
        <div className="h-[calc(100vh-144px)] ">
            <HeroDescription/>
            <EarlyAccessInput/>
            <WorkFlowSection/>
        </div>
      </div>
    </div>

    // <div className="h-screen bg-box-neutral-400/[0.2]">hero</div>
  )
}
