"use client";

import { ReactNode } from "react";

interface CTAButtonProps {
    children: ReactNode;
    variant?: "default" | "send";
}

export function CTAButton({ children, variant="default" }: CTAButtonProps) {
    return (
        variant === 'default' ? (
            <button
                className={`mt-[36px] px-[60px] py-[18px] bg-[#73091D] text-white font-bold rounded-[8px] text-[20px] capitalize`}
            >
                {children}
            </button>
        ): (
            <button
                className={`mt-[36px] px-[60px] py-[12px] bg-[#73091D] text-white font-bold rounded-[8px] text-[18px] capitalize w-full`}
            >
                {children}
            </button>
        )
    )
}