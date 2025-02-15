"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import style from "@/components/MainImageIndex/style.module.css";
import Typewriter from 'typewriter-effect'; 


export function MainImageIndex() {
  const [Text] = useState([
    "Qual é a comida preferida do meu pet ?",
    "Qual é a brincadeira preferida do meu pet ?",
    "Como devo cuidar do meu pet ?",
    "Como saber se meu pet está feliz ?",
  ]);

  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * Text.length);
    setRandomText(Text[random]);
  }, [Text]);

  return (
    <div className="relative flex w-full h-full">
      <div className="relative mt-32 ml-16 flex items-end justify-center">

        <div className="absolute z-20 top-40 left-96 w-[52px] h-[52px]">
            <Image
              src="/assets/svg/icone-IA.svg"
              alt="EmotiPet"
              width={52} 
              height={52}
              className="absolute -top-14 -left-10"
            />
          <div className="bg-whiteOrange py-1 px-3 rounded-full text-lg text-gray w-max">
              <Typewriter onInit={(typewriter) => {
              typewriter.typeString(randomText)
              .pauseFor(1000)
              .start();
              }} options={{ delay: 80 }}>
              </Typewriter>
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
      <Image 
            src="/assets/images/rabo gato.png"
            alt="rabo gato"
            width={205}
            height={746}
            className="max-m-full absolute -top-10 -right-0 z-0 overflow-hidden"
            />
    </div>
  );
}
