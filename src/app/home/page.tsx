import { CardAnalysis } from "@/components/CardAnalysis";
import { MainImageIndex } from "@/components/MainImageIndex";
import { Header } from "@/components/Header";
import Image from "next/image";
import style from "./style.module.css"

export default function HomePage() {
  return (
    <>
      <Header isLogged={true} />

      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray overflow-hidden">
        
          <MainImageIndex/>
          <Image 
            src="/assets/images/rabo gato.png"
            alt="Bolota"
            width={205}
            height={746}
            className="absolute -top-10 right-0 z-0 overflow-hidden"
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
            <div id={style.cards_analises} className="flex flex-row gap-2">
              <CardAnalysis z_index={50}/>
              <CardAnalysis z_index={30}/>
              <CardAnalysis z_index={10}/>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
