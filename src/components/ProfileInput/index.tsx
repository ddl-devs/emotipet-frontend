"use client";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import { useState, useEffect } from "react";

registerLocale("pt-BR", ptBR);

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
  onchange?: (e: any) => void;
  require?: boolean;
}

export default function ProfileInput({
  require,
  onchange,
  type,
  label,
  input,
  id,
  placeholder,
  wid,
  editable = false,
  color = "purple",
  classNm = "",
}: InputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (type === "date" && input) {
      setSelectedDate(new Date(input));
    }
  }, [input, type]);

  return (
    <div>
      <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">
        {label}
      </label>
      <div
        style={{ width: wid }}
        className="px-[10px] flex w-auto py-1 bg-whiteGray2 rounded-[10px]"
        >
        <input
          required={require}
          type={type}
          readOnly={!editable}
          name={id}
          id={id}
          defaultValue={input}
          onChange={onchange}
          className={`text-center w-full bg-transparent text-${
            editable ? "blackGray" : color
            } outline-none ${classNm ? classNm : "text-lg font-semibold"}`}
            title={label}
            placeholder={placeholder}
            />
      </div>
    </div>
  )
  
}