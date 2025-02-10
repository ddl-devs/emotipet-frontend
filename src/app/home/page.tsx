import { CardAnalysis } from "@/components/CardAnalysis";
import { MainImageIndex } from "@/components/MainImageIndex";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header isLogged={true} />

      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray">
        
        <div>
          <MainImageIndex
          />
        </div>
        
        <div className="absolute flex flex-col items-start justify-center left-1/2 top-60">

          <h1 className="text-5xl font-medium text-orange">
            Seja Bem-vindo(a)
          </h1>
          <h1 className="text-5xl font-bold text-orange">
            Damião
          </h1>

          <div className="mt-20">
            <p className="text-2xl text-blue mb-3">
              Ultimas análises realizadas
            </p>
            <div className="flex flex-row gap-8">
              <CardAnalysis />
              <CardAnalysis />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
