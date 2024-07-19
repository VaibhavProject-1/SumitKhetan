'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isContactPage = pathname === '/contact-us';
    const isOurHomesPage = pathname === '/our-homes';
    const isRetailSpace = pathname === '/retail-space';
    const isHospitality = pathname === '/hospitality';
    const isHomePage = pathname === '/';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', changeColor);

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <header className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${isContactPage || isOurHomesPage || isRetailSpace || isHospitality ? 'bg-[#f6f4f1]' : ''}`}>
            <div className={`${isScrolled ? 'bg-transparent' : ''}`}>
                <nav className={`flex sm:py-14 items-center justify-between text-white sm:pl-14 sm:pr-40`}>
                    <div className='block z-10 cursor-pointer' onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 sm:static absolute top-12 left-4" style={{ color: 'white' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <div className='block z-10 absolute sm:static top-12 left-4' onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10" style={{ color: isContactPage || isOurHomesPage || isRetailSpace || isHospitality ? 'black' : 'white', transform: 'rotate(90deg)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                            </div>
                        )}
                    </div>

                    <div className={`fixed inset-0 flex justify-center items-center bg-black text-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
                        <ul className='flex flex-col sm:flex-row text-4xl w-full h-full'>
                            <li className={`relative flex-1 flex items-center justify-center p-4 hover:text-gray-500 text-white sm:border-r border-gray-700`}>
                                <Link href='/about-us'>About</Link>
                            </li>
                            <li className={`relative flex-1 flex items-center justify-center p-4 hover:text-gray-500 text-white sm:border-r border-gray-700 group`}>
                                <Link href='/Wedding'>Wedding</Link>
                                <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-full bg-black text-white">
                                    
                                </div>
                            </li>
                            <li className={`relative flex-1 flex items-center justify-center p-4 hover:text-gray-500 text-white sm:border-r border-gray-700`}>
                                <Link href='/Corporates'>Corporates</Link>
                            </li>
                            <li className={`relative flex-1 flex items-center justify-center p-4 hover:text-gray-500 text-white`}>
                                <Link href='/Other'>Other</Link>
                            </li>
                        </ul>
                    </div>

                    {!isHomePage && (
                        <div className={`absolute top-16 right-[20px] z-2 pr-[20px] tracking-[2.12px] uppercase text-[10px] ${isContactPage || isOurHomesPage || isRetailSpace || isHospitality ? 'text-black' : 'text-white'}`}>
                            <Link href='/' className='flex inline'>
                                <span className='pr-[15px] pt-[2px] align-baseline '>Home</span>
                                <span className='align-baseline'>
                                    {isContactPage || isOurHomesPage || isRetailSpace || isHospitality ? <Image src='/images/svgexport-1 (1).svg' width={30} height={5} alt='image' className='align-baseline' /> : <Image src='/images/svgexport-1.svg' width={30} height={5} alt='image' className='align-baseline' />}
                                </span>
                            </Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
