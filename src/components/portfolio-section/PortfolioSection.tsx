"use client";

import Image from "next/image";

export function PortfolioSection() {
    return (
        <section className="m-auto w-full h-[550px] flex justify-start overflow-hidden -mt-20 md:-mt-0 -mb-20">
            <div className='w-[100px] mx-auto relative -translate-x-24 scale-[70%] md:scale-100'> { /* goal: h-[3000px] */ }
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator1.jpg" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/product1.jpg" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator2.jpg" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/product2.jpg" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/product3.jpg" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/product4.jpg" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* THAT'S ALL */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* DOUBLED VIDEOS */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <Image src="/images/creator.png" width={191} height={385} alt="Image"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}