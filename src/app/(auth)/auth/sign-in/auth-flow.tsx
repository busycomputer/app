'use client'
import { toast } from 'sonner'
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
      className="w-full max-w-[464px] rounded-2xl bg-secondary p-5 md:p-10"
    >
      <div className="flex flex-col items-center justify-center pb-4">
        <h1 className="mb-1 text-2xl font-semibold">Sign In</h1>
        <p className="text-sm font-light text-muted-foreground">Your Social Campaigns</p>
      </div>
      {/* OAuth flow */}
      <div className="flex w-full max-w-[386px] flex-col items-center justify-center gap-2 md:flex-row">
        <Link
          href={'/auth/github'}
          className={buttonVariants({
            className: 'mt-2 h-10 w-full rounded-2xl bg-secondary text-sm text-primary md:w-auto',
            variant: 'outline',
          })}
        >
          <GitHubLogoIcon />
          Sign in with Github
        </Link>
        <Link
          href={'/auth/sign-in'}
          className={buttonVariants({
            className:
              'mt-2 h-10 w-full cursor-not-allowed rounded-2xl bg-secondary text-sm md:w-auto',
            variant: 'outline',
          })}
        >
          <IconBrandGoogleFilled />
          Sign in with Google
        </Link>
      </div>
      {/*  */}
      <div className="flex w-full items-center justify-center gap-2 py-6">
        <div className="h-[0.1px] w-full bg-muted-foreground" />
        <p className="flex-shrink-0 text-xs font-light text-muted-foreground">Or with Email</p>
        <div className="h-[0.1px] w-full bg-muted-foreground" />
      </div>
      <div className="flex max-w-[386px] flex-col gap-2">
        <Input
          className="h-10 rounded-xl placeholder:text-sm placeholder:font-light focus-visible:ring-primary"
          placeholder="Email"
          {...register('email')}
        />
        <Input
          className="h-10 rounded-xl placeholder:text-sm placeholder:font-light focus-visible:ring-primary"
          placeholder="Password"
          type="password"
          {...register('password')}
        />
      </div>
      <div className="flex justify-end pb-7 pt-4">
        <p className="text-sm text-primary">Forgot Password ?</p>
      </div>
      <Button type="submit" className="h-10 w-full">
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
            <span className="text-primary"> Join Guest</span>
          </p>
        </button>
      </div>
    </form>
  )
}
