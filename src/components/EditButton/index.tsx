import Image from 'next/image';

interface ButtonProps {
    click: () => void;
}

export default function EditButton({ click }: ButtonProps) {
    return (
        <div className='ml-5'>
            <button className="flex flex-row gap-2 justify-center items-center" onClick={click}>
                <Image src="/assets/svg/EditButton.svg" width={25} height={28} alt="Editar" />
                <p className='text-lg text-blue'>Editar</p>
            </button>
        </div>
    );
}
