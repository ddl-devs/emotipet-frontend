"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileInput from "@/components/ProfileInput";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import style from "./style.module.css"

export function Profile(){

    const [editable, setEditable] = useState(false);

    const handleEditTrue = () => {
        setEditable(true);
    }

    const handleEditFalse = () => {
        setEditable(false);
    }

    return (
        <div className="flex flex-row">
        
            <div className={`relative flex bg-white shadow-lg w-[640px] h-auto justify-center items-center rounded-3xl ${editable ? style.profile : ''}`}>
                
                {editable &&
                    <div className={`${style.button} opacity-0 ${editable ? 'transition-opacity opacity-100 duration-500' : 'transition-opacity opacity-0'} bg-green absolute bottom-3 right-3 rounded-full flex items-center justify-center animate-fade-in`}>
                        <button onClick={handleEditFalse} className="text-lg text-white px-3 font-medium py-1">Salvar</button>
                    </div>
                }

                <div className="items-center justify-center flex flex-col absolute -top-[70]">
                    <Image
                        src="/assets/images/bolota.png"
                        alt="Bolota"
                        width={140}
                        height={140}
                        className="rounded-full w-[140px] h-[140px]"
                    />
                    <div className="-mt-2">
                        <ProfileInput editable={editable} classNm="font-bold text-2xl" input="Bolota" placeholder="Insira um nome" wid="200px" color="orange" id="nome"/>
                    </div>
                </div>

                <div className="flex h-auto flex-wrap gap-5 mt-[158px] mb-[50px] max-w-[80%] items-start justify-center">
                    <div className="gap-5 flex items-start flex-col">
                        <ProfileInput editable={editable} id="raca" input="Pastor Alemão" label="Raça:" placeholder="Digite uma raça" wid="220px"></ProfileInput>
                        <ProfileInput editable={editable} id="data" input="24/02/2024" label="Data de Nascimento:" placeholder="Digite a data" wid="220px"></ProfileInput>
                    </div>
                    <div className="flex flex-wrap gap-5 items-start justify-start">
                        <ProfileInput editable={editable} id="peso" input="30kg" label="Peso:" placeholder="Digite o peso" wid="70px"></ProfileInput>
                        <ProfileInput editable={editable} id="sexo" input="Fêmea" label="Sexo:" placeholder="Digite o sexo" wid="80px"></ProfileInput>
                        <ProfileInput editable={editable} id="altura" input="60cm" label="Altura:" placeholder="Digite a altura" wid="70px"></ProfileInput>
                    </div>
                </div>

            </div>
            <div className="absolute left-[calc(50%+350px)] flex flex-col ml-3 mt-1 gap-4">
                <EditButton click={handleEditTrue}/>
                <DeleteButton click={handleEditTrue}/>
            </div>
        </div>
  )
}
