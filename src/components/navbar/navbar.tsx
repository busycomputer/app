import Image from "next/image";
import ButtonContainer from '@/assets/icons/Buttons Container.svg'


export default function Navbar() {
  return (
    <div className="absolute top-0 h-36 z-50 w-full flex items-center justify-center">
        <Image src={ButtonContainer} alt="Logo"/>
    </div>
  )
}
