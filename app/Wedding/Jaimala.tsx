'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Jaimala: React.FC = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        
        const imageElement = imageRef.current;
        const textElement = textRef.current;

        if (imageElement) {
            observer.observe(imageElement);
        }
        
        if (textElement) {
            observer.observe(textElement);
        }

        return () => {
            if (imageElement) observer.unobserve(imageElement);
            if (textElement) observer.unobserve(textElement);
        };
    }, []);

    return (
        <main className="overflow-hidden">
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(2.5rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.7s ease-in-out forwards;
                }

                .red-box {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    width: calc(100% - 20px);
                    height: calc(100% - 20px);
                    background-color: #ff5555; /* Bright red color */
                    z-index: -1;
                    border-radius: 10px;
                }

                .image-container {
                    position: relative;
                    display: inline-block;
                }
            `}</style>
            <div className='bg-[#f6f4f1]'>
                <section id="jaimala" className="relative flex mb-[50px] pt-20 sm:pt-32 items-center justify-center">
                    <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[40%] tracking-[-8px] sm:tracking-[-10px] text-[30px] sm:text-[120px] font-medium text-[#242424] opacity-[0.04]'>
                        Jaimala
                    </h1>
                    <div className="z-10 sm:w-[550px] text-center text-black">
                        <h1 className="text-[40px] sm:text-[70px] tracking-[-2.8px] text-black relative">
                            Jaimala
                        </h1>
                    </div>
                </section>
                <div className="w-full flex flex-col-reverse sm:flex-row py-[40px] px-[30px] sm:py-[60px] sm:px-[60px]">
                    <div
                        ref={textRef}
                        className="mx-auto sm:pr-[30px] w-full sm:w-[50%] opacity-0"
                        style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
                    >
                        <h4 className="text-[30px] mt-0 mb-[0.5rem] font-medium text-black">Jaimala</h4>
                        <p className="font-regular tracking-[-0.56px] text-justify text-black">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div
                        ref={imageRef}
                        className="image-container flex-shrink-0 w-full sm:w-[50%] mb-8 sm:mb-0 sm:pl-[30px] opacity-0"
                        style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}
                    >
                        <Image
                            src='/images/wedding2.jpeg'
                            alt='Jaimala'
                            width={400}
                            height={400}
                            className='w-full h-full'
                            style={{
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                borderRadius: '10px'
                            }}
                        />
                        <div className="red-box"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Jaimala;
