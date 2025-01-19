'use client'
import { toast } from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { IconBrandGoogleFilled } from '@tabler/icons-react'
import Link from 'next/link'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { CreateOrLoginEmailUser, loginAsGuest } from '@/app/actions/create-email-user'
import { TUserAuthSchema, userAuthSchema } from '@/lib/validators/loginValidator'
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'

export default function AuthFlow() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUserAuthSchema>({
    resolver: zodResolver(userAuthSchema),
  })
  const { mutate, isPending } = useMutation({
    mutationFn: CreateOrLoginEmailUser,
  })

  const onSubmit: SubmitHandler<TUserAuthSchema> = async (data) => {
    mutate(data)
  }
  const onError: SubmitErrorHandler<TUserAuthSchema> = (data) => {
    if (data.email?.message) {
      toast.error(data.email?.message)
      return
    }
    toast.error(data.password?.message)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="w-full max-w-md rounded-2xl bg-secondary p-5 md:p-10"
    >
      <div className="flex flex-col items-center justify-center pb-4">
        <h1 className="mb-1 text-2xl font-semibold">Sign In</h1>
        <p className="text-sm font-light text-muted-foreground">Your Social Campaigns</p>
      </div>
      {/* OAuth flow */}
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        <Link
          href={'/auth/github'}
          className={buttonVariants({
            className: 'mt-2 h-10 w-full rounded-2xl bg-secondary text-green-500 md:w-auto',
            variant: 'outline',
          })}
        >
          <GitHubLogoIcon />
          Continue with Github
        </Link>
        <Link
          href={'/auth/sign-in'}
          className={buttonVariants({
            className: 'mt-2 h-10 w-full cursor-not-allowed rounded-2xl bg-secondary md:w-auto',
            variant: 'outline',
          })}
        >
          <IconBrandGoogleFilled />
          Continue with Google
        </Link>
      </div>
      {/*  */}
      <div className="flex w-full items-center justify-center gap-2 py-6">
        <div className="h-[0.1px] w-full bg-muted-foreground" />
        <p className="flex-shrink-0 text-xs font-light text-muted-foreground">Or with Email</p>
        <div className="h-[0.1px] w-full bg-muted-foreground" />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          className="rounded-xl placeholder:text-sm placeholder:font-light"
          placeholder="Email"
          {...register('email')}
        />
        <Input
          className="rounded-xl placeholder:text-sm placeholder:font-light"
          placeholder="Password"
          type="password"
          {...register('password')}
        />
      </div>
      <div className="flex justify-end pb-3 pt-4">
        <p className="text-sm text-green-500">Forgot Password ?</p>
      </div>
      <Button type="submit" className="w-full">
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <></>} Sign In
      </Button>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={async () => {
            await loginAsGuest()
          }}
          className="flex items-center justify-center"
        >
          <p className="pt-6 text-sm text-muted-foreground">
            Don&apos;t want to Signup?
            <span className="text-green-500"> Join Guest</span>
          </p>
        </button>
      </div>
    </form>
  )
}
