import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapPin, FaClock, FaWhatsapp, FaAt } from "react-icons/fa";
import logo from '../../public/logo/riveria.png';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="text-white bg-[#101010]">
            <h2 className="text-center text-xl sm:text-4xl pt-20 px-2 sm:px-0">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-[#ababab] text-center mt-2 px-6 sm:px-0">Contact us today to discover how we transform your online presence.</p>
            <div className="my-6">
                <a href="/contact-us">
                <button className='mx-auto block relative bg-[#222] uppercase text-[#909090] font-semibold py-[17px] px-[35px] tracking-[1.98px] mb-[70px] hover-border'>Register your interest</button>
                </a>
             
            </div>
            <div className="bg-[#101010] pb-20 md:pl-40  flex flex-col md:flex-row">
                {/* Left Column */}
                <div className="p-4 w-full md:w-60 sm:h-60 rounded-xl mb-0 sm:mb-8">
                    {/* <div className='flex items-center mx-auto'>
                        <Link href='/' className='flex justify-center items-center'>
                            <Image src={logo} alt='logo' width={180} height={16} className='object-contain' />
                        </Link>
                    </div> */}
                    <div className='items-center mx-auto'>
                        {/* 
                    <Image src={logo} alt='logo' width={200} height={20} className='object-contain' /> */}
                        <h1 className='text-left font-bold text-4xl sm:text-2xl text-white'>
                           Sumit Khetan Entertainment
                        </h1>


                    </div>
                    <div className="text-left font-light">

                        <div className="flex items-center mt-6">
                            <a target='_blank' href="https://www.instagram.com/mrizvi_art/"><FaInstagram className="text-2xl mr-4 jost-uniquifier text-[#ababab]" /></a>
                            <FaLinkedin className="text-2xl mr-4 jost-uniquifier text-[#ababab]" />
                            <FaFacebook className="text-2xl mr-4 jost-uniquifier text-[#ababab]" />



                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-wrap sm:flex-no-wrap p-4 sm:pl-10">
                    <div className="mr-8">

                        <ul className="list-none p-0 m-0">
                            <li className="mb-1 pb-0 pt-4 nav jost-uniquifier text-[#ababab] "><a href="/about-us   ">About</a></li>
                            <li className="mb-1 pb-0 pt-4 nav jost-uniquifier text-[#ababab]"><a href="/Wedding">Weddings</a></li>
                            <li className="mb-1 pb-0 pt-4 nav jost-uniquifier text-[#ababab]"><a href="/Corporates">Corporate</a></li>
                            <li className="mb-1 pb-0 pt-4 nav jost-uniquifier text-[#ababab]"><a href="/retail-space">Retail Space</a></li>
                            <li className="mb-1 pb-0 pt-4 nav jost-uniquifier text-[#ababab]"><a href="/sustainability">Sustainability</a></li>
                            <li className="mb-1 pb-0 pt-4 nav jost-uniquifier text-[#ababab]"><a href="/Other">Get in Touch</a></li>
                        </ul>
                    </div>


                </div>

                <div className="flex flex-wrap sm:flex-no-wrap p-4 sm:pl-10">
                    <div className="mr-8 sm:pl-72">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 navf">Contact Info</h2>
                        <ul className="list-none pt-2 m-0">

                            <li className="flex items-center my-4">
                                T:
                                <a href="tel:+918169021830" className="jost-uniquifier text-[#ababab] ml-2">+91 9833951778 / 9</a>
                            </li>
                            <li className="flex items-center my-4 text-white">
                                M:
                                <a href="mailto:emptycanvas110@gmail.com" className="jost-uniquifier text-[#ababab] ml-2">+91 000000000</a>
                            </li>
                            <li className="flex items-center my-4 text-white">
                                E:
                                <a href="mailto:emptycanvas110@gmail.com" className="jost-uniquifier text-[#ababab] ml-2">sumit@sumitkhetan.com</a>
                            </li>


                        </ul>
                    </div>

                </div>

            </div>

            <div className="text-center absolute bottom-0 w-full pt-4 pb-4 justify-center items-center">

                <p className="text-sm jost-uniquifier text-[#ababab]">
                    &copy; 2024 Sumit Khetan Entertainment. All Rights Reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
