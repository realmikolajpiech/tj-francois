"use client";

import { CTAButton } from "../general/CTAButton";
import { CheckInput } from "./CheckInput";
import { Input } from "./Input";
import { RadioInput } from "./RadioInput";
import { Title } from "../general/Title";
import { useForm, ValidationError } from '@formspree/react';

export function ContactSection() {
    const [state, handleSubmit] = useForm("meqyodyb");
    if (state.succeeded) {
        return (
            <div className="w-full text-center">
                <p className="text-center">Thanks for getting in touch! We&apos;ll get back to you soon!</p>
            </div>
        )
    }

    return (
        <section className="px-6 mt-20 w-full max-w-[700px] mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-10" id="contact"></div>
            <Title>READY TO WORK TOGETHER?</Title>
            <h2 className="text-[#222222] text-center mt-3">Answer these questions so we can know more about you before our call!</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 w-full max-w-[700px] mx-auto">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <Input placeholder="What's your name?" id="name" />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Input placeholder="What's your email?" id="email" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="brand">Name of your brand</label>
                    <Input placeholder="What's the name of your brand?" id="brand" />
                    <ValidationError
                        prefix="Brand name"
                        field="brand"
                        errors={state.errors}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="website">Website of your brand</label>
                    <Input placeholder="What's the website of your brand?" id="website" />
                    <ValidationError
                        prefix="Website"
                        field="website"
                        errors={state.errors}
                    />
                </div>
                <fieldset className="flex flex-col gap-3">
                    <legend>What is your annual revenue?</legend>
                    <div className="flex flex-col gap-2 mt-2">
                        <RadioInput id="1m" value="< $1M" name="revenue" text="< $1M" />
                        <RadioInput id="2-4m" value="$2-4M" name="revenue" text="$2-4M" />
                        <RadioInput id="5-7m" value="$5-7M" name="revenue" text="$5-7M" />
                        <RadioInput id="7-10m" value="$7-10M" name="revenue" text="$7-10M" />
                        <RadioInput id="10m" value="> $10M" name="revenue" text="> $10M" />
                    </div>
                </fieldset>
                <div className="flex flex-col gap-3">
                    <div>Which services are you interested in?</div>
                    <RadioInput id="organic" value="Organic" name="Organic or Paid" text="Organic" />
                    <RadioInput id="paid" value="Paid" name="Organic or Paid" text="Paid" />
                    <CheckInput id="creativeStrategy" value="Creative strategy" text="Creative Strategy" />
                    <CheckInput id="adCreatives" value="Ad creatives" text="Ad Creatives" />
                    <CheckInput id="rawFootage" value="Raw footage" text="Raw Footage" />
                    <CheckInput id="postProduction" value="Post production" text="Post Production" />
                    <CheckInput id="creators" value="Creators sourcing, training, & management" text="Creators Sourcing, Training, & Management" />
                    <CheckInput id="copywriting" value="Direct response copywriting" text="Direct Response Copywriting" />
                    <CheckInput id="brandCollaboration" value="Brand collaboration" text="Brand Collaboration (tjandsteph_, stepht.trades, vitalsocials.co)" />
                    <CheckInput id="smm" value="Social media management/growth" text="Social Media Management/Growth" />
                    <CheckInput id="webDesign" value="Web Design" text="Web Design" />
                </div>
                <div className={`mt-6 w-full max-w-[700px] mx-auto md:w-fit md:mx-0 ${state.submitting ? 'opacity-50 hover:cursor-default pointer-events-none' : 'opacity-100'}`}>
                    <CTAButton variant="send">Send</CTAButton>
                </div>
            </form>
        </section>
    )
}