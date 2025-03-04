"use client"

import Image from 'next/image'
import ProfileInputFilter from '../ProfileInputFilter'
import { CardPetAnalysis } from '../CardPetAnalysis'
import CreateAnalysis from '../CreateAnalysis'
import { useState } from 'react';


export default function AnalysisPetProfile() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className={`bg-whiteGray2 p-3 w-1/2 left-0 flex flex-col pt-5 items-start justify-start rounded-3xl`}>
          <div className='flex flex-row gap-3 justify-start items-start w-full'>

            <div className='flex flex-row gap-3 flex-wrap justify-center items-center'>
              <h1 className="text-[40px] font-bold text-orange">Análises</h1>
                <button onClick={() => setShowModal(true)} className="mt-0 pl-2 pt-1 font-semibold justify-center items-center flex bg-gradient-to-br from-[#4B9DFA] to-[#5676DE] w-[150px] h-[50px] text-white text-lg rounded-full">
                <Image
                  src="/assets/svg/iconeIA.svg"
                  alt="Criar análise"
                  width={18}
                  height={18}
                  className=" -ml-28 -mt-4 absolute "
                  />
                Criar análise
                </button>
                {showModal && <CreateAnalysis modal={true} />}
            </div>
            <div className="flex -mt-2 flex-row gap-4 justify-start min-w-[257px] items-end flex-wrap">
              <ProfileInputFilter options={{ Feliz: "Feliz", Raiva: "Raiva", Medo: "Medo", Relaxado: "Relaxado", Raca: "Raça" }} select={true} wid="120px" input="" label="Tipo:" id="tipo" placeholder="Tipo"/>
              <ProfileInputFilter wid="120px" type="date" input="" label="Data inicial:" id="tipo" placeholder="DD/MM/YYYY"/>
              <ProfileInputFilter wid="120px" type="date" input="" label="Data final:" id="tipo" placeholder="DD/MM/YYYY"/>
              <button className=' gap-1 flex justify-center items-center bg-green rounded-full text-white text-lg font-medium h-10 w-24'>
                <Image
                  src="/assets/svg/filter.svg"
                  alt="Filtar"
                  width={15}
                  height={15}
                  className=""
                  />
                Filtar</button>
            </div>
          </div>

          <div className='mt-10 flex flex-wrap lfex-row gap-2 justify-start items-start'>
            <CardPetAnalysis/>
            <CardPetAnalysis/>
            <CardPetAnalysis/>
            <CardPetAnalysis/>
            <CardPetAnalysis/>
            <CardPetAnalysis/>
            <CardPetAnalysis/>
            <CardPetAnalysis/>
          </div>
      </div>
    )
}