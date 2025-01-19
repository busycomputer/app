import '@/app/globals.css'
import BusyComputerRow from '@/components/Icon/busy-computer-row'
import NavigationSideBar from '@/components/navbar/dashboard/dashboard-sidebar'
import React from 'react'
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid h-screen  grid-cols-[250px_calc(100%-250px)]">
      <div className="flex w-full bg-black ">
        <div className="flex flex-col w-full items-center justify-center  py-4 md:py-7">
          <BusyComputerRow />
          <div className='w-full h-full  flex px-4 pt-6'>
            <NavigationSideBar />
          </div>
        </div>
        {/* <Image src={BusyLogo.src} height={480} width={720} alt="Busy computer logo row" /> */}
      </div>
      {children}
    </div>
  )
}
