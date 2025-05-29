import TangledSideArrow from '@/components/svg/tangled-side-arrow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EarlyAccessInput() {
  return (
    <div className="relative">
      <div className="font-space-mono relative mb-[70px] mt-32 flex h-9 w-full sm:mx-auto sm:mt-3 sm:max-w-96 sm:justify-center md:mt-5 md:h-12 lg:mt-11 lg:h-[60px] lg:max-w-[580px]">
        <div className="absolute -top-14 left-14 -translate-x-[calc(100%-13px)] -translate-y-1/2 sm:left-0 sm:top-1/2 sm:-translate-x-[calc(100%-4px)] md:-translate-x-[calc(100%+6px)]">
          <TangledSideArrow className="h-24 w-24 rotate-90 stroke-[#3B3B45] sm:h-20 sm:w-20 sm:rotate-0 md:h-24 md:w-24" />
        </div>
        <Input
          placeholder="ENTER YOUR EMAIL ADDRESS"
          className="lg:text[16px] mr-0 h-full w-full max-w-44 border border-white rounded-l-sm rounded-r-none bg-white py-0 text-sm font-bold text-primary placeholder:bg-white placeholder:text-[10px] placeholder:font-thin sm:max-w-56 sm:px-6 sm:py-3 md:max-w-64 md:placeholder:text-xs lg:max-w-96 lg:py-4 lg:leading-[28px] lg:placeholder:text-sm lg:placeholder:tracking-widest xl:placeholder:text-[16px]"
        />
        <Button className="-ml-1 h-full w-full max-w-28 rounded-l-none rounded-r-[4px] text-[10px] hover:bg-primary sm:max-w-36 md:max-w-56 md:text-xs lg:text-[16px] xl:max-w-[205px]">
          GET EARLY ACCESS
        </Button>
      </div>
    </div>
  )
}
