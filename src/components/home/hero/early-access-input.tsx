import TangledSideArrow from '@/components/icons/tangled-side-arrow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EarlyAccessInput() {
  return (
    <div className="font-space-mono relative mx-auto mb-[70px] mt-3 flex h-9 max-w-80 justify-center sm:max-w-96 md:mt-5 md:h-12 lg:mt-11 lg:h-[60px] lg:max-w-[580px]">
      <div className="absolute left-0 top-1/2 -translate-x-[calc(100%-13px)] -translate-y-1/2 sm:-translate-x-[calc(100%-4px)] md:-translate-x-[calc(100%+6px)]">
        <TangledSideArrow className="h-10 w-10 stroke-[#3B3B45] sm:h-20 sm:w-20 md:h-24 md:w-24" />
      </div>
      <Input
        placeholder="ENTER YOUR WORK EMAIL"
        // className="lg:text[16px] mr-0 h-full w-full max-w-44 rounded-l-sm rounded-r-none bg-white px-6 py-4 text-sm font-bold text-primary placeholder:bg-white placeholder:text-[10px] placeholder:font-thin sm:max-w-56 md:max-w-64 md:placeholder:text-xs lg:max-w-96 lg:leading-[28px] lg:placeholder:text-sm lg:placeholder:tracking-widest xl:placeholder:text-[16px]"
        className="lg:text[16px] mr-0 h-full w-full max-w-44 rounded-l-sm rounded-r-none bg-white px-6 py-2 text-sm font-bold text-primary placeholder:bg-white placeholder:text-[10px] placeholder:font-thin sm:max-w-56 sm:py-3 md:max-w-64 md:placeholder:text-xs lg:max-w-96 lg:py-4 lg:leading-[28px] lg:placeholder:text-sm lg:placeholder:tracking-widest xl:placeholder:text-[16px]"
      />
      <Button className="-ml-1 h-full w-full max-w-28 rounded-l-none rounded-r-[4px] text-[10px] hover:bg-primary sm:max-w-36 md:max-w-56 md:text-xs lg:text-[16px] xl:max-w-[205px]">
        GET EARLY ACCESS
      </Button>
    </div>
  )
}
