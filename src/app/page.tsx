"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { authLogin } from "@/actions/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { user } = useAuth();
  const { logout } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authLogin(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo deu errado");
    }
  };

  return (
    <>
      <main className="min-h-screen flex flex-col justify-center bg-gray-100 text-gray">
        <section className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-4">EmotiPet</h1>
          <p className="text-lg text-gray-600 mb-6">
            Bem-vindo à Página Inicial (login)
          </p>
          <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Senha:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <button type="submit">Entrar</button>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>

            {user && <p>Você está logado como {user.name} VIVA MÃE CHINA</p>}
            {user && <img src={user.photoUrl} alt={user.name} />}
            <button onClick={logout}>Logout</button>
          </div>
        </section>
      </main>
    </>
  );
}
