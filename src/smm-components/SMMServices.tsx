import { Title } from '@/components/general/Title'
import { eliteFeaturesSMM, premiumFeaturesSMM, standardFeaturesSMM } from '@/constants/constants'
import React from 'react'

const SMMServices = () => {
    return (
        <section className='mt-10 md:mt-12 lg:mt-14 px-6 md:px-8 lg:px-12 xl:px-20 w-fit mx-auto'>
            <hr className='h-4 w-full border-[#eae4dc]' />
            <div className='w-fit pt-7 rounded-t-3xl mx-auto'>
                <Title>Social Media Management Services</Title>
            </div>
            <div className='mt-10 sm:pb-8 sm:w-fit rounded-3xl'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <div className='bg-white flex flex-col gap-4 rounded-2xl p-6 max-w-[420px]'>
                        <div className='flex gap-3 items-center mx-auto'>
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7493 5.65279C17.1439 4.76766 17.3412 4.32509 17.6159 4.18881C17.8545 4.0704 18.1347 4.0704 18.3733 4.18881C18.648 4.32509 18.8453 4.76766 19.2399 5.65279L22.3824 12.703C22.4992 12.9646 22.5574 13.0955 22.6478 13.1956C22.7275 13.2843 22.8252 13.3552 22.9341 13.4037C23.0573 13.4586 23.1998 13.4737 23.4847 13.5037L31.1609 14.3139C32.1247 14.4156 32.6064 14.4665 32.821 14.6856C33.0073 14.876 33.0938 15.1425 33.055 15.406C33.0103 15.7094 32.6504 16.0337 31.9306 16.6825L26.1964 21.85C25.9837 22.0417 25.8772 22.1376 25.8099 22.2544C25.7503 22.3578 25.7129 22.4725 25.7005 22.5911C25.6864 22.7252 25.716 22.8653 25.7755 23.1457L27.3771 30.6965C27.5782 31.6445 27.6787 32.1185 27.5366 32.3901C27.4131 32.6263 27.1864 32.791 26.9238 32.8354C26.6215 32.8866 26.2017 32.6446 25.3622 32.1604L18.6758 28.3038C18.4276 28.1606 18.3036 28.0892 18.1717 28.0611C18.0549 28.0364 17.9343 28.0364 17.8175 28.0611C17.6856 28.0892 17.5616 28.1606 17.3134 28.3038L10.627 32.1604C9.78756 32.6446 9.36783 32.8866 9.06549 32.8354C8.80286 32.791 8.57613 32.6263 8.45268 32.3901C8.31056 32.1185 8.41109 31.6445 8.61217 30.6965L10.2137 23.1457C10.2732 22.8653 10.3029 22.7252 10.2888 22.5911C10.2763 22.4725 10.239 22.3578 10.1794 22.2544C10.112 22.1376 10.0055 22.0417 9.79274 21.85L4.05874 16.6825C3.33887 16.0337 2.97893 15.7094 2.93417 15.406C2.89532 15.1425 2.98191 14.876 3.16825 14.6856C3.38277 14.4665 3.86463 14.4156 4.82836 14.3139L12.5046 13.5037C12.7895 13.4737 12.9319 13.4586 13.0551 13.4037C13.1641 13.3552 13.2617 13.2843 13.3415 13.1956C13.4318 13.0955 13.4901 12.9646 13.6068 12.703L16.7493 5.65279Z" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h1 className='font-semibold text-[32px]'>Standard</h1>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            { standardFeaturesSMM.map((feature, i) => (
                                <li className='flex items-center gap-3' key={i}>
                                    <svg className='shrink-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33325 10.5093L7.43582 14.5833L16.6666 5.41667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <div>{ feature }</div>
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className='bg-white flex flex-col gap-4 rounded-2xl p-6 max-w-[420px]'>
                        <div className='flex gap-3 items-center mx-auto'>
                            <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.0806 10.1934L29.5005 1.13679C29.2174 0.783019 28.7929 0.5 28.2976 0.5H8.06177C7.56649 0.5 7.14196 0.712264 6.85894 1.13679L0.278753 10.1934C-0.145775 10.7594 -0.0750203 11.5377 0.420263 12.033L17.1184 30.0047C17.4014 30.2877 17.7552 30.5 18.1797 30.5C18.6042 30.5 18.958 30.3585 19.241 30.0047L35.9391 12.033C36.4344 11.5377 36.5052 10.7594 36.0806 10.1934ZM11.1042 12.5283L14.642 23.0708L4.87781 12.5283H11.1042ZM19.524 3.4717L22.0005 9.62736H14.3589L16.8354 3.4717H19.524ZM22.142 12.5283L18.1797 24.4151L14.2174 12.5283H22.142ZM25.2552 12.5283H31.4816L21.7174 23.0708L25.2552 12.5283ZM31.9769 9.5566H25.1844L22.708 3.4717H27.5193L31.9769 9.5566ZM8.76932 3.4717H13.5806L11.1042 9.62736H4.38253L8.76932 3.4717Z" fill="black"/>
                            </svg>
                            <h1 className='font-semibold text-[32px]'>Premium</h1>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            { premiumFeaturesSMM.map((feature, i) => (
                                <li className='flex items-center gap-3' key={i}>
                                    <svg className='shrink-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33325 10.5093L7.43582 14.5833L16.6666 5.41667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <div>{ feature }</div>
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className='bg-white flex flex-col gap-4 rounded-2xl p-6 max-w-[420px] min-h-[530px]'>
                        <div className='flex gap-3 items-center mx-auto'>
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 5.5C3.33946 5.5 2.5 6.33946 2.5 7.375C2.5 8.41054 3.33946 9.25 4.375 9.25H5V5.5H4.375ZM7.5 5.5V10.5C7.5 14.6421 10.8579 18 15 18C19.1421 18 22.5 14.6421 22.5 10.5V5.5H7.5ZM25 5.5V9.25H25.625C26.6605 9.25 27.5 8.41054 27.5 7.375C27.5 6.33946 26.6605 5.5 25.625 5.5H25ZM24.9226 11.75H25.625C28.0412 11.75 30 9.79125 30 7.375C30 4.95875 28.0412 3 25.625 3H23.75H6.25H4.375C1.95875 3 0 4.95875 0 7.375C0 9.79125 1.95875 11.75 4.375 11.75H5.07736C5.64143 16.2734 9.2266 19.8586 13.75 20.4226V22.3992L8.31152 26.75H7.5C6.80965 26.75 6.25 27.3096 6.25 28C6.25 28.6904 6.80965 29.25 7.5 29.25H8.75H21.25H22.5C23.1904 29.25 23.75 28.6904 23.75 28C23.75 27.3096 23.1904 26.75 22.5 26.75H21.6885L16.25 22.3992V20.4226C20.7734 19.8586 24.3586 16.2734 24.9226 11.75ZM15 24.6007L12.3135 26.75H17.6865L15 24.6007Z" fill="black"/>
                            </svg>
                            <h1 className='font-semibold text-[32px]'>Elite</h1>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            { eliteFeaturesSMM.map((feature, i) => (
                                <li className='flex items-center gap-3' key={i}>
                                    <svg className='shrink-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33325 10.5093L7.43582 14.5833L16.6666 5.41667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <div>{ feature }</div>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='h-4 mt-4 w-full border-[#eae4dc]' />
        </section>
    )
}

export default SMMServices