"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { registerUser } from "@/actions/register";
import ProfileInput from "@/components/ProfileInput";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    password: "",
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePicture(file);
      setProfilePicturePreview(URL.createObjectURL(file));
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    Object.keys(formData).forEach(key => {
      formDataWithFile.append(key, formData[key as keyof typeof formData]);
    });
    if (profilePicture) {
      formDataWithFile.append("profilePicture", profilePicture);
    }

    try {
      await registerUser(formDataWithFile);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao cadastrar");
    }
  };

  return (
    <div className="relative">
      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-gray overflow-hidden">
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/assets/images/rabo gato.png"
            alt="rabo gato"
            width={205}
            height={746}
            className="top-0 right-0 z-0"
          />
        </div>

        <section className="z-10 flex flex-col items-center p-8 bg-white shadow-2xl rounded-3xl">
          <Image
            src="assets/svg/logo emotipet.svg"
            alt="Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <p className="text-2xl text-gray-600 mb-6">
            Cadastro de Usuário
          </p>
          <form onSubmit={handleRegister} className="w-full max-w-sm">
            <div className="mb-4 flex flex-col items-center">
              <label htmlFor="profilePicture" className="cursor-pointer">
                {profilePicturePreview ? (
                  <img
                    src={profilePicturePreview}
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full object-cover mb-2"
                  />
                ) : (
                  <div className="w-24 h-24 border rounded-full bg-gray mb-2 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7h4l3-3h4l3 3h4v13H3V7z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 14l3-3 4 4 5-5"
                      />
                    </svg>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {[
              { label: "Nome de Usuário", name: "username", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Primeiro Nome", name: "firstName", type: "text" },
              { label: "Último Nome", name: "lastName", type: "text" },
              { label: "Data de Nascimento", name: "dateOfBirth", type: "date" },
              { label: "Senha", name: "password", type: "password" },
            ].map(({ label, name, type }) => (
              <div key={name} className="mb-4">
                <ProfileInput
                  classNm="text-start text-lg font-semibold"
                  label={label}
                  id={name}
                  input={formData[name as keyof typeof formData]}
                  placeholder=""
                  type={type}
                  wid="full"
                  editable={true}
                  onchange={handleChange}
                  require={true}
                />
              </div>
            ))}
            <div className="flex justify-center">
              <button
                  type="submit"
                  className="bg-green text-white font-bold py-2 px-4 w-[200] rounded-xl focus:outline-none focus:shadow-outline"
                >
                  Cadastrar
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
          <Link href="/">
            <p className="text-blue-500 hover:text-blue-700 text-sm mt-4">Já tem uma conta? Faça login</p>
          </Link>
        </section>
      </main>
    </div>
  );
}