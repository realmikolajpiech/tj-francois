"use client";

interface InputProps {
    placeholder: string;
    id: string;
}

export function Input({ placeholder, id }: InputProps) {
    return (
        <input type="text" placeholder={placeholder} id={id} className="p-3 rounded-lg border-[1px] border-[#EDDCC4] transition focus:border-[#EDDCC4] focus:border-2 focus:outline-none" />
    )
}