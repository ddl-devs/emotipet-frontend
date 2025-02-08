"use client";

import Image from "next/image";

export function CardPet() {
  return (
    <div className="relative flex flex-col items-center p-24 bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src="/assets/images/bolota.png"
        alt="Bolota"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute top-4 left-4 bg-white text-white px-4 py-1 rounded-xl">
        <h3 className="text-sm font-bold text-black">Bolota</h3>
      </div>
    </div>
  );
}
