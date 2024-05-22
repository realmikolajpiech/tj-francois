import React from 'react'
import Manager from './Manager'

const ManagersSection = () => {
    return (
        <section className='px-6 md:px-8 lg:px-12 xl:px-20 mt-10'>
            <div className='flex flex-wrap gap-4 md:gap-6'>
                <Manager name='Alexa Ginsberg' url='/managers/Alexa Ginsberg Social Media.pdf' />
                <Manager name='Shianne' url='/managers/Shianne Portfolio + Price Kit.pdf' />
            </div>
        </section>
    )
}

export default ManagersSection