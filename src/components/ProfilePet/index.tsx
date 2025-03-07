"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileInput from "@/components/ProfileInput";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import style from "./style.module.css";

import { useParams } from "next/navigation";
import { getPet } from "@/actions/getPet";
import { putPet } from "@/actions/putPet";
import { Pet } from "@/types/pets";

export function ProfilePet() {
  const [profileImage, setProfileImage] = useState("/assets/images/bolota.png");
  const [editable, setEditable] = useState(false);
  const [pet, setPet] = useState<Pet | null>(null);

  const params = useParams();
  const { id } = params;

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    birthdate: "",
    weight: "",
    gender: "",
    height: "",
    profileImage: null as File | null,
  });

  useEffect(() => {
    const fetchPet = async () => {
      if (typeof id === "string") {
        const petData = await getPet(id);
        setPet(petData);
        setFormData({
          name: petData.name,
          breed: petData.breed,
          birthdate: formatDate(petData.birthdate),
          weight: petData.weight,
          gender: petData.gender,
          height: petData.height,
          profileImage: null,
        });
      }
    };
    fetchPet();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

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
    if (formData.profileImage) {
      form.append("photoUrl", formData.profileImage);
    }
    if (pet?.id) {
      await putPet(pet.id, form);
      window.location.reload();
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
          <Image
            src={pet?.photoUrl ?? profileImage}
            alt="Bolota"
            width={140}
            height={140}
            className="rounded-full w-[140px] h-[140px]"
          />
          {editable && (
            <div className="mt-2">
              <label
                className="cursor-pointer text-blackGray font-semibold"
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
              input={formData.name}
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
              input={formData.breed}
              label="Raça:"
              placeholder="Digite uma raça"
              wid="220px"
              onchange={handleInputChange}
            />
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
          </div>
          <div className="flex flex-wrap gap-5 items-start justify-start">
            <ProfileInput
              editable={editable}
              id="weight"
              input={formData.weight}
              label="Peso:"
              placeholder="Digite o peso"
              wid="70px"
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              id="gender"
              input={formData.gender}
              label="Sexo:"
              placeholder="Digite o sexo"
              wid="80px"
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              id="height"
              input={formData.height}
              label="Altura:"
              placeholder="Digite a altura"
              wid="70px"
              onchange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%+320px)] flex flex-col ml-3 mt-1 gap-4">
        <EditButton click={handleEditTrue} />
        <DeleteButton />
      </div>
    </div>
  );
}
