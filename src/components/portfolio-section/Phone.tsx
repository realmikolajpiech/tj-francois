'use client';

import Image from 'next/image'
import React, { Suspense } from 'react'

type PhoneProps = {
    imgOrVid: 'image' | 'video',
    img?: string,
    video?: string,
    pauseCarousel: () => void,
    resumeCarousel: () => void,
}

const Phone = ({ imgOrVid, img, video, pauseCarousel, resumeCarousel }: PhoneProps) => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
        <div className="phone w-[200px] overflow-hidden grow-0 shrink-0 flex justify-center -ml-3 h-fit" onMouseEnter={() => { pauseCarousel() }} onMouseLeave={() => { resumeCarousel() }}>
            <div>
                <div className="relative h-[420px] w-[216px]">
                    <Image src="/portfolio/phone-mockup.png" width={250} height={250} alt="Phone"
                        className="w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[120%]"
                    />
                    {imgOrVid === 'image' ? (
                        <Image src={img!} width={191} height={385} alt="Image"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                        />
                      ) : (
                            <video controls muted loop autoPlay
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[25px] w-[191px] h-[385px] object-cover"
                            >
                                <source src={video!} type="video/mp4" className="z-0" />
                                Your browser does not support the video tag.
                            </video>
                    )}
                </div>
            </div>
        </div>
    </Suspense>
  )
}

export default Phone