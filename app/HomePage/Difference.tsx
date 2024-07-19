'use client';

import Image from "next/image";
import { SetStateAction, useState } from 'react';

export default function Difference() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: SetStateAction<number>) => {
        setActiveTab(index);
    };

    const cards = [
        {
            imageUrl: 'url(/images/Capture1.png)',
            title: 'Creativity',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae condimentum nisl, quis convallis sem. Praesent faucibus iaculis sem et euismod.',
        },
        {
            imageUrl: 'url(/images/Cap2.jpeg)',
            title: 'Storytelling',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae condimentum nisl, quis convallis sem. Praesent faucibus iaculis sem et euismod.',
        },
        {
            imageUrl: 'url(/images/Capture3.png)',
            title: 'Uniqueness',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae condimentum nisl, quis convallis sem. Praesent faucibus iaculis sem et euismod.',
        },
        {
            imageUrl: 'url(/images/Capture4.png)',
            title: 'Bollywood expertise',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae condimentum nisl, quis convallis sem. Praesent faucibus iaculis sem et euismod.',
        },
       
    ];

    return (
        <section className="bg-[#f6f4f1] text-black">
            <div className="hidden sm:block">
                <h2 className="text-[24px] sm:text-[70px] pt-20 font-medium text-[#212529] text-center tracking-[-2.8px]">Lorem ipsum dolor</h2>
                <h3 className="font-regular text-[16px] sm:text-[17px] text-center mt-4 mb-8 max-w-[400px] sm:max-w-[600px] mx-auto px-10 sm:px-[1px] jost-uniquifier text-[#242424]">
                    
                </h3>

                <div className="sm:flex text-center sm:text-left cursor-pointer">
                    {cards.map((card, index) => {
                        // Determine border classes based on the index
                        const borderClasses = `border-b border-[#515151] 
                        ${index !== 0 ? 'sm:border-l' : ''} 
                        ${index !== 4 ? 'sm:border-r' : ''}`;

                        return (
                            <div
                                key={index}
                                className={`group relative flex-1 flex flex-col justify-between h-[500px] px-10 sm:px-5 pb-5 pt-10 ${borderClasses}`}
                                style={{ backgroundImage: card.imageUrl, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-[#00000033] via-transparent to-[#00000033]"></div>

                                <div className="absolute inset-0 sm:bg-black opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                                <div className="relative z-10 group-hover:text-white text-white sm:text-black transition-colors duration-300 flex flex-col justify-between h-full">
                                    <h2 className="relative z-20 text-[24px] sm:text-5xl mb-4 text-white sm:text-[#404040] group-hover:text-white transition-colors duration-300 tracking-[-1.98px] text-center">{card.title}</h2>
                                    <p className="relative z-10 jost-uniquifier text-justify mt-4 text-[1rem]">
                                        {card.content}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex sm:hidden px-[15px] py-[100px] overflow-x-hidden">
                <div className="px-[10px] w-full mx-auto">
                    <div className="block">
                        <h1 className="leading-[54px] font-regular tracking-[0.72px] mb-[0.5rem] pt-[10px] text-[47px] text-left">
                            <span className="block">The</span>
                            <span className="block">BelaVida</span>
                            <span className="block">Difference</span>
                        </h1>
                        <p className="jost-uniquifier">
                            Our journey has been built on a deceptively simple philosophy: Build Relationships.
                        </p>
                        <div className="pt-[1rem] flex flex-wrap">
                            <div className="h-max mt-[0.5rem]">
                                <h3 className={`text-[#101010] transition duration-200 ease-in text-[31px] mb-[0.5rem] cursor-pointer ${activeTab === 0 ? 'opacity-100 text-black' : 'opacity-20'}`} onClick={() => handleTabClick(0)}>Quality</h3>
                                <h3 className={`text-[#101010] transition duration-200 ease-in text-[31px] mb-[0.5rem] cursor-pointer ${activeTab === 1 ? 'opacity-100 text-black' : 'opacity-20'}`} onClick={() => handleTabClick(1)}>Locations</h3>
                                <h3 className={`text-[#101010] transition duration-200 ease-in text-[31px] mb-[0.5rem] cursor-pointer ${activeTab === 2 ? 'opacity-100 text-black' : 'opacity-20'}`} onClick={() => handleTabClick(2)}>Sustainability</h3>
                                <h3 className={`text-[#101010] transition duration-200 ease-in text-[31px] mb-[0.5rem] cursor-pointer ${activeTab === 3 ? 'opacity-100 text-black' : 'opacity-20'}`} onClick={() => handleTabClick(3)}>Relationships</h3>
                            </div>
                            <div className={`block text-justify py-[6px] relative w-full transition-opacity duration-300 ${activeTab === 0 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                {/* Content for Quality tab */}
                                <Image src='/images/locations.jpg' alt="image" width={120} height={400} className="max-h-[225px] absolute top-[-226px] right-[0px]" />
                                <p className="text-justify">At Riviera, quality always takes precedence. From selecting the perfect location, to the construction processes we adopt, the materials we use and the specifications we put into our homes, we make no compromises. When you buy a home with Riviera you can rest safe in the knowledge that it is built to only the highest standards.
Locations</p>
                            </div>
                            <div className={`block text-justify py-[6px] relative w-full transition-opacity duration-300 ${activeTab === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                {/* Content for Locations tab */}
                                <Image src='/images/locations.jpg' alt="image" width={120} height={400} className="max-h-[225px] absolute top-[-226px] right-[0px]" />
                                <p className="text-justify">We quality that improve your living experience. Our homes are equipped with the latest technology and designed to enhance your lifestyle.</p>
                            </div>
                            <div className={`block text-justify py-[6px] relative w-full transition-opacity duration-300 ${activeTab === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                {/* Content for Sustainability tab */}
                                <Image src='/images/locations.jpg' alt="image" width={120} height={400} className="max-h-[225px] absolute top-[-226px] right-[0px]" />
                                <p className="text-justify">We have always been committed to conserving energy, and reducing water and waste, be it on our construction sites, in our hotels, offices or the homes that we build. In keeping with our commitment to sustainable luxury and conscious living, our homes typically include features such as rainwater harvesting, waste management, solar panelling, drip irrigation, construction of sewage treatment plants, dual flush WCs and the adoption of STADs systems for recycling of wastewater.
</p>
                            </div>
                            <div className={`block text-justify py-[6px] relative w-full transition-opacity duration-300 ${activeTab === 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                {/* Content for Relationships tab */}
                                <Image src='/images/locations.jpg' alt="image" width={120} height={400} className="max-h-[225px] absolute top-[-226px] right-[0px]" />
                                <p className="text-justify">We quality that improve your living experience. Our homes are equipped with the latest technology and designed to enhance your lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
