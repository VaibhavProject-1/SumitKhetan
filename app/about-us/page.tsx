'use client';

import Image from 'next/image';
import about1 from '../../public/images/about1.png'; // Ensure the correct import path

export default function AboutUs() {
  return (
    <main className="overflow-hidden bg-[#f8f4f4]">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
      <div className="relative h-[80vh]">
        <div className="h-full w-full relative">
          <Image
            src={about1}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Add a dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,16,16,0.65)] to-[rgba(16,16,16,0.2)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-semibold text-white sm:text-4xl py-5 sn:pb-0 md:text-6xl">About Us</h1>
          <p className="py-4 text-white w-[400px] sm:w-[550px] jost-uniquifier text-[1rem]">A company that was founded by Sumit Khetan, who embarked his journey...</p>
        </div>
      </div>

      <div className="bg-[#f8f4f4] max-w-[1140px] mx-auto mb-[100px]">
        <h1 id="founders" className="pt-10 pl-[10px] text-[70px] tracking-[-2.8px] text-black text-center sm:text-left">Founders</h1>
        <div className="mt-[100px]">
          <div className='w-full sm:flex'>
            <div className="w-[100%] sm:w-[41%] mx-auto px-[30px] sm:px-2">
              <div className="relative">
                <Image
                  src='https://via.placeholder.com/400'
                  alt='Image'
                  width={400}
                  height={400}
                  className='w-full h-full'
                />
              </div>
            </div>
            <div className="sm:pr-[55px] pl-[30px] pr-[30px] sm:pl-[60px] mx-auto w-[100%] mt-[50px] sm:mt-0 sm:w-[59%]">
              <h2 className='text-[40px] leading-[50px] text-black'>Sumit Khetan,</h2>
              <h3 className='pb-[10px] text-[24px] leading-[50px] text-black'>Chairman & Managing Director</h3>
              <p className="tracking-[-0.56px] text-justify  font-regular text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div id="celebrities" className='w-full flex flex-col mt-[100px] md:flex-row'>
            <div className="mx-auto w-[100%] sm:w-[41%] px-[30px] sm:px-2 order-1 md:order-2">
              <div className="relative">
                <Image
                  src='https://via.placeholder.com/400'
                  alt='Image'
                  width={400}
                  height={400}
                  className='w-full h-full'
                />
              </div>
            </div>
            <div className="w-[100%] sm:w-[59%] mx-auto pl-[30px] pr-[30px] sm:pr-[55px] sm:pl-[60px] order-2 md:order-1">
              <h2 className='text-[40px] leading-[50px] mt-[50px] sm:mt-0 text-black'>Celebrities</h2>
              <p className="tracking-[-0.56px] text-justify text-black font-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <h1 id="testimonials" className="pt-10 pl-[10px] text-[70px] tracking-[-2.8px] text-black text-center sm:text-left">Testimonials</h1>
        <div className="mt-[100px]">
          <div className="overflow-x-scroll flex space-x-8 custom-scrollbar">
            <div className="min-w-[300px] bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
              <Image
                src='https://via.placeholder.com/100'
                alt='Testimonial Image'
                width={100}
                height={100}
                className='rounded-full mb-4'
              />
              <p className="text-black text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3 className="pt-4 text-black font-semibold">- Testimonial 1</h3>
            </div>
            <div className="min-w-[300px] bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
              <Image
                src='https://via.placeholder.com/100'
                alt='Testimonial Image'
                width={100}
                height={100}
                className='rounded-full mb-4'
              />
              <p className="text-black text-justify">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 className="pt-4 text-black font-semibold">- Testimonial 2</h3>
            </div>
            <div className="min-w-[300px] bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
              <Image
                src='https://via.placeholder.com/100'
                alt='Testimonial Image'
                width={100}
                height={100}
                className='rounded-full mb-4'
              />
              <p className="text-black text-justify">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <h3 className="pt-4 text-black font-semibold">- Testimonial 3</h3>
            </div>
            <div className="min-w-[300px] bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
              <Image
                src='https://via.placeholder.com/100'
                alt='Testimonial Image'
                width={100}
                height={100}
                className='rounded-full mb-4'
              />
              <p className="text-black text-justify">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h3 className="pt-4 text-black font-semibold">- Testimonial 4</h3>
            </div>
            <div className="min-w-[300px] bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
              <Image
                src='https://via.placeholder.com/100'
                alt='Testimonial Image'
                width={100}
                height={100}
                className='rounded-full mb-4'
              />
              <p className="text-black text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3 className="pt-4 text-black font-semibold">- Testimonial 5</h3>
            </div>
            <div className="min-w-[300px] bg-white p-6 shadow-md rounded-lg flex flex-col items-center">
              <Image
                src='https://via.placeholder.com/100'
                alt='Testimonial Image'
                width={100}
                height={100}
                className='rounded-full mb-4'
              />
              <p className="text-black text-justify">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 className="pt-4 text-black font-semibold">- Testimonial 6</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
