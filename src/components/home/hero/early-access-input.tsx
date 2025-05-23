import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EarlyAccessInput() {
  return (
    <div className="font-space-mono mx-auto mb-[70px] mt-11 flex h-[45px] w-full max-w-[450] justify-center lg:h-[60px] lg:max-w-[580px]">
      <Input
        placeholder="ENTER YOUR WORK EMAIL"
        className="mr-0 h-full w-full max-w-96 rounded-l-sm rounded-r-none bg-white font-bold text-primary placeholder:bg-white placeholder:font-thin lg:placeholder:tracking-widest text-sm lg:text-lg"
      />
      <Button className="-ml-1 h-full rounded-l-none rounded-r-[4px] hover:bg-primary">
        GET EARLY ACCESS
      </Button>
    </div>
  )
}
