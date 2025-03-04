"use client";
import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const { user } = useAuth();
  return (
    <>
      <Header isLogged={true} />
      <main className="min-h-screen flex flex-col justify-center bg-gray-100 text-gray">
        <section className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-4">EmotiPet</h1>
          <p className="text-lg text-gray-600 mb-6">
            Bem-vindo à Página Inicial (login)
          </p>
          <button className="px-6 py-3 bg-blue text-white rounded-lg hover:bg-blue transition">
            Clique aqui
          </button>
        </section>
      </main>
    </>
  );
}
