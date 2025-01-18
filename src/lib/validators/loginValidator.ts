import { z } from 'zod'

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, {
      message: 'Minimum length is 5',
    })
    .max(20, {
      message: 'Maximum length is 20',
    }),
})

export type TUserAuthSchema = z.infer<typeof userAuthSchema> 