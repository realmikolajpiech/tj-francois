"use client";

import { ReactNode } from "react";

interface CTAButtonProps {
    children: ReactNode;
    variant?: "default" | "send";
}

export function CTAButton({ children, variant="default" }: CTAButtonProps) {
    return (
        variant === 'default' ? (
            <a href="/#contact">
                <button
                    type="submit"
                    className={`mt-[36px] px-[60px] py-[16px] bg-[#73091D] text-white font-bold rounded-[8px] text-[18px] capitalize transition duration-300 hover:bg-[#EDDCC4] hover:text-black`}
                >
                    {children}
                </button>
            </a>
        ): (
                <button
                    type="submit"
                    className="send-btn mt-[36px] px-[60px] py-[12px] bg-[#73091D] text-white font-bold rounded-[8px] text-[18px] capitalize w-full transition duration-300 hover:bg-[#EDDCC4] hover:text-black relative"
                    >
                        <div>
                            {children}
                        </div>
                </button>
        )
    )
}