import Header from "@/components/Header";
import CreatePet from "@/components/CreatePet";
import AnalysisPetProfile from "@/components/AnalysisPetProfile";
import RecommendationsPetProfile from '@/components/RecommendationsPetProfile';


export default function PetPage() {
  return (
    <>
      <Header isLogged={true} />
      <main className="mx-14 min-h-screen flex flex-col items-center bg-background text-gray">
        <div className="mt-52">
          <CreatePet closeModal={() => { /* implement close modal functionality here */ }} />
        </div>
      </main>
    </>
  );
}
