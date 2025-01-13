import Bounded from '@/components/elements/Bounded'
import HeroTitle from '@/components/hero-title'
import GreenMoodyOverlay from '@/components/overlay/greeny-moody-overlay'

export default function HomePage() {
  return (
    <Bounded>
      <div className="flex flex-col items-center justify-center">
        <HeroTitle
          TitleFirst="Transform Your Work with"
          TitleHero="AI Workflow"
          TitleEnd="Creation and Automation"
          ShortDesc="Effortlessly design and automate workflows with AI-powered tools. Simplify processes, boost efficiency, and focus on what matters most while letting intelligent automation handle repetitive tasks seamlessly."
        />
      </div>
      <GreenMoodyOverlay TopClassName="top-56 relative" />
    </Bounded>
  )
}
