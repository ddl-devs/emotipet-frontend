import Header from "@/components/Header";
import { ProfileUser } from "@/components/ProfileUser";

export default function UserPage() {
  return (
    <>
      <Header isLogged={true} />
      <main className="mx-14 min-h-screen flex flex-col items-center bg-background text-gray">
        <div className="mt-52">
          <ProfileUser />
        </div>
      </main>
    </>
  );
}
