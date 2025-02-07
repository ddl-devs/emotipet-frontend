import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header isLogged={true} />

      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-gray">
        <section className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-blackGray mb-4">EmotiPet</h1>
          <p className="text-lg text-whiteGray mb-6">
            Bem-vindo à Página Principal
          </p>
          <button className="px-6 py-3 bg-blue text-white rounded-lg hover:bg-blue transition">
            Clique aqui
          </button>
        </section>
      </main>
    </>
  );
}
