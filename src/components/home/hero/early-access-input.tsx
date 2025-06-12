'use client'

import TangledSideArrow from '@/components/svg/tangled-side-arrow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEarlyAccessInput } from '@/hooks/useEarlyAccessInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type TEarlyAccessForm = z.infer<typeof schema>
const schema = z.object({
  referralCode: z
    .string()
    .max(6, { message: 'Maximum length is 6' })
    .min(6, { message: 'Minimum length is 6' }),
  walletAddress: z
    .string()
    .max(10, { message: 'Cannot exceed 15' })
    .min(10, { message: 'Minimum length is 10' }),
})

export default function EarlyAccessInput() {
  const { inputRef } = useEarlyAccessInput()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TEarlyAccessForm>({
    resolver: zodResolver(schema),
  })
  function onSubmit(values: TEarlyAccessForm) {
    console.log(values)
  }
  return (
    <div className="" ref={inputRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-space-mono relative mb-[70px] mt-32 flex w-full flex-col gap-3 sm:mx-auto sm:mt-3 sm:max-w-96 sm:flex-col sm:justify-center sm:gap-4 md:mt-5 md:max-w-2xl md:flex-col md:gap-3 lg:mt-11 lg:h-[44px] lg:max-w-fit lg:flex-row lg:gap-4">
          <div className="absolute -top-14 left-14 -translate-x-[calc(100%-13px)] -translate-y-1/2 sm:left-0 sm:top-1/2 sm:-translate-x-[calc(100%-4px)] md:-translate-x-[calc(100%+6px)]">
            <TangledSideArrow className="h-24 w-24 rotate-90 stroke-[#3B3B45] sm:h-20 sm:w-20 sm:rotate-0 md:h-24 md:w-24" />
          </div>
          <div className="space-y-2 sm:flex sm:gap-4 sm:space-y-0 md:flex md:gap-3 lg:contents">
            <Input
              placeholder="REFERRAL CODE"
              className="mr-0 h-[50px] w-full rounded-sm border border-muted bg-muted py-0 text-center text-[16px] text-sm font-bold tracking-widest text-primary placeholder:bg-muted placeholder:text-center placeholder:font-thin sm:h-[50px] sm:max-w-none sm:flex-1 sm:px-6 sm:py-3 sm:text-left sm:placeholder:text-left sm:placeholder:text-xs md:h-[50px] md:max-w-none md:flex-1 md:px-4 lg:h-full lg:max-w-40 lg:py-4 lg:leading-[28px] lg:placeholder:tracking-widest xl:placeholder:text-[12px]"
              {...register('referralCode')}
            />
            {errors.referralCode ? (
              <div className="text-xs font-thin">{errors.referralCode.message}</div>
            ) : null}
            <Input
              {...register('walletAddress')}
              placeholder="YOUR WALLET ADDRESS"
              className="mr-0 h-[50px] w-full rounded-sm border border-muted bg-muted py-0 text-center text-[16px] text-sm font-bold tracking-widest text-primary placeholder:bg-muted placeholder:text-center placeholder:font-thin sm:h-[50px] sm:max-w-none sm:flex-1 sm:px-6 sm:py-3 sm:text-left sm:placeholder:text-left sm:placeholder:text-xs md:h-[50px] md:max-w-none md:flex-1 md:px-4 lg:h-full lg:w-80 lg:py-4 lg:leading-[28px] lg:placeholder:tracking-widest xl:placeholder:text-[12px]"
            />
            {errors.walletAddress ? <div className="">{errors.walletAddress.message}</div> : null}
          </div>
          <Button
            type="submit"
            className="h-[50px] w-full self-center truncate rounded-sm px-2 tracking-widest hover:bg-primary sm:-ml-1 sm:text-xs md:w-full lg:h-full lg:max-w-[180px] lg:text-[12px]"
          >
            GET EARLY ACCESS
          </Button>
        </div>
      </form>
    </div>
  )
}
