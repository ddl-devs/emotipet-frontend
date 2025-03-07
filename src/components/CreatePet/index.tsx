"use client";

import Image from "next/image";
import { useState } from "react";
import ProfileInput from "@/components/ProfileInput";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import style from "./style.module.css";
import { createPet } from "@/actions/createPet";

export default function CreatePet({ closeModal }: { closeModal: () => void }) {
  const [profileImage, setProfileImage] = useState("");
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
      const response = await createPet(form);
      alert("Pet criado com sucesso!");
      closeModal();
      window.location.reload();
      console.log(response);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <form onSubmit={handleEditFalse} className="flex relative flex-row">
      <div
        className={`relative flex flex-col bg-white shadow-2xl w-[680px] h-auto justify-center items-center rounded-3xl ${
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
              type="submit"
              className="text-lg overflow-auto text-white px-3 font-medium py-1"
            >
              Salvar
            </button>
          </div>
        )}

        <div className="items-center justify-center flex flex-col relative -top-[70px]">
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
                Adicionar foto do pet
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

        <div className="flex h-auto flex-wrap gap-5 -mt-10 mb-[50px] w-[90%] items-start justify-center">
          <div className="flex flex-col flex-wrap gap-3 items-start justify-start">
            <ProfileInput
              editable={editable}
              id="breed"
              input={formData.breed}
              label="Raça:"
              placeholder="Digite uma raça"
              wid="220px"
              onchange={handleInputChange}
            />

            <ProfileInput
              editable={editable}
              id="species"
              input={formData.species}
              label="Espécie:"
              placeholder="Selecione a espécie"
              wid="220px"
              type="select"
              options={[
                { value: "DOG", label: "Cachorro" },
                { value: "CAT", label: "Gato" },
              ]}
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              id="gender"
              input={formData.gender}
              label="Sexo:"
              placeholder="Selecione o sexo"
              wid="220px"
              type="select"
              options={[
                { value: "MALE", label: "Macho" },
                { value: "FEMALE", label: "Fêmea" },
              ]}
              onchange={handleInputChange}
            />
          </div>
          <div className="flex flex-col flex-wrap gap-3 items-start justify-start">
            <ProfileInput
              editable={editable}
              type="date"
              id="birthdate"
              input={formData.birthdate}
              label="Data de Nascimento:"
              placeholder="Digite a data"
              wid="220px"
              onchange={handleInputChange}
              />
            
            <ProfileInput
              editable={editable}
              id="weight"
              input={formData.weight}
              label="Peso:"
              placeholder="Digite o peso"
              wid="220px"
              onchange={handleInputChange}
              />
            <ProfileInput
              editable={editable}
              id="height"
              input={formData.height}
              label="Altura:"
              placeholder="Digite a altura"
              wid="220px"
              onchange={handleInputChange}
              />
          </div>
        </div>
      </div>
    </form>
  );
}
