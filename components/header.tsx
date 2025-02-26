import Link from "next/link";
import Image from "next/image";
import logo from "../assets/icons/logo.png"

export function Header() {
    return (
        <header className="">
        <div className="flex flex-row justify-between w-full text-2xl mt-7">
          <div className="ml-10 ">
            <Image src={logo} alt="Logo do site" width={150} height={100} priority />
          </div>
          <ul className="flex flex-row gap-5 mr-10">
            <li><Link href="../">Home</Link></li>
            <li><Link href="../about">About</Link></li>
            <li><Link href="../contact">Contact</Link></li>
          </ul>
        </div>
      </header>
    )
}