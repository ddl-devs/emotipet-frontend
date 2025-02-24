"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileInput from "@/components/ProfileInput";

export function Profile(){

  return (
    <div>
        <div className="relative flex bg-white shadow-lg max-w-[745px] min-w-[500px] h-auto justify-center items-center rounded-3xl">
            <div className="items-center justify-center flex flex-col absolute -top-[70]">
                <Image
                    src="/assets/images/bolota.png"
                    alt="Bolota"
                    width={140}
                    height={140}
                    className="rounded-full w-[140px] h-[140px]"
                />
                <h2 className="text-orange text-3xl font-bold mt-4">
                    Bolota
                </h2>
            </div>

            <div className="flex h-auto flex-wrap gap-4 mt-[158px] mb-[50px] max-w-[80%] items-center">
                <ProfileInput id="raca" input="Pastor Alemão" label="Raça:" placeholder="Digite uma raça" wid="180px"></ProfileInput>
                <ProfileInput id="data" input="24/02/2024 - 1 ano(s)" label="Data de Nascimento:" placeholder="Digite a data" wid="190px"></ProfileInput>
                <ProfileInput id="peso" input="30kg" label="Peso:" placeholder="Digite o peso" wid="60px"></ProfileInput>
                <ProfileInput id="sexo" input="Fêmea" label="Sexo:" placeholder="Digite o sexo" wid="80px"></ProfileInput>
                <ProfileInput id="altura" input="60cm" label="Altura:" placeholder="Digite a altura" wid="60px"></ProfileInput>
            </div>

        </div>
    </div>
  )
}
