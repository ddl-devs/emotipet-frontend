"use client"

import { CardPet } from "@/components/CardPet";
import { Header } from "@/components/Header";
import { MainImageIndex } from "@/components/MainImageIndex";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PetsUserPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    for (let i = 0; i < 7; i++) {
      const timeout = setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 200);
      timeouts.push(timeout);
    }
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <Header isLogged={true} />
      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray overflow-x-hidden">
        <MainImageIndex />
        
        <div className="absolute flex flex-col gap-1 items-start justify-center left-1/2 top-60">
          <div className="flex flex-row items-center justify-start w-full">
            <h1 className="text-5xl font-bold text-orange">Meus Pets</h1>
            <Link href={`/user/${1}/pets/add`}>
              <button className="bg-blue text-white ml-8 font-semibold text-lg p-3 rounded-full hover:scale-110">Adicionar Pet</button>
            </Link>
          </div>

          <div className="flex flex-row flex-wrap gap-1 items-start justify-start mt-10 max-w-3xl">
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${visibleCards.includes(index) ? "opacity-100" : "opacity-0"}`}
              >
                <CardPet />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
