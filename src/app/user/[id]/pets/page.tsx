import { CardPet } from "@/components/CardPet";
import { Header } from "@/components/Header";
import { MainImageIndex } from "@/components/MainImageIndex";


export default function PetsUserPage() {
  return (
    <>
      <Header isLogged={true} />
      <main className="min-h-screen flex flex-row items-center justify-between bg-background text-gray overflow-hidden">
        
        <MainImageIndex/>
        <div className="absolute flex flex-row gap-1 items-start justify-center left-1/2 top-60">
          <CardPet/>
          <CardPet/>
          <CardPet/>
          <CardPet/>
        </div>
      </main>
    </>
  );
}
