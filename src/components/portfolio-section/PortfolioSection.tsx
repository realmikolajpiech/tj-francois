import Image from "next/image";

export function PortfolioSection() {
    return (
        <section className="portfolio-section w-[100vw] h-[850px] items-center gap-10 flex overflow-hidden mt-48 mb-16 md:-mt-36 md:-mb-8 lg:-mt-56 xl:-mt-[13rem] lg:pt-[80px] relative">
            <div className="flex overflow-hidden gap-10 relative w-full h-[850px] items-center mt-48 mb-16 md:-mt-36 md:-mb-8 lg:-mt-48 xl:-mt-[0] lg:pt-[0] animate-stop pointer-events-none">
                <div className='flex scale-[70%] md:scale-100 animate-scroll absolute mt-10 sm:mt-16 xl:mt-24'>
                    <div className="flex gap-[4.5rem] shrink-0 -translate-x-[11rem] pointer-events-auto">
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/creator1.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/betty2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/damian.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-3">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product1.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/roby.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-4" id="phoneA4">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/creator2.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/ericka.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-5">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product2.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/pet2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-5">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/angie.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-4">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product3.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/rob.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-2">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product4.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[4.5rem] shrink-0 -rotate-[40deg] -translate-y-[585px] -translate-x-[310px] pointer-events-auto">
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/creator1.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/betty2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/damian.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-3">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product1.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/roby.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-4">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/creator2.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/ericka.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-5">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product2.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/pet2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-5">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/angie.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-4">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product3.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/rob.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-2">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product4.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[4.5rem] shrink-0 -rotate-[80deg] -translate-y-[2240px] -translate-x-[1260px] pointer-events-auto">
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/creator1.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/damian.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-3">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/product1.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-4">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/creator2.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-5">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product2.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/pet2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-5">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/angie.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    {/* <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty1.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video> */}
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-4">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    {/* <Image src="/images/product3.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    /> */}
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/creators/rob.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-2" id="phoneC8">
                            <div>
                                <div className="relative h-[420px] w-[216px]">
                                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                    />
                                    <Image src="/images/product4.jpg" width={191} height={385} alt="Image"
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    />
                                    <video controls muted loop autoPlay
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                    >
                                        <source src="/portfolio/beauty2.mp4" type="video/mp4" className="z-0" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}