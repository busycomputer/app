import { Metadata } from 'next'
import {
  SITE_TWITTER,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_KEYWORDS,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_SHORT_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  metadataBase: new URL(`https://${SITE_DOMAIN}`),

  openGraph: {
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        alt: SITE_SHORT_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: '/og-image',
    creator: SITE_TWITTER,
  },

  appleWebApp: {
    title: SITE_NAME,
  },
}
