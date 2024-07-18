'use client';

import React from 'react'

type ManagerProps = {
    name: string;
}

const Manager = ({ name }: ManagerProps) => {    
    return (
        <div className='bg-white flex flex-col gap-3 rounded-xl overflow-hidden transition mx-auto md:mx-0 w-[320px]'>
            <div className={`${name.split(' ')[0].toLowerCase()} team`}></div>
            <div className='text-center flex flex-col gap-3 pb-4 pt-1'>
                <h1 className='font-medium text-[20px]'>{name}</h1>
            </div>
        </div>
    )
}

export default Manager