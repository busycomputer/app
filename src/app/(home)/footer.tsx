import React from 'react'
import { Moon } from 'lucide-react'

// Add SVG icons for social media here
import Logo from '@/assets/images/logo-192x192.png'
import Link from 'next/link'
import Image from 'next/image'
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
    { href: '/blog', label: 'Blog' },
    { href: '/customers', label: 'Customer Stories' },
    { href: '/careers', label: 'Careers' },
    { href: '/company', label: 'Company' },
    { href: '/events', label: 'Events & Webinars' },
    { href: '/ga', label: 'General Availability' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/aup', label: 'Acceptable Use Policy' },
    { href: '/support-policy', label: 'Support Policy' },
    { href: '/sla', label: 'Service Level Agreement' },
    { href: '/humans.txt', label: 'Humans.txt' },
    { href: '/lawyers.txt', label: 'Lawyers.txt' },
    { href: '/.well-known/security.txt', label: 'Security.txt' },
  ]

  const LinkColumn = ({
    title,
    links,
  }: {
    title: string
    links: { href: string; label: string }[]
  }) => (
    <div>
      <h6 className="text-base text-foreground">{title}</h6>
      <ul className="mt-4 space-y-2">
        {links.map((link, index) => (
          <li key={`${link.href}-${index}`}>
            <a href={link.href}>
              <div className="text-foreground-lighter text-sm transition-colors hover:text-foreground">
                {link.label}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-alternative" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-8 lg:px-16 xl:px-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-8 xl:col-span-1">
            <Link className="w-12 flex items-center font-bold text-xl" href="/">
              <Image
                width={160}
                height={160}
                alt="Buzycomputer Logo"
                className="max-w-16"
                src={Logo.src}
              />
              Buzycomputer
            </Link>
            <div className="flex space-x-5">{/* Add social media icons/links here */}</div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <LinkColumn title="Product" links={productLinks} />
              <LinkColumn title="Resources" links={resourceLinks} />
              <LinkColumn title="Developers" links={developerLinks} />
              <LinkColumn title="Company" links={companyLinks} />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-default mt-32 flex justify-between border-t pt-8">
          <small className="text-sm">© Buzycomputer Inc</small>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
