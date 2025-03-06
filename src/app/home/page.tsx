"use client";
import { MainImageIndex } from "@/components/MainImageIndex";
import { Header } from "@/components/Header";
import PetsFilters from "@/components/PetsFilters";

export default function HomePage() {
  return (
    <>
      <Header isLogged={true} />

      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray overflow-hidden">

        <MainImageIndex/>

        <div className="absolute flex flex-col items-start justify-center left-1/2 top-60">

          <h1 className="text-5xl font-medium text-orange">
            Bem-vindo(a)
          </h1>

          <div className="flex flex-row items-center justify-start w-full mb-5">
            <h1 className="text-5xl font-bold text-orange">Meus Pets</h1>
          </div>
          <PetsFilters/>

        </div>
      </main>
    </>
  );
}
