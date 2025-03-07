"use client"

import CardPet from "@/components/CardPet";
import Header from "@/components/Header";
import MainImageIndex from "@/components/MainImageIndex";
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
      </main>
    </>
  );
}
