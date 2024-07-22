'use client';

import TabView from './Tabview';
import Image from 'next/image';
import anjuna from '../../public/images/anjuna.jpg'; // Static import
import siolim1 from '../../public/images/siolim (1).jpg'; // Static import

const tabs = [
  { 
    title: 'National', 
    content: (
      <div className="flex gap-6">
        <div className="sm:w-[70%] flex flex-col">
          <div className="sm:w-[95%]">
            <Image src={anjuna} alt="National Map" className="h-200 w-200" />
          </div>
          <div className="w-[95%] pt-4 jost-uniquifier text-justify text-black text-[14px]">
            This is the national map showing key locations. 
          </div>
        </div>
        <div className="w-[80%] flex mt-[-150px] hidden lg:flex">
          <Image src={siolim1} alt="National Map" className="h-full w-full" />
        </div>
      </div>
    ),
  },
  { 
    title: 'Global', 
    content: (
      <div className="flex gap-6">
        <div className="sm:w-[70%] flex flex-col">
          <div className="sm:w-[95%]">
            <Image src={anjuna} alt="Global Map" className="h-200 w-200" />
          </div>
          <div className="w-[95%] pt-4 jost-uniquifier text-justify text-black text-[14px]">
            This is the global map showing key locations.
          </div>
        </div>
        <div className="w-[80%] flex mt-[-150px] hidden lg:flex">
          <Image src={anjuna} alt="Global Map" className="h-full w-full" />
        </div>
      </div>
    ),
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-[#f6f4f1] py-20">
      <h2 className='text-4xl sm:text-[70px] sm:pt-20 pb-10 font-medium mx-auto pl-10 sm:pl-24 text-[#212529] tracking-[-2.8px]'>Our Clients</h2>
      <TabView tabs={tabs} />
    </div>
  );
};

export default Home;
