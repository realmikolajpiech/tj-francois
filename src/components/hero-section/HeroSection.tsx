import Image from "next/image";
import { CTAButton } from "../general/CTAButton";

export function HeroSection() {
    return (
        <section className="w-full md:mt-6">
            <div className="md:flex md:justify-between">
                <div className="px-6 md:px-8 lg:px-12 xl:px-20 md:pr-1">
                    <h1 className="font-bold text-[9vw] sm:text-[52px] md:text-[41px] lg:text-[50px] xl:text-[60px] leading-[50px]">Hi, We&apos;re Vital Socials!</h1>
                    <h2 className="mt-[28px] max-w-[765px] text-[16px] md:text-[18px] lg:text-[20px] ">I am a Meta, YouTube, and TikTok Ad Creative Strategist. I work with eCommerce brands to offer them unconventional ad creatives on a weekly basis.</h2>
                    <CTAButton>Contact Us</CTAButton>
                    <div className="hidden md:block">
                        <div className="mt-[42px]">
                            <h3 className="text-[#2C2C2C] text-[18px]">Trusted by many brands</h3>
                            <div className="flex gap-[13px] flex-wrap mt-[16px] items-center space-y-0 gap-y-1 max-w-[750px]">
                                <Image className="logo w-[45px]" src="/logos/toyota.png" alt="Toyota logo" width={83} height={30} />
                                <Image className="logo w-[65px]" src="/logos/HBFace.png" alt="HBFace logo" width={83} height={30} />
                                <Image className="logo" src="/logos/skipscamper.png" alt="Skip & Scamper logo" width={63} height={30} />
                                <Image className="logo w-[80px]" src="/logos/bestmoney.png" alt="BestMoney logo" width={95} height={15} />
                                <Image className="logo w-[100px]" src="/logos/keynutrients.png" alt="KEY NUTRIENTS logo" width={114} height={30} />
                                <Image className="logo w-[115px]" src="/logos/crossrope.png" alt="CROSSROPE logo" width={135} height={30} />
                                <Image className="logo w-[70px]" src="/logos/bo+tee.png" alt="BO+TEE logo" width={75} height={30} />
                                <Image className="logo w-[120px]" src="/logos/theinkeylist.png" alt="THEINKEYLIST logo" width={135} height={30} />
                                <Image className="logo" src="/logos/haroutine.png" alt="HA.routine logo" width={67} height={30} />
                                <Image className="logo w-[60px]" src="/logos/girlfriendcollective.png" alt="girldfriend collective logo" width={68} height={30} />
                                <Image className="logo w-[80px]" src="/logos/protein2o.png" alt="PROTEIN2o logo" width={94} height={30} />
                                <Image className="logo w-[75px]" src="/logos/dinovite.png" alt="DINOVITE logo" width={90} height={30} />
                                <Image className="logo w-[95px]" src="/logos/banilaco.png" alt="BANILA CO logo" width={120} height={30} />
                                <Image className="logo w-[55px]" src="/logos/ziip.png" alt="ZIIP logo" width={60} height={30} />
                                <Image className="logo w-[60px]" src="/logos/velisy.png" alt="Velisy logo" width={73} height={30} />
                                <Image className="logo w-[70px]" src="/logos/thefoldie.png" alt="The Foldie logo" width={73} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 w-full md:w-[335px] lg:w-[417px] xl:w-[455px] justify-center overflow-hidden shrink-0 mr-6 xl:mr-20 lg:h-[400px] xl:h-[410px] xl:scale-95 xl:-mt-4">
                    <div className="hero-phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -rotate-6 scale-75 lg:scale-90 xl:scale-100 -m-8 xl:-m-1">
                        <div>
                            <div className="relative h-[420px] w-[216px]">
                                <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                    className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                />
                                <Image src="/images/tjandsteph.jpg" width={191} height={385} alt="Image"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hero-phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center rotate-12 -z-10 scale-75 lg:scale-90 xl:scale-100 -m-7 xl:-m-1">
                        <div>
                            <div className="relative h-[420px] w-[216px]">
                                <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone" loading="eager"
                                    className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                />
                                {/* <Image src="/images/creator1.jpg" width={191} height={385} alt="Image"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                /> */}
                                <video muted loop autoPlay
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                >
                                    <source src="/creators/tanya.mp4" type="video/mp4" className="z-0" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[16px] px-6 md:hidden">
                <h3 className="text-[#2C2C2C] md:text-[18px]">Trusted by many brands</h3>
                <div className="flex gap-[13px] flex-wrap mt-[23px] items-center space-y-0 gap-y-1">
                    <Image className="logo w-[65px]" src="/logos/HBFace.png" alt="HBFace logo" width={83} height={30} />
                    <Image className="logo" src="/logos/skipscamper.png" alt="Skip & Scamper logo" width={63} height={30} />
                    <Image className="logo w-[80px]" src="/logos/bestmoney.png" alt="BestMoney logo" width={95} height={15} />
                    <Image className="logo w-[100px]" src="/logos/keynutrients.png" alt="KEY NUTRIENTS logo" width={114} height={30} />
                    <Image className="logo w-[115px]" src="/logos/crossrope.png" alt="CROSSROPE logo" width={135} height={30} />
                    <Image className="logo w-[70px]" src="/logos/bo+tee.png" alt="BO+TEE logo" width={75} height={30} />
                    <Image className="logo w-[120px]" src="/logos/theinkeylist.png" alt="THEINKEYLIST logo" width={135} height={30} />
                    <Image className="logo" src="/logos/haroutine.png" alt="HA.routine logo" width={67} height={30} />
                    <Image className="logo w-[60px]" src="/logos/girlfriendcollective.png" alt="girldfriend collective logo" width={68} height={30} />
                    <Image className="logo w-[80px]" src="/logos/protein2o.png" alt="PROTEIN2o logo" width={94} height={30} />
                    <Image className="logo w-[75px]" src="/logos/dinovite.png" alt="DINOVITE logo" width={90} height={30} />
                    <Image className="logo w-[95px]" src="/logos/banilaco.png" alt="BANILA CO logo" width={120} height={30} />
                    <Image className="logo w-[55px]" src="/logos/ziip.png" alt="ZIIP logo" width={60} height={30} />
                    <Image className="logo w-[60px]" src="/logos/velisy.png" alt="Velisy logo" width={73} height={30} />
                </div>
            </div>
        </section>
    )
}