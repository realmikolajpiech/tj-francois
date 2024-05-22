'use client';

import Link from 'next/link';
import React from 'react'

type ManagerProps = {
    name: string;
    portfolioUrl: string;
    packagesUrl?: string;
    onlyOneUrl: boolean;
}

const Manager = ({ name, portfolioUrl, packagesUrl='', onlyOneUrl }: ManagerProps) => {    
    return (
        <div className='bg-white flex flex-col gap-3 rounded-xl overflow-hidden transition mx-auto md:mx-0 w-[320px]'>
            <div className={`${name.split(' ')[0].toLowerCase()}`}></div>
            <div className='text-center flex flex-col gap-3 pb-5 pt-1'>
                <h1 className='font-medium text-[20px]'>{name}</h1>
                {onlyOneUrl ? (
                    <Link href={portfolioUrl} target='_blank'><button className='bg-[#73091D] text-white rounded-lg py-2 w-[85%] text-[18px] font-medium hover:opacity-90 transition'>Portfolio / Packages</button></Link>
                ) : (
                    <div className='flex gap-1 justify-center'>
                        <Link href={portfolioUrl} target='_blank'><button className='bg-[#73091D] text-white rounded-lg py-2 px-7 text-[18px] font-medium hover:opacity-90 transition'>Portfolio</button></Link>
                        <Link href={packagesUrl} target='_blank'><button className='bg-[#73091D] text-white rounded-lg py-2 px-7 text-[18px] font-medium hover:opacity-90 transition'>Packages</button></Link>
                    </div>
                ) }
            </div>
        </div>
        // <div className='flex flex-col rounded-lg overflow-hidden'>
        //     <div className={`${name.split(' ')[0].toLowerCase()}`}></div>
        //     <div className='white w-full py-3 bg-white'>
        //         <h1 className='font-bold text-xl text-center'>{name}</h1>
        //         <button className='bg-[#73091D] w-fit text-white rounded-lg px-20 py-2 text-lg font-medium hover:opacity-90 transition'><div className='w-[220px]'>Portfolio / Packages</div></button>
        //     </div>
        //     <div className='w-[200px]'>
        //     </div>
        // </div>
    )
}

export default Manager