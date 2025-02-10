"use client";

import Image from "next/image";
import { useState } from "react";
import style from "@/components/MainImageIndex/style.module.css";

export function MainImageIndex() {
  const [Text, setText] = useState([
    "Qual é a comida preferida do meu pet ?",
    "Qual é a brincadeira preferida do meu pet ?",
    "Como devo cuidar do meu pet ?",
    "Como saber se meu pet está feliz ?",
  ])

  const randomText = () => {
    const random = Math.floor(Math.random() * Text.length);
    return Text[random];
  }

  return (
    <div className="relative inline-block">
      <div className="relative mt-32 ml-16 flex items-end justify-center">

      <div className="absolute z-20 top-40 left-96 w-max">
          <Image
            src="/assets/svg/icone-IA.svg"
            alt="EmotiPet"
            width={52} 
            height={52}
            className="absolute -top-14 -left-10"
          />
        <div className="bg-whiteOrange py-1 px-3 rounded-full">
          <p className="text-xl text-gray">{randomText()}</p>
        </div>
      </div>

        <Image
            src="/assets/images/dogIndex.png"
            alt="EmotiPet"
            width={613}
            height={919}
            className={style.mainImage}
        />
        <Image
            src="/assets/svg/bg-img-index.svg"
            alt="Bolota"
            className=""
            width={661}
            height={600}
        />
      </div>
    </div>
  );
}
