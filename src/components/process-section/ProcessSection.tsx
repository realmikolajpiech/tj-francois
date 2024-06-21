'use client';

import { ProcessStep } from "./ProcessStep";
import { Title } from "../general/Title";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";

export function ProcessSection() {
    const screenSize = useScreenSize();

    return (
        <section className="px-6 md:px-8 lg:px-12 xl:px-20 mt-20 max-w-[96rem] lg:mx-auto">
            <Title>The Process is Simple</Title>
            <div className="flex flex-col gap-2">
                <div className="flex justify-center max-lg:flex-col lg:justify-start lg:items-baseline">
                    <ProcessStep
                        number="1"
                        title="Ideation"
                        description="Brainstorming ideas for ad campaigns based on the agreed-upon strategy + client feedback."
                    />
                    {screenSize.width! < 1024 && (
                        <div className="lg:hidden process-phones absolute top-[69%] -left-1/2 lg:-translate-x-[30%] xl:-translate-x-[60%] flex max-lg:-translate-x-0 max-lg:relative max-lg:top-36 max-lg:flex max-lg:justify-center max-lg:left-0">
                            <div className="flex phone-process-1 -mx-12 w-[200px] overflow-hidden grow-0 shrink-0 justify-center">
                                <div>
                                    <div className="relative h-[420px] w-[216px] scale-[70%]">
                                        <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                            className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                        />
                                        <video muted loop autoPlay playsInline
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                        >
                                            <source src="https://cdn.vitalsocials.co/creators/niha.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="phone-process-3 w-[200px] overflow-hidden grow-0 shrink-0 justify-center flex -mx-12">
                                <div>
                                    <div className="relative h-[420px] w-[216px] scale-[70%]">
                                        <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                            className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                        />
                                        <video muted loop autoPlay width={800} playsInline
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                        >
                                            <source src="https://cdn.vitalsocials.co/creators/debby.mp4" width={800} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <svg className="hidden lg:block relative -bottom-16 -left-6 xl:-left-0 lg:left-1" width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M111.28 95.3962L106.446 91.5199C105.645 90.8676 104.825 90.2388 104.005 89.6108L101.544 87.7236C100.671 87.0607 99.8064 86.3818 98.9197 85.733C98.031 85.0872 97.1376 84.4498 96.2393 83.8209C95.0379 82.9882 93.8435 82.1453 92.6353 81.323L88.9858 78.8926C86.5664 77.2522 84.0871 75.7036 81.6268 74.1268L79.7782 72.9496L77.9094 71.8045L74.1741 69.511L73.24 68.9381L72.296 68.3816L70.4088 67.2673L66.6376 65.0325L61.948 62.3585C61.1653 61.9145 60.3884 61.4602 59.6014 61.0241L57.2331 59.7287C55.6518 58.8695 54.082 57.9886 52.4921 57.1451L47.7094 54.6385C41.3072 51.3462 34.8454 48.1609 28.2708 45.2214C27.2835 44.7684 26.3007 44.2917 25.3251 43.8063C24.344 43.3327 23.3684 42.8619 22.3983 42.3937C20.5473 41.4934 19.442 40.6866 18.8315 40.0005C17.9416 39.0026 19.2887 38.9192 22.0553 39.9101C22.9298 40.2243 23.8357 40.5759 24.7423 40.9456C25.1942 41.134 25.6479 41.323 26.0993 41.5112C26.5445 41.7136 26.9876 41.9151 27.4242 42.1137C29.4312 43.0371 31.4368 43.9598 33.4409 44.8818C35.4315 45.833 37.4261 46.7727 39.4249 47.7008C40.4287 48.156 41.4132 48.6508 42.408 49.1246L45.391 50.5487C47.3912 51.4756 49.359 52.467 51.3469 53.4222C52.4417 53.9537 53.5688 54.478 54.6712 55.032C55.7674 55.5974 56.8476 56.1759 57.8673 56.7789C61.1399 58.6763 64.4092 60.5972 67.7123 62.4644L72.6109 65.3614C73.4242 65.849 74.2433 66.3266 75.0477 66.8278L77.4469 68.3508L81.014 70.6162C82.1957 71.385 83.3782 72.1544 84.5614 72.9242L88.1076 75.2382C89.2731 76.0342 90.4379 76.83 91.6023 77.6254C92.6359 78.341 93.6785 79.0432 94.7036 79.7705L97.7664 81.9696L100.825 84.1727L103.842 86.4327L106.858 88.6931L109.83 91.01L112.801 93.3277C113.788 94.1039 114.744 94.9203 115.717 95.7142C116.49 96.3519 117.243 96.9894 117.977 97.6265C118.341 97.9478 118.701 98.2662 119.058 98.5816C119.408 98.9059 119.748 99.2343 120.084 99.5596C121.427 100.862 122.667 102.158 123.788 103.429C124.826 104.59 124.469 104.85 122.928 103.91C122.657 103.742 122.384 103.573 122.109 103.403C121.838 103.23 121.58 103.038 121.314 102.854L119.721 101.723C118.662 100.955 117.593 100.178 116.526 99.4038C114.775 98.1268 113.048 96.7302 111.324 95.3713C111.309 95.3793 111.296 95.3868 111.28 95.3962Z" fill="black" />
                        <path d="M87.3193 87.6585C91.2507 88.6734 95.1256 89.896 98.9276 91.3211C99.9288 91.7105 100.932 92.1005 101.936 92.4911C102.928 92.9064 103.922 93.3144 104.92 93.7065C109.152 95.4375 113.285 97.3861 117.328 99.4765C121.371 101.572 125.335 103.792 129.256 106.069L127.223 108.403C126.864 107.963 126.537 107.499 126.197 107.045L125.69 106.36C125.605 106.246 125.524 106.13 125.436 106.019C125.366 105.893 125.282 105.779 125.206 105.658C125.047 105.422 124.9 105.177 124.732 104.948L124.227 104.262C123.889 103.806 123.538 103.36 123.195 102.908C118.944 97.3901 114.596 91.9478 110.294 86.4686C108.134 83.7366 105.998 80.985 103.86 78.2349L97.445 69.9859C96.1546 68.3271 94.9177 66.6003 93.707 64.9118C92.5486 63.2939 91.9742 62.1087 91.7642 61.2589C91.4579 60.022 92.6203 60.5976 94.4816 62.7212C95.6587 64.0653 96.873 65.5911 97.9948 67.0559C100.579 70.4279 103.193 73.7694 105.837 77.0804C107.159 78.7363 108.491 80.3843 109.831 82.0247C111.165 83.6705 112.507 85.3094 113.859 86.9414C115.35 88.7428 116.931 90.5952 118.274 92.4331C121.842 97.2743 125.581 102.022 129.567 106.557C129.785 106.806 129.908 107.124 129.913 107.454C129.919 107.785 129.807 108.107 129.597 108.363C129.387 108.618 129.094 108.791 128.768 108.85C128.443 108.909 128.107 108.851 127.821 108.686L127.749 108.643C126.663 108.013 125.582 107.377 124.506 106.735C119.869 103.987 115.093 101.446 110.27 99.0778C105.984 96.9504 101.576 95.0765 97.07 93.4659C92.5583 91.8723 87.9438 90.5862 83.2583 89.6164C81.382 89.2537 79.5727 88.8267 77.8266 88.4341C77.3911 88.3303 76.9607 88.2226 76.5354 88.1111C76.323 88.0529 76.1118 87.9951 75.902 87.9375C75.6913 87.884 75.482 87.8308 75.2739 87.778C74.4409 87.5698 73.6333 87.3167 72.8456 87.0865C71.3978 86.6576 71.5305 86.2268 73.2938 86.0909C73.6059 86.0685 73.92 86.0459 74.2358 86.0231C74.5511 86.008 74.8643 86.0262 75.1811 86.0277C75.4974 86.0344 75.815 86.041 76.1338 86.0478C76.4518 86.065 76.771 86.0823 77.0903 86.1072C77.7291 86.1595 78.3704 86.212 79.0144 86.2647C79.6577 86.3214 80.3034 86.3747 80.9422 86.4743C81.9948 86.6216 83.0571 86.8027 84.12 86.9997C85.176 87.2344 86.2359 87.4698 87.2893 87.7039L87.3193 87.6585Z" fill="black" />
                    </svg>
                </div>
                <div className="-mt-32 lg:-mt-0 flex justify-center lg:flex-col lg:justify-end lg:w-fit lg:ml-auto lg:gap-10 max-lg:w-full">
                    <div className="relative max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
                        <ProcessStep
                            number="2"
                            title="Conceptualization"
                            description="Developing concepts for ad creatives, including messaging, visuals, and formats, that effectively communicate your value proposition and resonates with your target audience."
                        />
                        {/* {screenSize.width! >= 1024 ? ( */}
                            <div className="max-lg:hidden process-phones absolute top-[69%] -left-1/2 lg:-translate-x-[30%] xl:-translate-x-[60%] flex max-lg:-translate-x-0 max-lg:relative max-lg:top-36 max-lg:justify-center max-lg:left-0">
                                <div className="flex phone-process-1 -mx-12 w-[200px] overflow-hidden grow-0 shrink-0 justify-center">
                                    <div>
                                        <div className="relative h-[420px] w-[216px] scale-[70%]">
                                            <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                            />
                                            <video muted loop autoPlay playsInline
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                            >
                                                <source src="https://cdn.vitalsocials.co/creators/niha.mp4" type="video/mp4" className="z-0" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="phone-process-3 w-[200px] overflow-hidden grow-0 shrink-0 justify-center flex -mx-12">
                                    <div>
                                        <div className="relative h-[420px] w-[216px] scale-[70%]">
                                            <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                            />
                                            <video muted loop autoPlay width={800} playsInline
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                            >
                                                <source src="https://cdn.vitalsocials.co/creators/debby.mp4" width={800} type="video/mp4" className="z-0" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* ) : ( */}
                            <div className="lg:hidden process-phones2 absolute top-[50%] -right-[90%] ps:-translate-x-[25rem] lg:-translate-x-[10rem] flex max-lg:-translate-x-0 max-lg:relative max-lg:top-36 max-lg:flex max-lg:justify-center max-lg:right-0">
                                <div className="phone-process-1 w-[200px] overflow-hidden grow-0 shrink-0 justify-center lg:flex -mx-12">
                                    <div>
                                        <div className="relative h-[420px] w-[216px] scale-[70%]">
                                            <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                            />
                                            <video muted loop autoPlay playsInline
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                            >
                                                <source src="https://cdn.vitalsocials.co/creators/xeo.mp4" type="video/mp4" className="z-0" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex phone-process-3 w-[200px] overflow-hidden grow-0 shrink-0 justify-center -mx-12">
                                    <div>
                                        <div className="relative h-[420px] w-[216px] scale-[70%]">
                                            <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                            />
                                            <video muted loop autoPlay playsInline
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                            >
                                                <source src="https://cdn.vitalsocials.co/creators/yosmi.mp4" type="video/mp4" className="z-0" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* )} */}
                    </div>
                    <svg className="hidden lg:block relative left-20 lg:left-2" width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.6045 99.9315L43.9981 96.8823C44.9013 96.3804 45.7893 95.8529 46.677 95.3242L49.3427 93.7401C50.2823 93.1755 51.2339 92.6245 52.1654 92.042C53.095 91.4566 54.0185 90.8635 54.9359 90.2629C56.1551 89.4565 57.3812 88.6604 58.5932 87.8437L62.2047 85.3573C64.626 83.7196 66.9843 81.9923 69.3617 80.2932L71.1411 79.0137L72.8981 77.7035L76.4143 75.0865L77.293 74.4319L78.1602 73.7619L79.8955 72.4232L83.3705 69.7511L87.5944 66.3892C88.2971 65.8273 89.0073 65.2745 89.7045 64.7056L91.7865 62.9874C93.1712 61.838 94.572 60.7074 95.9455 59.5442L100.048 56.0338C105.482 51.3113 110.838 46.4937 116.009 41.48C116.796 40.7314 117.603 39.9958 118.416 39.2701C119.22 38.5349 120.019 37.8038 120.814 37.0768C122.337 35.6923 123.497 34.9654 124.36 34.6533C125.617 34.1974 125.195 35.4793 123.248 37.6803C122.631 38.3757 121.968 39.0863 121.289 39.7909C120.946 40.1405 120.602 40.4916 120.26 40.841C119.906 41.1792 119.555 41.5158 119.208 41.8475C117.606 43.3684 116.005 44.8881 114.405 46.4067C112.782 47.902 111.169 49.4053 109.566 50.9167C108.77 51.6798 107.945 52.4103 107.136 53.1581L104.707 55.3993C103.103 56.9125 101.452 58.3716 99.8274 59.8629C98.9275 60.6822 98.0222 61.5342 97.0986 62.3521C96.1667 63.1601 95.2285 63.9483 94.2901 64.6713C91.3134 67.0058 88.3161 69.3283 85.3561 71.7023L80.8477 75.1754C80.093 75.7495 79.3455 76.3329 78.5815 76.8938L76.2767 78.5562L72.849 81.0274C71.6964 81.8393 70.5431 82.6517 69.389 83.4645L65.924 85.8984C64.7522 86.685 63.5809 87.4713 62.4101 88.2571C61.3619 88.9513 60.3229 89.6587 59.2669 90.3406L56.088 92.3682L52.9068 94.3906L49.6884 96.3529L46.4701 98.314L43.2154 100.214L39.9604 102.112C38.8731 102.741 37.7604 103.325 36.662 103.934C35.7829 104.415 34.9113 104.878 34.0473 105.322C33.6139 105.541 33.1845 105.758 32.759 105.972C32.328 106.176 31.8969 106.37 31.4702 106.561C29.7625 107.325 28.0984 107.995 26.502 108.564C25.0391 109.097 24.9296 108.669 26.375 107.587C26.6316 107.398 26.8898 107.207 27.1494 107.015C27.4113 106.828 27.6848 106.659 27.9544 106.48L29.5958 105.421C30.7025 104.723 31.8206 104.018 32.9358 103.315C34.7713 102.164 36.7094 101.078 38.6113 99.9818C38.6091 99.9654 38.6071 99.9504 38.6045 99.9315Z" fill="black" />
                        <path d="M54.6837 80.5557C52.2819 83.8294 49.7082 86.9735 46.9736 89.9748C46.2403 90.76 45.506 91.5462 44.7705 92.3337C44.0166 93.1009 43.2686 93.8727 42.5341 94.6539C39.3557 97.941 36.0124 101.054 32.5702 104.033C29.1242 107.009 25.5909 109.865 22.0209 112.662L20.609 109.907C21.1502 109.737 21.7029 109.606 22.2509 109.458L23.0746 109.243C23.2116 109.206 23.3497 109.173 23.4858 109.133C23.6285 109.115 23.7658 109.079 23.9061 109.053C24.1843 108.994 24.4665 108.948 24.7415 108.877L25.5658 108.663C26.1147 108.518 26.6592 108.358 27.2062 108.206C33.9077 106.308 40.5752 104.291 47.2599 102.331C50.5987 101.339 53.9466 100.377 57.2938 99.4125L67.3347 96.5182C69.354 95.9358 71.4165 95.4283 73.4338 94.9309C75.3662 94.4559 76.6799 94.3625 77.5469 94.483C78.8091 94.6577 77.8431 95.5233 75.1803 96.4633C73.4953 97.0574 71.6277 97.6185 69.8512 98.1164C65.7608 99.2643 61.6877 100.451 57.6319 101.677C55.6034 102.29 53.5788 102.915 51.5581 103.55C49.5348 104.178 47.5146 104.816 45.4977 105.465C43.2712 106.181 40.9644 106.961 38.7594 107.526C32.9395 109.042 27.143 110.752 21.4524 112.769C21.1407 112.879 20.7998 112.875 20.4907 112.758C20.1816 112.64 19.9243 112.416 19.7647 112.127C19.6052 111.837 19.5537 111.5 19.6196 111.176C19.6854 110.852 19.8643 110.562 20.1243 110.357L20.1901 110.306C21.1784 109.532 22.1702 108.764 23.1655 108.004C27.4388 104.718 31.5716 101.226 35.5606 97.6274C39.1272 94.4371 42.5034 91.04 45.6717 87.4538C48.8262 83.8561 51.7334 80.0487 54.3733 76.058C55.4066 74.4504 56.4747 72.9289 57.4874 71.4533C57.7455 71.0875 58.0052 70.7278 58.2666 70.3743C58.3995 70.1986 58.5316 70.0241 58.663 69.8506C58.7909 69.6748 58.918 69.5002 59.0443 69.3266C59.5468 68.6304 60.0816 67.9744 60.5878 67.3285C61.5235 66.1433 61.8743 66.4265 61.3458 68.1142C61.2508 68.4124 61.1552 68.7124 61.0591 69.0141C60.9562 69.3125 60.8229 69.5965 60.7039 69.8901C60.5803 70.1813 60.4563 70.4738 60.3316 70.7673C60.1976 71.0562 60.063 71.3462 59.9214 71.6334C59.6357 72.2071 59.3489 72.7832 59.0609 73.3616C58.7694 73.9379 58.4803 74.5176 58.1506 75.0737C57.6231 75.9965 57.0606 76.9157 56.4831 77.8295C55.8731 78.723 55.2611 79.6197 54.6527 80.5109L54.6837 80.5557Z" fill="black" />
                    </svg>
                </div>
                <div className="relative -mt-32 lg:-mt-0 lg:-top-24 lg:mr-96 xl:mr-56 step3">
                    <ProcessStep
                        number="3"
                        title="Creation"
                        description="Producing high-quality ad creatives which include copywriting, video production, and revisions, according to the approved concepts."
                    />
                    {screenSize.width! >= 1024 && (
                        <div className="max-lg:hidden process-phones2 absolute top-[50%] -right-[90%] ps:-translate-x-[25rem] lg:-translate-x-[10rem] flex max-lg:-translate-x-0 max-lg:relative max-lg:top-36 max-lg:justify-center max-lg:right-0">
                            <div className="phone-process-1 w-[200px] overflow-hidden grow-0 shrink-0 justify-center lg:flex -mx-12">
                                <div>
                                    <div className="relative h-[420px] w-[216px] scale-[70%]">
                                        <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                            className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                        />
                                        <video muted loop autoPlay playsInline
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                        >
                                            <source src="https://cdn.vitalsocials.co/creators/xeo.mp4" type="video/mp4" className="z-0" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="flex phone-process-3 w-[200px] overflow-hidden grow-0 shrink-0 justify-center -mx-12">
                                <div>
                                    <div className="relative h-[420px] w-[216px] scale-[70%]">
                                        <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                            className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                        />
                                        <video muted loop autoPlay playsInline
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                        >
                                            <source src="https://cdn.vitalsocials.co/creators/yosmi.mp4" type="video/mp4" className="z-0" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="phone-process-3 w-[200px] overflow-hidden grow-0 shrink-0 justify-center hidden lg:flex">
                                    <div>
                                        <div className="relative h-[420px] w-[216px] scale-[70%]">
                                            <Image src="https://cdn.vitalsocials.co/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                                                className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none h-[120%]"
                                            />
                                            <video muted loop autoPlay playsInline
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                                            >
                                                <source src="https://cdn.vitalsocials.co/creators/ericka_foldie.mp4" type="video/mp4" className="z-0" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}