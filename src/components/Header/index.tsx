"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonHeader } from "../ButtonHeader";

interface HeaderProps {
  isLogged: boolean;
}

export default function Header({ isLogged }: HeaderProps) {
  return (
    <div className="absolute top-0 right-0 left-0 flex">
      <header className="flex relative items-center justify-between w-full h-auto px-32 py-4 z-20">
        <Link href="/home">
            <Image
              src="/assets/svg/logo emotipet.svg"
              alt="EmotiPet"
              width={167}
              height={61}
            />
        </Link>
        {isLogged && <ButtonHeader />}
      </header>
    </div>
  );
}
