import Image from 'next/image'; // Import the Image component from the appropriate package
import EditiButton from '../../../public/assets/svg/EditButton.svg'; // Import the EditButton component from the appropriate path

interface ButtonProps {
    click: () => void;
}

export default function EditButton({ click }: ButtonProps) {
    return (
        <div>
            <button className="flex flex-row gap-2 justify-center items-center" onClick={click}>
                <EditiButton className=""/>
                <p className='text-lg text-white'>Editar</p>
            </button>
        </div>
    );
}
