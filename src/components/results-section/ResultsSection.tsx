import React from 'react'
import { Title } from '../general/Title'
import Image from 'next/image'

const ResultsSection = () => {
    return (
        <section className="mt-20 bg-[#F0E6D7] w-full rounded-[48px] md:rounded-[56px] py-8 sm:py-11">
            <Title>We Deliver Results</Title>
            <div className='mt-8 sm:mt-10 px-6 md:px-8 lg:px-12 xl:px-20 max-w-96 sm:max-w-full mx-auto'>
                <div className='sm:hidden r:flex flex w-full flex-wrap gap-2 sm:gap-[10px] justify-center'>
                    <Image src='https://cdn.vitalsocials.co/results/1.png' className='shrink-0 grow-0 self-start w-[240px] md:w-[285px]' alt='Results' width={285} height={425} />
                    <div className='flex flex-col gap-2 sm:gap-[10px]'>
                        <Image src='https://cdn.vitalsocials.co/results/2.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                        <Image src='https://cdn.vitalsocials.co/results/3.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                        <Image src='https://cdn.vitalsocials.co/results/4.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                    </div>
                    <Image src='https://cdn.vitalsocials.co/results/5.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                    <div className='flex flex-col gap-2 sm:gap-[10px]'>
                        <Image src='https://cdn.vitalsocials.co/results/6.png' className='hidden sm:block shrink-0 grow-0 self-start' alt='Results' width={230} height={425} />
                        <Image src='https://cdn.vitalsocials.co/results/7.png' className='hidden sm:block shrink-0 grow-0 self-start' alt='Results' width={230} height={425} />
                    </div>
                    <Image src='https://cdn.vitalsocials.co/results/8.png' className='hidden sm:block shrink-0 grow-0 self-start w-[230px] md:w-[240px]' alt='Results' width={240} height={425} />
                </div>

                <div className='hidden lg:flex r:hidden w-full flex-wrap gap-[10px] justify-center'>
                    <div className='flex flex-col gap-[10px]'>
                        <Image src='https://cdn.vitalsocials.co/results/1.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                        <div className='flex flex-col gap-2 sm:gap-[10px]'>
                            <Image src='https://cdn.vitalsocials.co/results/2.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                            <Image src='https://cdn.vitalsocials.co/results/3.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <Image src='https://cdn.vitalsocials.co/results/8.png' className='shrink-0 grow-0 self-start w-[230px] lg:w-[240px]' alt='Results' width={240} height={425} />
                        <Image src='https://cdn.vitalsocials.co/results/7.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <Image src='https://cdn.vitalsocials.co/results/6.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                        <Image src='https://cdn.vitalsocials.co/results/5.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                        <Image src='https://cdn.vitalsocials.co/results/4.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                    </div>
                </div>

                <div className='hidden sm:flex lg:hidden w-full flex-wrap gap-[10px] justify-center'>
                    <div className='flex flex-col gap-[10px]'>
                        <Image src='https://cdn.vitalsocials.co/results/1.png' className='shrink-0 grow-0 self-start w-[240px] lg:w-[285px]' alt='Results' width={285} height={425} />
                        <div className='flex flex-col gap-2 sm:gap-[10px]'>
                            <Image src='https://cdn.vitalsocials.co/results/2.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                            <Image src='https://cdn.vitalsocials.co/results/3.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                        </div>
                        <Image src='https://cdn.vitalsocials.co/results/5.png' className='shrink-0 grow-0 self-start' alt='Results' width={240} height={425} />
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <Image src='https://cdn.vitalsocials.co/results/8.png' className='shrink-0 grow-0 self-start w-[230px] lg:w-[240px]' alt='Results' width={240} height={425} />
                        <div className='flex flex-col gap-2 sm:gap-[10px]'>
                            <Image src='https://cdn.vitalsocials.co/results/6.png' className='shrink-0 grow-0 self-start' alt='Results' width={230} height={425} />
                            <Image src='https://cdn.vitalsocials.co/results/7.png' className='shrink-0 grow-0 self-start' alt='Results' width={230} height={425} />
                            <Image src='https://cdn.vitalsocials.co/results/4.png' className=' shrink-0 grow-0 self-start' alt='Results' width={230} height={425} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResultsSection