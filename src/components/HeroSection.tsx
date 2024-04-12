"use client";

import Image from "next/image";
import { CTAButton } from "./CTAButton";

export function HeroSection() {
    return (
        <section className="px-8">
            <div>
                <h1 className="font-bold text-[42px] md:text-[60px] leading-[60px]">Hi, I&apos;m TJ Francois!</h1>
                <h2 className="mt-[18px] max-w-[650px] text-[18px] md:text-[20px]">I am a TikTok and Meta Creative Strategist. I work with eCommerce brands to offer them unconventional ad creatives on a weekly basis.</h2>
                <CTAButton>Contact Us</CTAButton>
            </div>
            <div className="mt-[53px]">
                <h3 className="text-[#2C2C2C] text-[18px]">Trusted by many brands</h3>
                <div className="flex gap-[20px] flex-wrap mt-[23px] items-center space-y-0 gap-y-2">
                    <Image className="logo" src="/logos/HBFace.png" alt="HBFace logo" width={83} height={30} />
                    <Image className="logo" src="/logos/skip&scamper.png" alt="Skip & Scamper logo" width={63} height={30} />
                    <Image className="logo" src="/logos/bestmoney.png" alt="BestMoney logo" width={95} height={15} />
                    <Image className="logo" src="/logos/keynutrients.png" alt="KEY NUTRIENTS logo" width={114} height={30} />
                    <Image className="logo" src="/logos/crossrope.png" alt="CROSSROPE logo" width={135} height={30} />
                    <Image className="logo" src="/logos/bo+tee.png" alt="BO+TEE logo" width={75} height={30} />
                    <Image className="logo" src="/logos/theinkeylist.png" alt="THEINKEYLIST logo" width={135} height={30} />
                    <Image className="logo" src="/logos/haroutine.png" alt="HA.routine logo" width={67} height={30} />
                    <Image className="logo" src="/logos/girlfriendcollective.png" alt="girldfriend collective logo" width={68} height={30} />
                    <Image className="logo" src="/logos/protein2o.png" alt="PROTEIN2o logo" width={94} height={30} />
                    <Image className="logo" src="/logos/dinovite.png" alt="DINOVITE logo" width={90} height={30} />
                    <Image className="logo" src="/logos/banilaco.png" alt="BANILA CO logo" width={120} height={30} />
                    <Image className="logo" src="/logos/ziip.png" alt="ZIIP logo" width={60} height={30} />
                    <Image className="logo" src="/logos/velisy.png" alt="Velisy logo" width={73} height={30} />
                </div>
            </div>
        </section>
    )
}