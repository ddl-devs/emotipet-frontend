"use client";


interface InputProps {
    label: string;
    input: string;
    id: string;
    placeholder: string;
    wid: string;
    editable?: boolean;
    color?: string;
}


export default function ProfileInput({label, input, id, placeholder, wid, editable = false, color}: InputProps){

    return(
        <div>
            <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">{label}</label>
            <div style={{width: wid}} className="px-[10px] flex w-auto py-1 bg-whiteGray2 rounded-[10px]">
                <input
                    readOnly={!editable}
                    name={label}
                    id={id}
                    defaultValue={input}
                    className={`w-full bg-transparent text-${editable ? 'blackGray' : 'purple'} text-lg font-semibold outline-none`}
                    title={label}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )

}