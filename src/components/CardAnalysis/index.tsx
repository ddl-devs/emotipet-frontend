"use client";

import Image from "next/image";
import { useState } from "react";

export function CardAnalysis() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsModalOpen(true)}
      onMouseLeave={() => setIsModalOpen(false)}
      className="relative inline-block"
    >
      <div className="relative flex flex-col items-center p-24 bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/assets/images/bolota.png"
          alt="Bolota"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute top-4 left-4 bg-blue text-white px-4 py-1 rounded-xl">
          <h3 className="text-sm font-bold">Bolota</h3>
        </div>
      </div>

      {isModalOpen && (
        <div className="absolute top-0 left-48 w-40 bg-white shadow-lg z-50 p-4 rounded-2xl">
          <h3 className="text-sm font-bold">Análise de emoção</h3>
          <p className="text-green">Feliz 😊</p>
        </div>
      )}
    </div>
  );
}
