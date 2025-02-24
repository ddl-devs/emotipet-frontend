import { Header } from "@/components/Header";
import { Profile } from "@/components/Profile";
import Image from "next/image";
import ProfileInputFilter from "@/components/ProfileInputFilter";

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
            <div>
              <h1 className="text-[40px] font-bold text-orange">Análises</h1>
              <button className="mt-0 font-semibold justify-center items-center flex bg-gradient-to-br from-[#4B9DFA] to-[#5676DE] w-[150px] h-[50px] text-white text-lg rounded-full">
                <Image
                  src="/assets/svg/iconeIA.svg"
                  alt="Criar análise"
                  width={18}
                  height={18}
                  className=" -ml-28 -mt-4 fixed "
                />
                Criar análise
                </button>
            </div>
            <div>
            <ProfileInputFilter wid="120px" input="" label="Tipo:" id="tipo" placeholder="Tipo"/>
            <ProfileInputFilter select={false} wid="120px" input="" label="Tipo:" id="tipo" placeholder="Tipo"/>

            </div>
          </div>

          <div>

          </div>
        </div>
      </main>
    </>
  );
}
