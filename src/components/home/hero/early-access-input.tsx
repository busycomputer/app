import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EarlyAccessInput() {
  return (
    <div className="mx-auto font-space-mono flex w-full max-w-[580px] justify-center h-[60px] mt-11 mb-[70px] ">
      <Input
        placeholder="ENTER YOUR WORK EMAIL"
        className="w-full max-w-96 rounded-l-sm rounded-r-none bg-white text-lg h-full font-bold mr-0 text-primary placeholder:bg-white placeholder:tracking-widest placeholder:font-thin"
      />
      <Button className="-ml-1 h-full hover:bg-primary  rounded-l-none rounded-r-[4px]">GET EARLY ACCESS</Button>
    </div>
  )
}
