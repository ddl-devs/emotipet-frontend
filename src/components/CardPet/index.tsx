"use client";

import Image from "next/image";
import Link from "next/link";

interface cardPetProps {
  id: number
  name: string;
  photoUrl: string;
}

export default function CardPet(props: cardPetProps) {
  return (
    <Link href={`/pet/${props.id}`}>
      <div className="relative flex flex-col bg-white w-32 h-32 items-center shadow-lg rounded-2xl overflow-hidden hover:z-20 hover:scale-110 hover:border-2 hover:-top-2 border-blue transition-transform duration-300">
        <Image
        src={props.photoUrl ? props.photoUrl : "/assets/images/pet-placeholder.png"}
        alt={props.name}
        layout="fill"
        objectFit="cover"
        className="max-w-32 max-h-32"
        />
        <div className="relative top-2 -left-5 bg-white px-3 py-0.5 rounded-full">
            <h3 className="text-base font-semiBold text-black">{props.name}</h3>
          </div>
      </div>
    </Link>
  );
}
