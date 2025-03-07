"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileInput from "@/components/ProfileInput";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import style from "./style.module.css";
import { createPet } from "@/actions/createPet";

export function CreatePet({ closeModal }: { closeModal: () => void }) {
  const [profileImage, setProfileImage] = useState("/assets/images/bolota.png");
  const [editable, setEditable] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    birthdate: "",
    weight: "",
    gender: "",
    height: "",
    species: "",
    profileImage: null as File | null,
  });

  const handleEditTrue = () => {
    setEditable(true);
  };

  const handleEditFalse = async () => {
    setEditable(false);
    const form = new FormData();
    form.append("name", formData.name);
    form.append("breed", formData.breed);
    form.append("birthdate", formData.birthdate);
    form.append("weight", formData.weight);
    form.append("gender", formData.gender);
    form.append("height", formData.height);
    form.append("species", formData.species);
    if (formData.profileImage) {
      form.append("photoUrl", formData.profileImage);
    }
    try {
      await createPet(form);
      alert("Pet criado com sucesso!");
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error("Erro ao criar pet:", error);
      alert("Erro ao criar pet.");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setFormData({ ...formData, profileImage: file });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
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
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Bolota"
              width={140}
              height={140}
              className="rounded-full w-[140px] h-[140px] bg-gradient-to-br from-[#4B9DFA] to-[#5676DE]"
            />
          ) : (
            <div className="rounded-full w-[140px] h-[140px] bg-gradient-to-br from-[#4B9DFA] to-[#5676DE]"></div>
          )}
          {editable && (
            <div className="mt-2">
              <label
                className="cursor-pointer text-blackGray font-semibold"
                htmlFor="profileImage"
              >
                Adicionar foto de perfil
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
              input=""
              placeholder="Insira um nome"
              wid="250px"
              color="orange"
              id="name"
              onchange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex h-auto flex-wrap gap-5 -mt-10 mb-[50px] max-w-[80%] items-start justify-center">
          <div className="gap-5 flex items-start flex-col">
            <ProfileInput
              editable={editable}
              id="breed"
              input=""
              label="Raça:"
              placeholder="Digite uma raça"
              wid="220px"
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              type="date"
              id="birthdate"
              input=""
              label="Data de Nascimento:"
              placeholder="Digite a data"
              wid="220px"
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              id="species"
              input=""
              label="Espécie:"
              placeholder="Digite a espécie"
              wid="220px"
              onchange={handleInputChange}
            />
          </div>
          <div className="flex flex-wrap gap-5 items-start justify-start">
            <ProfileInput
              editable={editable}
              id="weight"
              input=""
              label="Peso:"
              placeholder="Digite o peso"
              wid="70px"
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              id="gender"
              input=""
              label="Sexo:"
              placeholder="Digite o sexo"
              wid="80px"
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              id="height"
              input=""
              label="Altura:"
              placeholder="Digite a altura"
              wid="70px"
              onchange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
