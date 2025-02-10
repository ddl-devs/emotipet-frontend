"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import style from "@/components/ButtonHeader/style.module.css";

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
    <div className="flex items-center gap-1 align-top">
      {isModalOpen && (
        <div
          ref={modalRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={style.headerButtonContent}
        >
          <div className="flex items-center gap-2 mb-3 hover:opacity-60 transition-opacity duration-100">
            <Link href="/home" className="text-purple text-xl font-bold flex items-center gap-2 flex-nowrap">
              <Image
                src="/assets/images/profile.png"
                alt="modal"
                width={20}
                height={20}
              />
                Perfil
            </Link>
          </div>
          <div className="flex items-center gap-2 hover:opacity-60 transition-opacity duration-100">
            <Link href="/home" className="text-red text-xl font-bold flex items-center gap-2 flex-nowrap">
              <Image
                src="/assets/images/exit.png"
                alt="modal"
                width={20}
                height={20}
              />
              Sair
            </Link>
          </div>
        </div>
      )}
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
    </div>
  );
}
