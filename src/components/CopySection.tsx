"use client";

import { CTAButton } from "./CTAButton";
import { Title } from "./Title";

export function CopySection() {

    return (
        <section className="px-8 text-center">
            <Title>Unique Ad Creatives on a Weekly Basis</Title>
            <p className="mt-6">
                Vital Socials partners with top eCommerce brands to craft captivating ad creatives that stop the scroll.
                We cherish the collaboration with our esteemed team of creators, who bring their passion and expertise to every project.
            </p>
            <div className="mt-[40px]">
                <CTAButton>Contact Us</CTAButton>
            </div>
        </section>
    )
}