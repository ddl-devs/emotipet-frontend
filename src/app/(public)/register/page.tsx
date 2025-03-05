"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { registerUser } from "@/actions/register";

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
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao cadastrar");
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center bg-blue-100 text-gray">
      <section className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/assets/svg/logo emotipet.svg"
            alt="EmotiPet"
            width={167}
            height={61}
          />
          <p className="text-lg text-gray-600 mt-2">Cadastro de Usuário</p>
        </div>
        <form onSubmit={handleRegister} className="w-full max-w-md">
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
              <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
                {label}:
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="bg-red text-white px-4 py-2 rounded"
            >
              Voltar
            </button>
            <button type="submit" className="bg-blue text-white px-4 py-2 rounded">
              Cadastrar
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </section>
    </main>
  );
}