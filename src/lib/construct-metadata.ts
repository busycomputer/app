import { Metadata } from 'next'
import { SITE_TWITTER, SITE_DESCRIPTION, SITE_DOMAIN, SITE_NAME } from '@/lib/constants'
export function constructMetadata({
  title = `${SITE_NAME}`,
  description = `${SITE_DESCRIPTION}`,
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
  publishedTime,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
  publishedTime?: Date
} = {}): Metadata {
  return {
    title,
    description,

    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      publishedTime: publishedTime ? publishedTime.toString() : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: `@${SITE_TWITTER}`,
    },
    icons,
    metadataBase: new URL(`${SITE_DOMAIN}`),

    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  }
}
