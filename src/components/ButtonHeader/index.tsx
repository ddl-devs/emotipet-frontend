"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export function ButtonHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnterButton = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeaveButton = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onMouseEnter={handleMouseEnterButton}
        onMouseLeave={handleMouseLeaveButton}
        className="flex items-center justify-center bg-primary rounded-full w-16 h-16"
      >
        <Image
          src="/assets/images/buttonheader.png"
          alt="botão com imagem da cara de um cachorro"
          width={50}
          height={50}
        />
      </button>

      {isModalOpen && (
        <div
          ref={modalRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="fixed top-24 right-48 transform -translate-y-1/2 w-32 bg-white shadow-lg z-50 p-4 rounded-md"
        >
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/assets/images/profile.png"
              alt="modal"
              width={20}
              height={20}
            />
            <Link href="/home" className="text-purple text-xl font-bold">
              Perfil
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/exit.png"
              alt="modal"
              width={20}
              height={20}
            />
            <Link href="/home" className="text-red text-xl font-bold">
              Sair
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
