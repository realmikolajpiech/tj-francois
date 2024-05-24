import React from 'react'
import Manager from './Manager'

const ManagersSection = () => {
    return (
        <section className='px-6 md:px-8 lg:px-12 xl:px-20 mt-10'>
            <div className='flex flex-wrap gap-4 md:gap-6'>
                <Manager name='Alexa' />
                <Manager name='Shianne' />
                <Manager name='Xeo' />
                <Manager name='Jayne' />
                <Manager name='Jasmin' />
                <Manager name='Sierra' />
                <Manager name='Frances' />
                <Manager name='Abby' />
                <Manager name='Diane + Wayne' />
                <Manager name='Tommi' />
                <Manager name='Yosmi' />
                <Manager name='Niha' />
                <Manager name='Tatiana' />
                <Manager name='Angie' />
            </div>
        </section>
    )
}

export default ManagersSection