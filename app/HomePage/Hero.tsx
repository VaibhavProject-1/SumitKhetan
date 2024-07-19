'use client'
import Image from 'next/image';
import CustomButton from '../Components/Button';
import bg from '../../public/images/DALL·E 2024-07-18 17.09.44 - A group of people dancing energetically in a modern dance studio with large windows and a cityscape view in the background. The dancers are diverse, w.webp';
// import bg2 from '../public/images/hero1m.jpg';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import logo from '../../public/logo/logo-main.png';

// https://img.freepik.com/premium-photo/minimal-living-room-interior-design-black-wall-background_221619-1098.jpg

const Hero = () => {
    const router = useRouter();
    const pageUrl = '/contact';

    const handleButtonClick = () => {
        router.push(pageUrl);
    };

    return (
        <div className="hero relative h-screen">

            <Image
                src={bg}
                alt='Image'
                layout="fill"
                objectFit="cover"
                className=''
            />

            {/* Add a gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to top, #101010 10%, rgba(16, 16, 16, 0.26), rgba(16, 16, 16, 0.8))"
                }}
            ></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <div className='flex items-center mx-auto'>
                    {/*<Image src={logo} alt='logo' width={200} height={20} className='object-contain' />
                     <h1 className='font-bold text-3xl text-white font-butler'>Bela Vida</h1> */}
                </div>

                <p
                    className="font-Brooklyn text-white text-[20px] sm:text-[25px] lg:text-2xl font-bold sm:leading-10 text-center uppercase tracking-wider mt-10 jost-uniquifier animate-fadeInDown px-6 tracking-[15.88px]"
                    
                > 
                    Video 
                    {/* BUILDING RELATIONSHIPS */}
                </p>
            </div>
        </div>
    );
};

export default Hero;
