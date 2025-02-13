"use client";

import Image from "next/image";
import { useState } from "react";
import style from "@/components/CardAnalysis/style.module.css";

interface CardAnalysisProps {
  z_index: number;
}

export function CardAnalysis({z_index}: CardAnalysisProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsModalOpen(true)}
      onMouseLeave={() => setIsModalOpen(false)}
      className="relative inline-block"
    >
      <div className="relative flex flex-col items-center p-24 bg-white shadow-lg rounded-2xl overflow-hidden" style={{ zIndex: z_index }}>
        <Image
          src="/assets/images/bolota.png"
          alt="Bolota"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute top-2 left-2 bg-blue text-white px-4 py-1 rounded-2xl">
          <h3 className="text-sm font-bold">Bolota</h3>
        </div>
      </div>

      {isModalOpen && (
        <div className={style.cardAnalysisContent} style={{ zIndex: z_index-1 }}>
          <h3 className="text-base font-bold">Análise de emoção</h3>
          <p className="text-green font-semibold">Feliz 😊</p>
          <p className="text-whiteGray text-xs font-medium">25/02/2025</p>
        </div>
      )}
    </div>
  );
}
