"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileInput from "@/components/ProfileInput";
import EditButton from "@/components/EditButton";
import style from "./style.module.css";
import { useAuth } from "@/contexts/AuthContext";
import { putUser } from "@/actions/putUser";

export function ProfileUser() {
  const [editable, setEditable] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "/assets/images/user-profile.jpg"
  );
  const { user } = useAuth();

  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    profileImage: File | null;
  }>({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    dateOfBirth: user?.dateOfBirth ?? "",
    profileImage: null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        dateOfBirth: user.dateOfBirth || "",
        profileImage: null,
      });
    }
  }, [user]);

  const handleEditTrue = () => {
    setEditable(true);
  };

  const handleEditFalse = async () => {
    setEditable(false);
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("dateOfBirth", formData.dateOfBirth);
    if (formData.profileImage) {
      form.append("photoUrl", formData.profileImage);
    }
    if (user?.id) {
      await putUser(user?.id, form);
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

        <div className="items-center justify-center flex flex-col relative -top-[70px]">
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
              input={formData.firstName}
              placeholder="Insira um nome"
              wid="250px"
              color="orange"
              id="firstName"
              onchange={handleInputChange}
            />
            <ProfileInput
              editable={editable}
              classNm="font-bold text-2xl"
              input={formData.lastName}
              placeholder="Insira um sobrenome"
              wid="250px"
              color="orange"
              id="lastName"
              onchange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex h-auto flex-wrap gap-5 -mt-10 mb-[50px] max-w-[80%] items-start justify-center">
          <div className="gap-5 flex items-start flex-col">
            <ProfileInput
              editable={editable}
              type="email"
              id="email"
              input={formData.email}
              label="Email:"
              placeholder="Insira um email"
              wid="220px"
              onchange={handleInputChange}
            ></ProfileInput>
            <ProfileInput
              editable={editable}
              id="dateOfBirth"
              input={formData.dateOfBirth}
              label="Data de Nascimento:"
              placeholder="Insira uma data"
              wid="220px"
              onchange={handleInputChange}
            ></ProfileInput>
          </div>
          <div className="flex flex-wrap gap-5 items-start justify-start">
            <ProfileInput
              id="username"
              input={user?.username ?? ""}
              label="Username:"
              placeholder="Digite uma username"
              wid="220px"
              onchange={handleInputChange}
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
