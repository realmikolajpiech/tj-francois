"use client";

interface RadioInputProps {
    id: string;
    value: string;
    name: string;
    text: string;
}

export function RadioInput({ id, value, name, text }: RadioInputProps) {
    return (
        <div className="flex gap-3 items-center relative">
            <input type="radio" id={id} value={value} name={name} className="h-6 w-6 outline-[#EDDCC4]" />
            <span className="radio-container"></span>
            <label htmlFor={id}>{text}</label>
        </div>
    )
}