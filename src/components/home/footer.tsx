import React from 'react'
import { Moon } from 'lucide-react'
// Add SVG icons for social media here
import Link from 'next/link'
import Image from 'next/image'
import ButtonContainer from '@/assets/icons/Buttons Container.svg'
import Logo from '@/assets/images/logo-192x192.png'
import BzLogo from '../Icons/bz-logo'
import LinkedId from '../icons/linkedId'
import Twitter from '../icons/twitter'

const Footer = () => {
  const productLinks = [
    { href: '/database', label: 'Database' },
    { href: '/auth', label: 'Auth' },
    { href: '/edge-functions', label: 'Functions' },
    { href: '/realtime', label: 'Realtime' },
    { href: '/storage', label: 'Storage' },
    { href: '/modules/vector', label: 'Vector' },
    { href: '/modules/cron', label: 'Cron' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/launch-week', label: 'Launch Week' },
  ]

  const resourceLinks = [
    { href: '/support', label: 'Support' },
    { href: 'https://status.supabase.com/', label: 'System Status' },
    { href: '/partners', label: 'Become a Partner' },
    { href: '/partners/integrations', label: 'Integrations' },
    { href: '/brand-assets', label: 'Brand Assets / Logos' },
    { href: '/security', label: 'Security and Compliance' },
    { href: '/legal/dpa', label: 'DPA' },
    { href: '/security', label: 'SOC2' },
    { href: 'https://forms.supabase.com/hipaa2', label: 'HIPAA' },
  ]

  const developerLinks = [
    { href: '/docs', label: 'Documentation' },
    { href: '/changelog', label: 'Changelog' },
    {
      href: 'https://github.com/supabase/supabase/blob/master/CONTRIBUTING.md',
      label: 'Contributing',
    },
    { href: '/open-source', label: 'Open Source' },
    { href: '/supasquad', label: 'SupaSquad' },
    { href: 'https://dev.to/supabase', label: 'DevTo' },
    { href: '/rss.xml', label: 'RSS' },
  ]

  const companyLinks = [
    { href: 'https://x.com/busycomputer', label: 'Twitter', isBlank: true },
    { href: '/#footer', label: 'Telegram' },
    { href: '/#footer', label: 'Discord' },
    { href: '/#footer', label: 'Docs' },
    { href: '/#footer', label: 'App' },
  ]

  const LinkColumn = ({
    title,
    links,
  }: {
    title: string
    links: { href: string; label: string; isBlank?: boolean }[]
  }) => (
    <div>
      <h6 className="text-base text-foreground">{title}</h6>
      <ul className="mt-4 space-y-2">
        {links.map((link, index) => (
          <li key={`${link.href}-${index}`}>
            <Link href={link.href} target={link.isBlank ? '_blank' : undefined}>
              <div className="text-foreground-lighter text-sm transition-colors hover:text-foreground">
                {link.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-alternative h-60 border-t" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      {/* Main Footer Content */}
      <div className="flex h-full items-center">
        <div className="container mx-auto px-6 pb-8 lg:px-16 xl:px-20">
          <div className="">
            {/* Logo and Social Links */}
            <div className="flex justify-between">
              <div className="flex items-center gap-3 text-lg">
                <Image src={ButtonContainer} alt="Logo" />
                <p className="font-space">BUSY COMPUTER</p>
              </div>

              <div className="flex flex-wrap items-center">
                <div className="hidden lg:block">
                  <p className="font-space-mono px-5 text-xl">Stay Connected</p>
                </div>
                <div className="p-4">
                  <Twitter />
                </div>
                <div className="p-4">
                  <LinkedId />
                </div>
              </div>
              {/* <div className="flex space-x-5">Add social media icons/links here</div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
{
  /* Navigation Links */
}
{
  /* <LinkColumn title="Product" links={productLinks} /> */
}
{
  /* <LinkColumn title="Resources" links={resourceLinks} /> */
}
{
  /* <LinkColumn title="Developers" links={developerLinks} /> */
}
{
  /* <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div />
              <div />
              <div />
              <LinkColumn title="Company" links={companyLinks} />
            </div>
          </div> */
}

{
  /* Footer Bottom */
}
{
  /* <div className="border-default mt-32 flex justify-between border-t pt-8">
          <small className="text-sm">© busycomputer Inc</small>
          <div>
            <button
              id="user-settings-dropdown"
              className="text-foreground-light flex h-7 w-7 items-center justify-center"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <Moon className="h-5 w-5 rotate-90 transition-all dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div> */
}

export default Footer
