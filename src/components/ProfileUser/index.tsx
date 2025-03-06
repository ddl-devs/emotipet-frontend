"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileInput from "@/components/ProfileInput";
import EditButton from "@/components/EditButton";
import style from "./style.module.css";
import { useAuth } from "@/contexts/AuthContext";

export function ProfileUser() {
  const [editable, setEditable] = useState(false);
  const [profileImage, setProfileImage] = useState("/assets/images/bolota.png");
  const { user } = useAuth();

  const handleEditTrue = () => {
    setEditable(true);
  };

  const handleEditFalse = () => {
    setEditable(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="flex relative flex-row">
      <div
        className={`relative flex flex-col bg-white shadow-lg w-[640px] h-auto justify-center items-center rounded-3xl ${
          editable ? style.profile : ""
        }`}
      >
        {editable && (
          <div
            className={`${style.button} opacity-0 ${
              editable
                ? "transition-opacity opacity-100 duration-500"
                : "transition-opacity opacity-0"
            } bg-green absolute bottom-3 right-3 rounded-full flex items-center justify-center animate-fade-in`}
          >
            <button
              onClick={handleEditFalse}
              className="text-lg text-white px-3 font-medium py-1"
            >
              Salvar
            </button>
          </div>
        )}

        <div className="items-center justify-center flex flex-col relative -top-[70]">
          <Image
            src={user?.photoUrl || profileImage} 
            alt="Bolota"
            width={140}
            height={140}
            className="rounded-full w-[140px] h-[140px]"
          />

          {editable && (
            <div className="mt-2">
              <label
                className="text-blackGray font-semibold"
                htmlFor="profileImage"
              >
                Trocar foto de perfil
              </label>
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
            <ProfileInput
              editable={editable}
              classNm="font-bold text-2xl"
              input={user?.firstName ?? ""}
              placeholder="Insira um nome"
              wid="250px"
              color="orange"
              id="firstName"
            />
            <ProfileInput
              editable={editable}
              classNm="font-bold text-2xl"
              input={user?.lastName ?? ""}
              placeholder="Insira um sobrenome"
              wid="250px"
              color="orange"
              id="lastName"
            />
          </div>
        </div>

        <div className="flex h-auto flex-wrap gap-5 -mt-10 mb-[50px] max-w-[80%] items-start justify-center">
          <div className="gap-5 flex items-start flex-col">
            <ProfileInput
              editable={editable}
              type="email"
              id="email"
              input={user?.email ?? ""}
              label="Email:"
              placeholder="Insira um email"
              wid="220px"
            ></ProfileInput>
            <ProfileInput
              editable={editable}
              id="data"
              input={user?.dateOfBirth ?? ""}
              label="Data de Nascimento:"
              placeholder="Insira uma data"
              wid="220px"
            ></ProfileInput>
          </div>
          <div className="flex flex-wrap gap-5 items-start justify-start">
            <ProfileInput
              id="username"
              input={user?.username ?? ""}
              label="Username:"
              placeholder="Digite uma username"
              wid="220px"
            ></ProfileInput>
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%+320px)] flex flex-col ml-3 mt-1 gap-4">
        <EditButton click={handleEditTrue} />
      </div>
    </div>
  );
}
