import Image from 'next/image'; // Import the Image component from the appropriate package
import DeletButton from '../../../public/assets/svg/DeletButton.svg'; // Import the EditButton component from the appropriate path

interface ButtonProps {
    click: () => void;
}

export default function DeleteButton({ click }: ButtonProps) {
    return (
        <div>
            <button className="flex flex-row gap-2 justify-center items-center" onClick={click}>
                <DeletButton className=""/>
                <p className='text-lg text-white'>Excluir</p>
            </button>
        </div>
    );
}
