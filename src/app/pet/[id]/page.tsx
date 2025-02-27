import { Header } from "@/components/Header";
import { Profile } from "@/components/Profile";

export default function PetPage() {
  return (
    <>
      <Header isLogged={true} />
      <main className="mx-20 min-h-screen flex flex-col items-center bg-background text-gray">
        <div className="mt-52">
          <Profile />
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-10">
          <div className="w-1/2 left-0 flex items-start justify-start">
            <h1 className="text-4xl font-bold text-orange">Análises</h1>
          </div>
          <div>

          </div>
        </div>
      </main>
    </>
  );
}
