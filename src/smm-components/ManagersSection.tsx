import React from 'react'
import Manager from './Manager'

const ManagersSection = () => {
    return (
        <section className='px-6 md:px-8 lg:px-12 xl:px-20 mt-10 w-[97%]'>
            <div className='flex flex-col gap-8 md:gap-12'>
                <div className='flex flex-wrap justify-between gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[32px] font-semibold'>The Founders</h1>
                        <div className='flex flex-wrap gap-4 md:gap-6'>
                            <Manager name='TJ' />
                            <Manager name='Stephanie' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[32px] font-semibold'>The Internal Team</h1>
                        <div className='flex flex-wrap gap-4 md:gap-6'>
                            <Manager name='Navi' />
                            <Manager name='Shianne' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[32px] font-semibold'>The Social Media Managers</h1>
                    <div className='flex flex-wrap gap-4 md:gap-6'>
                        <Manager name='Alexa' />
                        <Manager name='Tatiana' />
                        <Manager name='Jayne' />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[32px] font-semibold'>The Creators</h1>
                    <div className='flex flex-wrap gap-4 md:gap-6'>
                        <Manager name='Xeo' />
                        <Manager name='Camila' />
                        <Manager name='Jasmin' />
                        <Manager name='Niha' />
                        <Manager name='Angie' />
                        <Manager name='Abby' />
                        <Manager name='Ana' />
                        <Manager name='Debby' />
                        <Manager name='Diane + Wayne' />
                        <Manager name='Sierra' />
                        <Manager name='Tommi' />
                        <Manager name='Frances' />
                        <Manager name='Yosmi' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManagersSection