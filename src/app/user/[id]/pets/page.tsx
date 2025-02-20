import { CardPet } from "@/components/CardPet";
import { Header } from "@/components/Header";
import { MainImageIndex } from "@/components/MainImageIndex";


export default function PetsUserPage() {
  return (
    <>
      <Header isLogged={true} />
      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray overflow-x-hidden">
        <MainImageIndex/>
        
        <div className="absolute flex flex-col gap-1 items-start justify-center left-1/2 top-60">
          <h1 className="text-5xl font-bold text-orange">Meus Pets</h1>

          <div className="flex flex-row flex-wrap gap-1 items-start justify-start mt-10 max-w-3xl">
            <CardPet/>
            <CardPet/>
            <CardPet/>
            <CardPet/>
            <CardPet/>
            <CardPet/>
            <CardPet/>
          </div>
        </div>
      </main>
    </>
  );
}
