"use client";

import Image from "next/image";

export function PortfolioSection() {
    return (
        <section className="m-auto w-full h-[550px] flex justify-start mt-[200px]">
            {/* <div className='flex w-fit animate-scroll hover:stop-scrolling'> */}
            <div className='w-[100px] mx-auto animate-scroll hover:stop-scrolling relative -translate-x-24 bg-black'> { /* goal: h-[3000px] */ }
                {/* <div className='w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-6 rotate-[12deg] relative bottom-[56px]'> */}
                <div className='phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-6 absolute'>
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-6 rotate-0 relative bottom-[32px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-6 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/beauty2.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-6 -rotate-[12deg] relative bottom-[56px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-6 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/beauty3.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[24deg] relative bottom-[128px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/healthandwellness1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[36deg] relative bottom-[256px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/healthandwellness2.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[48deg] relative bottom-[430px] right-10"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/healthandwellness3.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[60deg] relative bottom-[636px] right-[116px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/pet1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[72deg] relative bottom-[872px] right-[232px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/pet2.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[84deg] relative bottom-[1130px] right-[406px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/financetech1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* DOUBLED VIDEOS */}
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[96deg] relative bottom-[1400px] right-[624px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[108deg] relative bottom-[1668px] right-[900px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/beauty2.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[120deg] relative bottom-[1918px] right-[1230px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/beauty3.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[136deg] relative bottom-[2148px] right-[1624px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/healthandwellness1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/healthandwellness2.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[160deg] relative bottom-[2424px] right-[2532px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/healthandwellness3.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[172deg] relative bottom-[2484px] right-[3016px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/pet1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[184deg] relative bottom-[2486px] right-[3516px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/pet2.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 -rotate-[196deg] relative bottom-[2436px] right-[4008px]"> */}
                <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center m-4 absolute">
                    <div>
                        <div className="relative h-[420px] w-[216px]">
                            <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                            />
                            <video controls muted loop
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src="/portfolio/financetech1.mp4" type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}