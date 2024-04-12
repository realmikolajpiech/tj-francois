"use client";

import { ProcessStep } from "./ProcessStep";
import { Title } from "./Title";

export function ProcessSection() {

    return (
        <section className="px-8 mt-16">
            <Title>The Process is Simple</Title>
            <div className="flex flex-col gap-4">
                <ProcessStep
                    number="1"
                    title="Ideation"
                    description="Brainstorming ideas for ad campaigns based on the agreed-upon strategy + client feedback."
                />
                <ProcessStep
                    number="2"
                    title="Conceptualization"
                    description="Developing concepts for ad creatives, including messaging, visuals, and formats, that effectively communicate your value proposition and resonates with your target audience."
                />
                <ProcessStep
                    number="3"
                    title="Creation"
                    description="Producing high-quality ad creatives which include copywriting, video production, and revisions, according to the approved concepts."
                />
            </div>
        </section>
    )
}