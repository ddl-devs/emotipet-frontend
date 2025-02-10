import { CardAnalysis } from "@/components/CardAnalysis";
import { MainImageIndex } from "@/components/MainImageIndex";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header isLogged={true} />

      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray">
        <div className="">
          <MainImageIndex
          />
        </div>
        
        <div className="fixed flex flex-col items-start justify-center left-1/2">
          <h1 className="text-6xl font-bold text-blue">
            Seu pet feliz é a nossa alegria
          </h1>
          <p className="text-2xl text-gray mt-8">
            Ultimas análises realizadas
          </p>
          <div className="flex flex-row gap-8 mt-8">
          <CardAnalysis />
          <CardAnalysis />
          </div>
        </div>
      </main>
    </>
  );
}
