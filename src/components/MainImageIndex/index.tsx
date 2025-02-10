"use client";

import Image from "next/image";
import { useState } from "react";
import style from "@/components/MainImageIndex/style.module.css";

export function MainImageIndex() {

  return (
    <div className="relative inline-block">
      <div className="relative mt-32 ml-16 flex items-end justify-center">
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
