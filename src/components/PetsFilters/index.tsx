"use client";

import Image from "next/image";
import ProfileInputFilter from "../ProfileInputFilter";
import { useState, useEffect } from "react";
import { getPets } from "@/actions/getPets";

import CardPet from "@/components/CardPet";
import Pet from "@/types/pets";

import CreatePet from "@/components/CreatePet";

export default function PetsFilters() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    for (let i = 0; i < pets.length; i++) {
      const timeout = setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 200);
      timeouts.push(timeout);
    }
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [pets]);

  useEffect(() => {
    handleFilter();
  }, [page]);

  const handleFilter = async () => {
    setLoading(true);
    try {
      const response = await getPets({ page, name, breed, gender, species });
      console.log(pets);
      setPets(response.content);
    } catch (error) {
      console.error("Erro ao obter pets:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0) {
      setPage(newPage);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isModalOpen? (<div>
       <div className="flex flex-col gap-4">
        <div className="flex -mt-2 flex-row gap-4 justify-start min-w-[257px] items-end flex-wrap">
          <ProfileInputFilter
            wid="100px"
            input={name}
            label="Nome"
            id="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <ProfileInputFilter
            wid="100px"
            input={breed}
            label="Raça:"
            id="breed"
            placeholder="Raça"
            onChange={(e) => setBreed(e.target.value)}
          />
          <ProfileInputFilter
            options={{ MALE: "Macho", FEMALE: "Fêmea" }}
            select={true}
            wid="100px"
            input={gender}
            label="Gênero:"
            id="gender"
            placeholder="Gênero"
            onChange={(e) => setGender(e.target.value)}
          />
          <ProfileInputFilter
            options={{ DOG: "Cachorro", CAT: "Gato" }}
            select={true}
            wid="100px"
            input={species}
            label="Espécie:"
            id="species"
            placeholder="Espécie"
            onChange={(e) => setSpecies(e.target.value)}
          />
          <button
            onClick={handleFilter}
            className="gap-1 flex justify-center items-center bg-green rounded-full text-white text-lg font-medium h-10 w-24"
          >
            <Image
              src="/assets/svg/filter.svg"
              alt="Filtrar"
              width={15}
              height={15}
              className=""
            />
            Filtrar
          </button>
          <button
            onClick={openModal}
            className="gap-1 flex justify-center items-center bg-blue rounded-full text-white text-lg font-medium h-10 w-24"
          >
            Adicionar
          </button>
        </div>
      </div>
      <div className="flex justify-start items-center flex-col w-full">
        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {pets.length === 0 ? (
              <div className="flex justify-center items-center mt-10">
                Nenhum pet encontrado
              </div>
            ) : (
              <div id="pets" className="flex flex-row flex-wrap gap-2 items-center justify-start mt-10 max-w-3xl">
                {pets.map((pet, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      visibleCards.includes(index) ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <CardPet
                      name={pet.name}
                      photoUrl={pet.photoUrl}
                      id={pet.id}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center mt-4 mb-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 0}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l"
              >
                &lt;
              </button>
              <span className="bg-gray-200 text-gray-700 px-4 py-2">
                {page + 1}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r"
              >
                &gt;
              </button>
            </div>
          </>
          )}
        </div>
      </div> ) :
       (
        <div className="flex -ml-3 -mt-28 flex-row gap-4 justify-start min-w-[257px] items-end flex-wrap z-50 bg-opacity-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-1 right-4 text-gray z-[60] hover:text-gray-700 text-5xl"
            >
              &times;
            </button>
            <CreatePet closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
