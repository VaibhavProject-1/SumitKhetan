import React from 'react';
import Engagement from './Engagement';
import HaldiMehendiCarnival from './HaldiMehendiCarnival';
import Jaimala from './Jaimala';
import Sangeet from './sangeet';
import Image from 'next/image';

const Wedding: React.FC = () => {
    return (
        <main className="overflow-hidden">
            <div className='bg-[#ede8e0] relative'>
                <section className="relative flex flex-col items-center justify-center h-[50vh]">
                    <h1 className='absolute inset-0 flex items-center justify-center tracking-[-13.6px] text-[100px] sm:text-[230px] font-medium text-[#242424] opacity-[0.04]'>
                        Weddings
                    </h1>
                    <div className="z-10">
                        <h1 className="text-[40px] sm:text-[70px] tracking-[-2.8px] text-black">Weddings</h1>
                    </div>
                </section>
                <div className="w-full">
                    <Image
                        src='/images/wedding1.png'
                        alt='Wedding'
                        width={1920}
                        height={600}
                        className='w-full h-full'
                        style={{
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        }}
                    />
                </div>
            </div>

            <section className="flex justify-center bg-[#ede8e0] py-10">
                <div className="w-[90%] md:w-[70%] lg:w-[60%] text-center">
                    <p className="text-lg md:text-xl text-black font-regular tracking-[-0.56px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                    </p>
                </div>
            </section>

            <Engagement />
            <HaldiMehendiCarnival />
            <Jaimala />
            <Sangeet />
        </main>
    );
}

export default Wedding;
