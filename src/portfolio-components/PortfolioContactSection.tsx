"use client";

import { CTAButton } from "@/components/general/CTAButton";
import { Title } from "@/components/general/Title";

export function PortfolioContactSection() {
    return (
        <section className="px-6 mt-32 w-full max-w-[700px] mx-auto relative">
            <Title>READY TO WORK TOGETHER?</Title>
            <div className="mx-auto w-fit">
                <CTAButton>Contact Us</CTAButton>
            </div>
        </section>
    )
}