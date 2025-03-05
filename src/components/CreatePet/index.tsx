"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileInput from "@/components/ProfileInput";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import style from "./style.module.css"


export function CreatePet(){
    const [profileImage, setProfileImage] = useState("");

    const [editable, setEditable] = useState(true);

    const handleEditTrue = () => {
        setEditable(true);
    }

    const handleEditFalse = () => {
        setEditable(false);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <div className="flex relative flex-row">
        
        <div className={`relative flex flex-col bg-white shadow-lg w-[640px] h-auto justify-center items-center rounded-3xl ${editable ? style.profile : ''}`}>
                
                {editable &&
                    <div className={`${style.button} opacity-0 ${editable ? 'transition-opacity opacity-100 duration-500' : 'transition-opacity opacity-0'} bg-green absolute bottom-3 right-3 rounded-full flex items-center justify-center animate-fade-in`}>
                        <button onClick={handleEditFalse} className="text-lg text-white px-3 font-medium py-1">Salvar</button>
                    </div>
                }

                <div className="items-center justify-center flex flex-col relative -top-[70]">
                    {profileImage ? (
                    <Image
                        src={profileImage}
                        alt='Bolota'
                        width={140}
                        height={140}
                        className='rounded-full w-[140px] h-[140px] bg-gradient-to-br from-[#4B9DFA] to-[#5676DE]'
                        />
                    ) : (
                        <div className='rounded-full w-[140px] h-[140px] bg-gradient-to-br from-[#4B9DFA] to-[#5676DE]'></div>
                    )}
                    {editable && (
                    <div className="mt-2">
                        <label className="cursor-pointer text-blackGray font-semibold" htmlFor="profileImage">Adicionar foto de perfil</label>
                        <input
                            id="profileImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-2 hidden"
                            />
                    </div>
                    )}
                    <div className=" flex flex-row gap-2">
                        <ProfileInput editable={editable} classNm="font-bold text-2xl" input="" placeholder="Insira um nome" wid="250px" color="orange" id="name"/>
                    </div>
                </div>

                <div className="flex h-auto flex-wrap gap-5 -mt-10 mb-[50px] max-w-[80%] items-start justify-center">
                    <div className="gap-5 flex items-start flex-col">
                        <ProfileInput editable={editable} id="raca" input="" label="Raça:" placeholder="Digite uma raça" wid="220px"></ProfileInput>
                        <ProfileInput editable={editable} type="date" id="data" input="" label="Data de Nascimento:" placeholder="Digite a data" wid="220px"></ProfileInput>
                    </div>
                    <div className="flex flex-wrap gap-5 items-start justify-start">
                        <ProfileInput editable={editable} id="peso" input="" label="Peso:" placeholder="Digite o peso" wid="70px"></ProfileInput>
                        <ProfileInput editable={editable} id="sexo" input="" label="Sexo:" placeholder="Digite o sexo" wid="80px"></ProfileInput>
                        <ProfileInput editable={editable} id="altura" input="" label="Altura:" placeholder="Digite a altura" wid="70px"></ProfileInput>
                    </div>
                </div>

            </div>
        </div>
  )
}
