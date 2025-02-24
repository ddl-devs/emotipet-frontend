"use client";


interface InputProps {
    label?: string;
    input: string;
    id: string;
    placeholder: string;
    wid: string;
    classNm?: string;
    type?: string;
    select?: boolean;
    options?: string[];
}


export default function ProfileInputFilter({select = false, options, type ,label, input, id, placeholder, wid, classNm = '' }: InputProps){

    return(
        
        {select} ? (
            <div>
                <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">{label}</label>
                <div style={{width: wid}} className="px-[10px] flex w-auto py-1 bg-transparent border border-blue rounded-[10px]">
                    <select
                        name={label}
                        id={id}
                        defaultValue={input}
                        className={`text-center w-full bg-transparent text-blue outline-none ${classNm ? classNm : 'text-lg font-semibold'}`}
                        title={label}
                    >
                        <option value="">{placeholder}</option>
                        {options?.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        ) : (
        <div>
            <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">{label}</label>
            <div style={{width: wid}} className="px-[10px] flex w-auto py-1 bg-transparent border border-blue rounded-[10px]">
                    <input
                        name={label}
                        id={id}
                        defaultValue={input}
                        className={`text-center w-full bg-transparent text-blue outline-none ${classNm ? classNm : 'text-lg font-semibold'}`}
                        title={label}
                        placeholder={placeholder}
                        />
                </div>
            </div>
        )
    )

}