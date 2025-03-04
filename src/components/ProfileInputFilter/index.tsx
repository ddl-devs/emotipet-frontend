"use client";

import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";

registerLocale("pt-BR", ptBR);

interface InputProps {
  label?: string;
  input: string;
  id: string;
  placeholder: string;
  wid: string;
  classNm?: string;
  type?: string;
  select?: boolean;
  options?: { [key: string]: string };
}

export default function ProfileInputFilter({
  select = false,
  options,
  type,
  label,
  input,
  id,
  placeholder,
  wid,
  classNm = "",
}: InputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return select ? (
    <div>
      <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">
        {label}
      </label>
      <div
        style={{ width: wid }}
        className="px-[10px] flex w-auto py-1 bg-transparent border border-blue rounded-[10px]"
      >
        <select
          name={label}
          id={id}
          defaultValue={placeholder}
          className={`text-center w-full bg-transparent text-blue outline-none ${
            classNm ? classNm : "text-base font-semibold"
          }`}
          title={label}
          
        >
          <option className="text-gray text-base font-semibold" value="">{placeholder}</option>
            {options && Object.entries(options).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
            ))}
        </select>
      </div>
    </div>
  ) : type === "date" ? (
    <div>
      <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">
        {label}
      </label>
      <div
        style={{ width: wid }}
        className="px-[10px] flex w-auto py-1 bg-transparent border border-blue rounded-[10px]"
      >
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          className={`text-center w-full bg-transparent text-blue outline-none ${
            classNm ? classNm : "text-base font-semibold"
          }`}
          placeholderText={placeholder}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
        />
      </div>
    </div>
  ) : (
    <div>
      <label htmlFor={id} className="text-whiteGray text-sm font-medium ml-1">
        {label}
      </label>
      <div
        style={{ width: wid }}
        className="px-[10px] flex w-auto py-1 bg-transparent border border-blue rounded-[10px]"
      >
        <input
          name={label}
          id={id}
          defaultValue={input}
          className={`text-center w-full bg-transparent text-blue outline-none ${
            classNm ? classNm : "text-lg font-semibold"
          }`}
          title={label}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}