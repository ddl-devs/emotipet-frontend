"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonHeader } from "../ButtonHeader";

interface HeaderProps {
  isLogged: boolean;
}

export function Header({ isLogged }: HeaderProps) {
  return (
    <div>
      <header className="absolute top-0 right-0 left-0 flex items-center justify-between w-full h-auto px-32 py-4 z-20">
        <Link href="/home">
            <Image
              src="/assets/svg/logo emotipet.svg"
              alt="EmotiPet"
              width={167}
              height={61}
            />
        </Link>
        {isLogged && (
          <div className="flex items-center gap-16 lg:gap-32">
            <Link
              href="/user/id/pets"
              className="text-blue hover:text-blue-700 text-xl font-bold"
            >
              Meus pets
            </Link>
            <Link
              href="/home"
              className="text-blue hover:text-blue-700 text-xl font-bold"
            >
              Análises
            </Link>
          </div>
        )}

        {isLogged && <ButtonHeader />}
      </header>
    </div>
  );
}
