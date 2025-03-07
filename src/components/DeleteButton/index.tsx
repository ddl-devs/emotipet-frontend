"use client";

import Image from "next/image";
import { useState } from "react";

interface DeleteButtonProps {
  click: () => void;
}

export default function DeleteButton({ click }: DeleteButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    click();
    setIsModalOpen(false);
  };

  return (
    <div className="relative ml-5">
      <button
        className="flex flex-row gap-2 justify-center items-center"
        onClick={() => setIsModalOpen(true)}
      >
        <Image src="/assets/svg/DeletButton.svg" width={25} height={28} alt="Deletar" />
        <p className="text-lg text-red">Excluir</p>
      </button>
      {isModalOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-2xl shadow-lg gap-1 flex justify-center items-center flex-col w-52">
            <p className="text-center">
              Tem certeza que deseja excluir seu pet?
            </p>
            <button
              className="bg-red rounded-full py-1 text-white font-semibold w-40 mt-2"
              onClick={handleDelete}
            >
              Excluir
            </button>
            <button
              className="bg-gray rounded-full py-1 text-white font-semibold w-40 mt-1"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
