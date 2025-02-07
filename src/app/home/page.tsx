export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <section className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">EmotiPet</h1>
        <p className="text-lg text-gray-600 mb-6">
          Bem-vindo à Página Principal
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Clique aqui
        </button>
      </section>
    </main>
  );
}
