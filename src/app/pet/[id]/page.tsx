import { Header } from "@/components/Header";
import { Profile } from "@/components/Profile";

export default function PetPage() {
  return (
    <>
      <Header isLogged={true} />
      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-gray">
        <div>
          <Profile />
        </div>
      </main>
    </>
  );
}
