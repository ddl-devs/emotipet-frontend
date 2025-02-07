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
      <header className="fixed top-0 right-0 left-0 flex items-center justify-between bg-background w-full h-fit px-32 py-8 z-20">
        <Image
          src="/assets/images/logo.png"
          alt="EmotiPet"
          width={125}
          height={125}
        />

        {isLogged && (
          <div className="flex items-center gap-16 lg:gap-32">
            <Link
              href="/home"
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
