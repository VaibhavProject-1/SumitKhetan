'use client';

import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import about1 from '../../public/images/about1.png';
import img1 from '../../public/images/img1.png';
import img3 from '../../public/images/img3.png';
import img4 from '../../public/images/img4.png';

type SectionProps = {
  title: string;
  imgSrc: StaticImageData;
  content: string;
  href: string;
};

const Section: React.FC<SectionProps> = ({ title, imgSrc, content, href }) => {
  const scrollDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetDiv = scrollDivRef.current;

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      if (targetDiv) {
        if (window.innerWidth <= 640) { // Small devices
          if (entries[0].isIntersecting) {
            targetDiv.style.marginLeft = '40px';
          } else {
            targetDiv.style.marginLeft = '200px';
          }
        } else { // Larger devices
          if (entries[0].isIntersecting) {
            targetDiv.style.marginLeft = '-100px';
          } else {
            targetDiv.style.marginLeft = '-200px';
          }
        }
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Adjust this threshold as needed
    });

    if (targetDiv) {
      observer.observe(targetDiv);
    }

    return () => {
      if (targetDiv) {
        observer.unobserve(targetDiv);
      }
    };
  }, []);

  return (
    <section className="bg-[#ede8e0] overflow-hidden">
      <div className="pb-[100px] sm:pb-[350px] pt-10 sm:pt-20 bg-[#f6f4f1] px-[10px] sm:px-[100px]">
        <h2 className='text-[34px] sm:text-[70px] pt-10 sm:pt-20 font-bold text-[#212529]'>{title}</h2>
      </div>
      <div className="flex justify-center transform translate-y-[-10%] sm:translate-y-[-50%]">
        <div className="sm:flex">
          <div className="relative w-[85%] sm:w-[50%] ml-4 sm:ml-0">
            <Image src={imgSrc} alt='image' width={800} height={600} className='w-full h-full' />
          </div>
          <div ref={scrollDivRef} id="scrollDiv" className="relative bg-[#f6f4f1] max-w-[511px] sm:left-[-100px] w-[85%] sm:w-[50%] z-2 my-auto py-10 px-10 ml-[200px] sm:ml-0 mt-[-20%] sm:mt-auto transition-all duration-1000">
            <h3 className='text-[20px] sm:text-2xl mb-4 font-medium text-black'>{title}</h3>
            <p className='jost-uniquifier text-black w-full text-justify'>{content}</p>
            <div className="flex justify-end">
              <a href={href} className='relative text-[10px] mt-[30px] tracking-[2.35px] text-[#626262] mr-[20px] transition-colors duration-300 hover:text-[#626262] group pb-2'>
                LEARN MORE
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#626262] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Corporates() {
  return (
    <main className="overflow-hidden bg-[#ede8e0]">
      <div className='relative h-[90vh]'>
        <Image src={img1} alt="Full Screen Image" layout="fill" objectFit="cover" />
      </div>

      <Section
        title="R&R"
        imgSrc={about1}
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        href="/our-homes"
      />
      <Section
        title="Product Launches"
        imgSrc={img3}
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        href="/our-homes"
      />
      <Section
        title="Brand Launches"
        imgSrc={img4}
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        href="/our-homes"
      />
    </main>
  );
}
