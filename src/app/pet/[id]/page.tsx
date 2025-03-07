import Header from "@/components/Header";
import { ProfilePet } from "@/components/ProfilePet";
import AnalysisPetProfile from "@/components/AnalysisPetProfile";
import RecommendationsPetProfile from '@/components/RecommendationsPetProfile';


export default function PetPage() {
  return (
    <>
      <Header isLogged={true} />
      <main className="mx-14 min-h-screen flex flex-col items-center bg-background text-gray">
        <div className="mt-52">
          <ProfilePet/>
        </div>
        <div className="bg-whiteGray2  rounded-3xl flex flex-row w-full gap-5 justify-between items-start mt-20">
            <AnalysisPetProfile />
            <RecommendationsPetProfile />
          <div>

          </div>
        </div>
      </main>
    </>
  );
}
