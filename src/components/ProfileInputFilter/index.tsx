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
  hei?: string;
  classNm?: string;
  type?: string;
  select?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: { [key: string]: string };
}

export default function ProfileInputFilter({
  select = false,
  options,
  type,
  label,
  hei,
  input,
  id,
  placeholder,
  wid,
  classNm = "",
  onChange,
}: InputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onChange) {
      const event = {
        target: {
          value: date ? date.toISOString().split('T')[0] : '',
          name: id,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

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
          onChange={onChange}
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
        style={{ width: wid, height: hei ? hei : "auto" }}
        className="px-[10px] flex w-auto py-1 bg-transparent items-center border border-blue rounded-[10px]"
      >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
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
          onChange={onChange}
        />
      </div>
    </div>
  );
}