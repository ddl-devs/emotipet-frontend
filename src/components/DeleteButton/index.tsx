"use client"

import Image from 'next/image'; 
import DeletButton from '../../../public/assets/svg/DeletButton.svg';
import { useState } from 'react';


export default function DeleteButton() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='relative'>
            <button className="flex flex-row gap-2 justify-center items-center" onClick={() => setIsModalOpen(true)}>
                <DeletButton className=""/>
                <p className='text-lg text-white'>Excluir</p>
            </button>
            {isModalOpen && 
            <div className='fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='bg-white p-4 rounded-2xl shadow-lg gap-1 flex justify-center items-center flex-col w-52'>
                    <p className='text-center'>Tem certeza que deseja excluir seu pet ?</p>
                    <button className='bg-red rounded-full py-1 text-white font-semibold w-40 mt-2' onClick={() => setIsModalOpen(false)}>Excluir</button>
                    <button className='bg-gray rounded-full py-1 text-white font-semibold w-40 mt-1' onClick={() => setIsModalOpen(false)}>Cancelar</button>
                </div>
            </div>
            }
        </div>
    );
}
