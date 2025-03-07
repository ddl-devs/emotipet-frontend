"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { authLogin } from "@/actions/login";
import Header from "@/components/Header";
import ProfileInput from "@/components/ProfileInput";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";


export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();
  const { user } = useAuth();
  const { logout } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await authLogin(formData.username, formData.password);
      router.push("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo deu errado");
    }
  };

  const [Text] = useState([
    "Descubra novas formas de se conectar com seu pet utilizando IA",
    "Aqui você encontra tudo que precisa para cuidar do seu pet",
    "Acompanhe a evolução do seu pet com análises de emoção",
  ]);

  const [randomText, setRandomText] = useState("");
  
  useEffect(() => {
    const random = Math.floor(Math.random() * Text.length);
    setRandomText(Text[random]);
  }, [Text]);

  return (
    <div className="relative">
      <Header isLogged={false} />
      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-gray overflow-hidden">
          <div className="py-1 px-3 rounded-full text-2xl font-semibold text-whiteGray w-[350px] absolute z-20 top-[32%] left-[60%]">
              <Typewriter onInit={(typewriter) => {
              typewriter.typeString(randomText)
              .pauseFor(1000)
              .start();
              }} options={{ delay: 80 }}>
              </Typewriter>
          </div>

            <div className="absolute -top-20 left-[26%] z-0">
              <Image
                src="/assets/images/dogIndex.png"
                alt="EmotiPet"
                width={500}
                height={500}
                objectFit="cover"
                className="transform scale-x-[-1] w-auto max-h-[700px] -rotate-[20deg]"
              />
            </div>
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
            Bem-vindo à Página de Login
          </p>
          <div>
            <form onSubmit={handleLogin} className="w-full max-w-sm">
              <div className="mb-4">
                <ProfileInput onchange={handleChange} classNm="text-start text-lg font-semibold" label="Username:" id="username" input="" placeholder="" wid="full" editable={true}/>
              </div>
              <div className="mb-6">
              <ProfileInput onchange={handleChange} classNm="text-start text-lg font-semibold" label="Senha:" id="password" input="" placeholder="" type="password" wid="full" editable={true}/>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-green text-white font-bold py-2 px-4 w-full rounded-xl focus:outline-none focus:shadow-outline"
                >
                  Entrar
                </button>
              </div>
              {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
            </form>
          </div>
              <Link href="/register">
                <p className="text-blue-500 hover:text-blue-700 text-sm mt-4">Não tem uma conta? Registre-se</p>
              </Link>
        </section>
      </main>
    </div>
  );
}