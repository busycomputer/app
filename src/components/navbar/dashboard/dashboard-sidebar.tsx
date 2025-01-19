import HouseIcon from '@/components/Icon/house'
import PersonIcon from '@/components/Icon/PersonIcon'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import NavigationLinkKnown from './Navigation-link-known'
import FileIcon from '@/components/Icon/FileIcon'
import RocketIcon from '@/components/Icon/RocketIcon'

export default function NavigationSideBar() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full">
        <Link className="flex w-full rounded-md bg-secondary" href={'/dashboard'}>
          <div className="flex w-full items-center gap-3 px-4 py-2">
            <div className="">
              <div className="h-8 w-8 rounded-xl bg-primary p-1.5">
                <HouseIcon />
              </div>
            </div>
            <p className="font-medium">Dashboard</p>
          </div>
        </Link>
      </div>
      <div className="pt-12">
        <h1 className="pl-2 text-sm font-medium">PROJECTS</h1>
      </div>
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="flex flex-col gap-2 pt-4">
          <NavigationLinkKnown Icon={<PersonIcon />} title="My Drafts" />
          <NavigationLinkKnown Icon={<FileIcon />} title="Marketplace" />
          <NavigationLinkKnown Icon={<RocketIcon />} title="Community" />
        </div>
        <div className="">
          <NavigationLinkKnown Icon={<RocketIcon />} title="Community" />
        </div>
      </div>
    </div>
  )
}
