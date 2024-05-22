import React from 'react'
import Manager from './Manager'

const ManagersSection = () => {
    return (
        <section className='px-6 md:px-8 lg:px-12 xl:px-20 mt-10'>
            <div className='flex flex-wrap gap-4 md:gap-6'>
                <Manager name='Alexa Ginsberg' onlyOneUrl={false} portfolioUrl='/managers/Alexa_Ginsberg_portfolio.pdf' packagesUrl='/managers/Alexa_Ginsberg_packages.pdf' />
                <Manager name='Shianne' onlyOneUrl={true} portfolioUrl='/managers/Shianne_portfolio_packages.pdf' />
            </div>
        </section>
    )
}

export default ManagersSection