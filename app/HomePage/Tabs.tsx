// 'use client';
// import TabView from './Tabview';

// const tabs = [
//   { 
//     title: 'Anjuna', 
//     content: (
//       <div className="flex gap-6">
//         <div className="sm:w-[70%]  flex flex-col">
//           <div className="sm:w-[95%]">
//             <img src="https://via.placeholder.com/200" alt="Image 1" className="h-200 w-200" />
//           </div>
//           <div className="w-[95%] pt-4 jost-uniquifier text-justify text-black text-[14px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </div>
//         </div>
//         <div className="w-[80%] flex mt-[-150px] hidden lg:flex">
//           <img src="https://via.placeholder.com/400" alt="Image 2" className="h-full w-full" />
//         </div>
//       </div>
//     ),
//   },
//   { 
//     title: 'Siolim', 
//     content: (
//       <div className="flex gap-6">
//         <div className="sm:w-[70%] flex flex-col">
//           <div className="sm:w-[95%]">
//             <img src="https://via.placeholder.com/200" alt="Image 1" className="h-200 w-200" />
//           </div>
//           <div className="w-[95%] pt-4 jost-uniquifier text-justify text-black text-[14px]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </div>
//         </div>
//         <div className="w-[80%] flex mt-[-150px] hidden lg:flex">
//           <img src="https://via.placeholder.com/400" alt="Image 2" className="h-full w-full" />
//         </div>
//       </div>
//     ),
//   },
// ];

// const Home: React.FC = () => {
//   return (
//     <div className="bg-[#f6f4f1] py-20">
//       <h2 className='text-4xl sm:text-[70px] sm:pt-20 pb-10 font-medium mx-auto pl-10 sm:pl-24 text-[#212529] tracking-[-2.8px]'>Our Clients</h2>
//       <TabView tabs={tabs} />
//     </div>
//   );
// };

// export default Home;


'use client';
import TabView from './Tabview';
import Image from 'next/image';

const tabs = [
  { 
    title: 'Anjuna', 
    content: (
      <div className="flex gap-6">
        <div className="sm:w-[70%]  flex flex-col">
          <div className="sm:w-[95%]">
            <Image src="https://via.placeholder.com/200" alt="Image 1" width={200} height={200} className="h-200 w-200" />
          </div>
          <div className="w-[95%] pt-4 jost-uniquifier text-justify text-black text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="w-[80%] flex mt-[-150px] hidden lg:flex">
          <Image src="https://via.placeholder.com/400" alt="Image 2" width={400} height={400} className="h-full w-full" />
        </div>
      </div>
    ),
  },
  { 
    title: 'Siolim', 
    content: (
      <div className="flex gap-6">
        <div className="sm:w-[70%] flex flex-col">
          <div className="sm:w-[95%]">
            <Image src="https://via.placeholder.com/200" alt="Image 1" width={200} height={200} className="h-200 w-200" />
          </div>
          <div className="w-[95%] pt-4 jost-uniquifier text-justify text-black text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="w-[80%] flex mt-[-150px] hidden lg:flex">
          <Image src="https://via.placeholder.com/400" alt="Image 2" width={400} height={400} className="h-full w-full" />
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