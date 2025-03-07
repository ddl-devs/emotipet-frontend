"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface cardPetAnalysisProps {
  result: string,
	accuracy: number,
	analysisType: string,
	analysisStatus: string,
  createdAt: string
  picture: string
}

export default function CardPetAnalysis(props: cardPetAnalysisProps) {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="relative">

      <button 
      onClick={() => setShowDetail(!showDetail)}
      className={` ${showDetail ? 'border-blue border-2': ''} relative flex flex-col bg-white w-[134px] h-[134px] items-center rounded-2xl overflow-hidden`}
      title="Show details">
        <Image
        src={props.picture ? props.picture : "/assets/images/pet-placeholder.png"}
        alt="Bolota"
        layout="fill"
        objectFit="cover"
        className="max-w-36 max-h-36"
        />
      </button>
      
      {showDetail && (
      <div className={`z-20 border-blue border gap-1 absolute bottom-[140px] w-52 flex flex-col bg-white p-4 rounded-2xl shadow-lg`}>
        <h1 className="text-blue text-xl self-center font-semibold mb-2">Detalhes da análise</h1>
        { props.analysisStatus != "IN_ANALYSIS" ?
          <p>Resultado: {props.result}</p>: null
        }
        {
          props.analysisStatus === "IN_ANALYSIS" ?
          <p>Status: Em análise</p>
          :
          <p>Status: Completo</p>
        }
        {props.accuracy !== undefined  || props.accuracy == 0 && (
          <p>Acuracia(0-100): {(props.accuracy * 100).toFixed(2)}</p>
        )}
        <p>Tipo: {props.analysisType === "BREED" ? "Raça" : props.analysisType === "EMOTIONAL" ? "Emoção" : props.analysisType}</p>
        <p>Data: {new Date(props.createdAt).toLocaleDateString('pt-BR')}</p>
        <button className="mt-1 bg-red rounded-full py-1 text-white font-semibold" onClick={() => setShowDetail(false)}>Fechar</button>
      </div>
      )}

    </div>
  );
}
