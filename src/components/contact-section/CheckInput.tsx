"use client";

interface CheckInputProps {
    id: string;
    value: string;
    text: string;
}

export function CheckInput({ id, value, text }: CheckInputProps) {
    return (
        <div className="flex gap-3 items-center relative">
            <input type="checkbox" id={id} name='services' value={value} className="rounded-lg h-6 w-6 outline-[#EDDCC4]" />
            <span className="checkbox-container"></span>
            <label htmlFor={id}>{text}</label>
        </div>
    )
}