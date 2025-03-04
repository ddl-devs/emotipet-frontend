"use client";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from "react";

interface InputProps {
    label?: string;
    input: string;
    id: string;
    placeholder: string;
    wid: string;
    editable?: boolean;
    color?: string;
    classNm?: string;
    type?: string;
}


export default function ProfileInput({type, label, input, id, placeholder, wid, editable = false, color = 'purple', classNm = '' }: InputProps){
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return type === "date" ? (
        <div>
          <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">
            {label}
          </label>
          <div
            style={{ width: wid }}
            className="px-[10px] flex w-auto py-1 bg-whiteGray2 rounded-[10px]"
          >
            <DatePicker
              readOnly={!editable}
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              className={`text-center w-full bg-transparent text-${editable ? 'blackGray' : color} outline-none ${classNm ? classNm : 'text-lg font-semibold'}`}
              placeholderText={placeholder}
              dateFormat="dd/MM/yyyy"
              locale="pt-BR"
            />
          </div>
        </div>) : (
        <div>
            <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">{label}</label>
            <div style={{width: wid}} className="px-[10px] flex w-auto py-1 bg-whiteGray2 rounded-[10px]">
                <input
                    type={type}
                    readOnly={!editable}
                    name={label}
                    id={id}
                    defaultValue={input}
                    onChange={(e) => input = e.target.value}
                    className={`text-center w-full bg-transparent text-${editable ? 'blackGray' : color} outline-none ${classNm ? classNm : 'text-lg font-semibold'}`}
                    title={label}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )

}