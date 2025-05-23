import HandIcon from '@/components/icons/hand-icon'
import WorkFlowArrow from '@/components/icons/work-flow-arrow'

export default function WorkFlowSection() {
  return (
    <div className="font-space relative mx-auto grid h-[248px] w-full max-w-screen-xl grid-cols-4 text-muted-foreground">
      <div className="">
        <div className="h-[124px] w-full max-w-[200px] border border-primary p-7">DO THAT</div>
      </div>
      <div className="relative flex items-end">
        <div className="ml-5 h-[124px] w-full max-w-[200px] border border-blue-800 p-7">
          THEN DO THIS
        </div>
        <div className="absolute -bottom-[74px] left-12">
          <HandIcon />
        </div>
      </div>
      <div className="">
        <div className="mx-auto h-[124px] w-full max-w-[200px] border border-yellow-600 p-7">
          THEN THIS
        </div>
      </div>
      <div className="mt-10 flex items-center">
        <div className="ml-auto h-[124px] w-full max-w-[200px] border border-pink-800 p-7">
          DONE!
        </div>
      </div>
      <div className="absolute top-0 h-full w-full">
        <div className="flex h-full items-center justify-center">
          <WorkFlowArrow />
        </div>
      </div>
    </div>
  )
}
