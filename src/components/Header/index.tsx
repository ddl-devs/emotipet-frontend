"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonHeader } from "../ButtonHeader";

interface HeaderProps {
  isLogged: boolean;
}

export function Header({ isLogged }: HeaderProps) {
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
        {isLogged && (
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-16 lg:gap-32">
            <Link
              href="/user/id/pets"
              className="border border-blue rounded-xl py-1 px-3 text-blue hover:text-white hover:bg-blue text-xl font-bold"
            >
              Meus pets
            </Link>
          </div>
        )}

        {isLogged && <ButtonHeader />}
      </header>
    </div>
  );
}
