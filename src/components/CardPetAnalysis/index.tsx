"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function CardPetAnalysis() {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="relative">

      <button 
      onClick={() => setShowDetail(!showDetail)}
      className={` ${showDetail ? 'border-blue border-2': ''} relative flex flex-col bg-white w-[134px] h-[134px] items-center rounded-2xl overflow-hidden`}
      title="Show details">
        <Image
        src="/assets/images/bolota.png"
        alt="Bolota"
        layout="fill"
        objectFit="cover"
        className="max-w-36 max-h-36"
        />
      </button>
      
      {showDetail && (
      <div className={`z-20 border-blue border gap-1 absolute bottom-[140px] w-52 flex flex-col bg-white p-4 rounded-2xl shadow-lg`}>
        <h1 className="text-blue text-xl self-center font-semibold mb-2">Detalhes da análise</h1>
        <p>Raça: Pastor-Alemão</p>
        <p>Acuracia(0-100): 97 </p>
        <p>data: 27/02/2025</p>
        <button className="mt-1 bg-red rounded-full py-1 text-white font-semibold" onClick={() => setShowDetail(false)}>Fechar</button>
      </div>
      )}

    </div>
  );
}
