"use client"

import Image from 'next/image'; 
import ProfileInputFilter from '../ProfileInputFilter';
import { useState } from 'react';

interface props {
    modal: boolean;
}

export default function CreateAnalysis({modal=false}: props) {

    const [isModalOpen, setIsModalOpen] = useState(modal);

    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <div className='relative'>
            {isModalOpen && 
            <div className='fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='bg-white p-4 px-6 rounded-2xl shadow-lg gap-1 flex justify-center items-center flex-col w-auto '>
                    <h1 className='text-center text-2xl font-semibold text-orange mb-4'>Criação de análise</h1>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div className='flex floex-row gap-4 justify-center items-center'>
                            {profileImage ? (
                            <Image
                                src={profileImage}
                                alt='Bolota'
                                width={140}
                                height={140}
                                className='rounded-full w-[140px] h-[140px] bg-gradient-to-br from-[#4B9DFA] to-[#5676DE]'
                                />
                            ) : (
                                <div className='rounded-full w-[140px] h-[140px] bg-gradient-to-br from-[#4B9DFA] to-[#5676DE]'>

                                </div>
                            )}
                            <div className='flex gap-4 justify-center items-center flex-col'>
                                <label className='bg-blue p-2 px-3 rounded-full text-white font-semibold' htmlFor='profileImage'>Escolher foto do pet</label>
                                <input
                                    id='profileImage'
                                    type='file'
                                    accept='image/*'
                                    onChange={handleImageChange}
                                    className='mt-2 hidden'
                                    />
                                <ProfileInputFilter options={{EMOTIONAL: "Emocional", BREED: "Raça"}} select={true} wid="160px" input="" label="Tipo de análise:" id="tipo" placeholder="Escolher tipo"/>
                            </div>
                        </div>
                        <div className='flex gap-4 justify-between items-center flex-row mt-7'>
                            <button className='bg-green rounded-full p-2 text-white text-lg font-semibold w-36'>Criar Análise</button>
                            <button className='bg-gray rounded-full p-2 text-white text-lg font-semibold w-36' onClick={() => setIsModalOpen(false)}>Cancelar</button>
                        </div>
                    </div>

                </div>
            </div>
            }
        </div>
    );
}
