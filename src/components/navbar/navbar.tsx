import Logo from '../svg/logo'

export default function Navbar() {
  return (
    <div className="absolute top-0 z-50 flex h-32 w-full items-center justify-center md:h-36">
      <Logo className="w-14 md:h-[83px] md:w-[77px]" />
    </div>
  )
}
