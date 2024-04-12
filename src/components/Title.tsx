"use client";

import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
}

export function Title({ children }: TitleProps) {
    return (
        <h1 className="font-bold text-[36px] leading-tight text-center">{ children }</h1>
    )
}