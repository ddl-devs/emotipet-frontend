"use client";


interface InputProps {
    label: string;
    input: string;
    id: string;
    placeholder: string;
    wid: string;
    editable?: boolean;
}


export default function ProfileInput({label, input, id, placeholder, wid, editable = false}: InputProps){

    return(
        <div>
            <label htmlFor={id} className="text-whiteGray text-sm font-</div>medium">{label}</label>
            <div style={{width: wid}} className="px-[10px] flex w-auto py-1 bg-whiteGray2 rounded-[10px]">
                <input readOnly={!editable} name={label} id={id} defaultValue={input} className="w-auto bg-transparent text-purple text-lg font-semibold outline-none" title={label} placeholder={placeholder} />
            </div>
        </div>
    )

}