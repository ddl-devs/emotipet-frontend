import { CardAnalysis } from "@/components/CardAnalysis";
import { MainImageIndex } from "@/components/MainImageIndex";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header isLogged={true} />

      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray">
        
          <MainImageIndex/>
          <Image 
            src="/assets/images/rabo gato.png"
            alt="Bolota"
            width={436}
            height={979}
            className="absolute top-0 -right-5 z-0 "
          />
        
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
            <div className="flex flex-row gap-2">
              <CardAnalysis z_index={20}/>
              <CardAnalysis z_index={10}/>
              <CardAnalysis z_index={5}/>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
