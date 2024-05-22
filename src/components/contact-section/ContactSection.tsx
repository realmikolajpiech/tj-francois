"use client";

import { CTAButton } from "../general/CTAButton";
import { CheckInput } from "./CheckInput";
import { Input } from "./Input";
import { RadioInput } from "./RadioInput";
import { Title } from "../general/Title";

export function ContactSection() {

    return (
        <section className="px-6 mt-16 w-full max-w-[700px] mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-10" id="contact"></div>
            <Title>READY TO WORK TOGETHER?</Title>
            <h2 className="text-[#222222] text-center mt-3">Answer these questions so we can know more about you before our call!</h2>
            <div className="flex flex-col gap-4 mt-8 w-full max-w-[700px] mx-auto">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <Input placeholder="What's your name?" id="name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Input placeholder="What's your email?" id="email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="brand">Name of your brand</label>
                    <Input placeholder="What's the name of your brand?" id="brand" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="website">Website of your brand</label>
                    <Input placeholder="What's the website of your brand?" id="website" />
                </div>
                <fieldset className="flex flex-col gap-3">
                    <legend>What is your annual revenue?</legend>
                    <div className="flex flex-col gap-2 mt-2">
                        <RadioInput id="1m" value="1m" name="revenue" text="< $1M" />
                        <RadioInput id="2-4m" value="2-4m" name="revenue" text="$2-4M" />
                        <RadioInput id="5-7m" value="5-7m" name="revenue" text="$5-7M" />
                        <RadioInput id="7-10m" value="7-10m" name="revenue" text="$7-10M" />
                        <RadioInput id="10m" value="10m" name="revenue" text="> $10M" />
                    </div>
                </fieldset>
                <div className="flex flex-col gap-3">
                    <div>Which services are you interested in?</div>
                    <CheckInput id="creativeAdStrategy" value="creativeAdStrategy" text="Creative Ad Strategy" />
                    <CheckInput id="adCreatives" value="adCreatives" text="Ad Creatives" />
                    <CheckInput id="rawFootage" value="rawFootage" text="Raw Footage" />
                    <CheckInput id="postProduction" value="postProduction" text="Post Production" />
                    <CheckInput id="creators" value="creators" text="Creators Sourcing, Training, & Management" />
                    <CheckInput id="copywriting" value="copywriting" text="Direct Response Copywriting" />
                    <CheckInput id="brandCollaboration" value="brandCollaboration" text="Brand Collaboration (tjandsteph_, stepht.trades, vitalsocials.co)" />
                </div>
            </div>
            <div className="mt-6 w-full max-w-[700px] mx-auto md:w-fit md:mx-0">
                <CTAButton variant="send">Send</CTAButton>
            </div>
        </section>
    )
}