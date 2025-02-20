"use client";

import Image from "next/image";
import { useState } from "react";


export function Profile(){

  return (
    <div>
        <div className="relative flex bg-white shadow-lg max-w-[745px] min-w-[500px] h-auto justify-center items-center rounded-3xl">
            <div className="items-center justify-center flex flex-col absolute -top-[70]">
                <Image
                    src="/assets/images/bolota.png"
                    alt="Bolota"
                    width={140}
                    height={140}
                    className="rounded-full w-[140px] h-[140px]"
                />
                <h2 className="text-orange text-3xl font-bold mt-4">
                    Bolota
                </h2>
            </div>

            <div className="flex h-auto mt-[158px] mb-[50px] max-w-[80%]">
                <div>
                    <p className="text-whiteGray text-sm font-medium">Raça:</p>
                    <div className=" px-[10px] py-1 bg-whiteGray2 rounded-[10px]">
                        <p className="text-purple text-lg font-semibold">Pastor Alemão</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
