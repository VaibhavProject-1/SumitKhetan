// 'use client';
// import Image from "next/image";
// import story1 from "../../public/images/story-1.jpg";
// import story2 from "../../public/images/story-2.jpg";
// import { useEffect, useRef, useState } from 'react';
// import useIntersectionObserver from "../Components/IntersectionObserver";

// const Story: React.FC = () => {
//   const storyRef = useRef<HTMLDivElement>(null);
//   const storyTextRef = useRef<HTMLDivElement>(null);
//   const storyImageRef = useRef<HTMLDivElement>(null);
//   const storyImage1Ref = useRef<HTMLDivElement>(null);
//   const { ref, isVisible } = useIntersectionObserver();
//   const [activeYear, setActiveYear] = useState('2004');

//   useEffect(() => {
//     const handleScroll = () => {
//       const storyElement = storyRef.current;
//       const storyTextElement = storyTextRef.current;
//       const storyImageElement1 = storyImage1Ref.current;
//       const storyImageElement2 = storyImageRef.current;

//       if (storyElement && storyTextElement && storyImageElement1 && storyImageElement2) {
//         const rect = storyElement.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         if (rect.top < windowHeight && rect.bottom > 0) {
//           const offset = Math.min(Math.max(windowHeight - rect.top, 0), windowHeight);

//           const translateValue = (1 - offset / windowHeight) * 60;
//           storyTextElement.style.transform = `translateX(${translateValue}%)`;
//           storyImageElement2.style.transform = `translateX(${translateValue}%)`;

//           const oppositeTranslateValue = (1 - offset / windowHeight) * -60;
//           storyImageElement1.style.transform = `translateX(${oppositeTranslateValue}%)`;
//         } else {
//           storyTextElement.style.transform = 'translateX(60%)';
//           storyImageElement1.style.transform = 'translateX(-60%)';
//           storyImageElement2.style.transform = 'translateX(60%)';
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const details = {
//     '2004': {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       image: story1,
//     },
//     '2005': {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       image: story2,
//     },
//     '2006': {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       image: story2,
//     },
//     '2007': {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       image: story2,
//     },
//     // Add more details for other years as needed
//   };

//   return (
//     <section className="bg-[#101010] text-white sm:pb-20">
//       <div className="w-full px-[20px] sm:px-[50px] sm:px-[100px] md:flex" ref={storyRef}>
//         <div>
//           <h2 className="pt-[10px] text-[50px] sm:text-[70px] tracking-[-2.8px] mb-[-30px] font-medium">SUMIT KHETAN 
//           </h2>
//           <div
//             ref={storyTextRef}
//             className="my-10 text-[170px] sm:text-[300px] tracking-[-13.6px] text-[#242424] relative leading-none transition-transform duration-[1s]  ease-out"
//             style={{ transform: 'translateX(20%)' }} // Initial position to 20% right
//           >
//             <h2 className="font-medium">Story</h2>
//           </div>

//           <div className="sm:flex gap-10 relative mt-0">
//             <div className="flex-shrink-0 w-[50%] sm:w-[25%] h-[100%] duration-[1s] ease-out"
//               ref={storyImage1Ref}
//               style={{ transform: 'translateX(-60%)' }}>
//               <Image src={story2} height={400}  className="brightness-50" alt="story" />
//             </div>
//             <div
//               className="flex w-[100%] sm:w-[85%] h-[100%] relative top-[50px] transition-transform duration-1000 ease-out" // Reduced duration
//               ref={storyImageRef}
//               style={{ transform: 'translateX(20%)' }} // Initial position to 20% right
//             >
//               <Image src={story2} height={400} className="brightness-50" alt="story" />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center w-full mt-20 text-justify sm:mt-40 sm:pl-10">
//           <div className="flex justify-center space-x-4 mt-10 mb-10">
//             {Object.keys(details).map((year) => (
//               <span
//                 key={year}
//                 onClick={() => setActiveYear(year)}
//                 className={`cursor-pointer text-lg sm:text-xl font-small ${activeYear === year ? 'text-white' : 'text-[#626262]'} hover:text-white`}
//               >
//                 {year} <span className="inline-block w-2 h-2 bg-white rounded-full ml-2"></span>
//               </span>
//             ))}
//           </div>
//           <p className="leading-[2rem] jost-uniquifier text-[14px]">
//             {details[activeYear].text}
//           </p>
//         </div>
//       </div>
//       <div
//         ref={ref}
//         className={`py-40 mx-auto max-w-[1000px] transition-opacity duration-500 ease-out ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}
//       >
//         <div className=" w-[90%] sm:w-full  mx-auto flex flex-col sm:flex-row gap-20 sm:gap-0 justify-between text-2xl uppercase text-[#626262]">
//           <a href="/Wedding" className="relative transition-colors duration-300 hover:text-white group pb-2">
//           Brand Partnerships

//             <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
//           </a>

//           <a href="/Corporates" className="relative transition-colors duration-300 hover:text-white group pb-2">
//           Brand Partnerships

//             <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
//           </a>
//           <a href="/retail-space" className="relative transition-colors duration-300 hover:text-white group pb-2">
//           Brand Partnerships

//             <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Story;

// Story.tsx

'use client';
import Image from 'next/image';
import story1 from '../../public/images/story-1.jpg';
import story2 from '../../public/images/story-2.jpg';
import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../Components/IntersectionObserver';

interface StoryDetails {
  text: string;
  image: any; // Using 'any' type for image
}

const details: Record<string, StoryDetails> = {
  '2004': {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: story1,
  },
  '2005': {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: story2,
  },
  '2006': {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: story2,
  },
  '2007': {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: story2,
  },
};

const Story: React.FC = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const storyTextRef = useRef<HTMLDivElement>(null);
  const storyImageRef = useRef<HTMLDivElement>(null);
  const storyImage1Ref = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useIntersectionObserver();
  const [activeYear, setActiveYear] = useState<keyof typeof details>('2004');

  useEffect(() => {
    const handleScroll = () => {
      const storyElement = storyRef.current;
      const storyTextElement = storyTextRef.current;
      const storyImageElement1 = storyImage1Ref.current;
      const storyImageElement2 = storyImageRef.current;

      if (storyElement && storyTextElement && storyImageElement1 && storyImageElement2) {
        const rect = storyElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const offset = Math.min(Math.max(windowHeight - rect.top, 0), windowHeight);

          const translateValue = (1 - offset / windowHeight) * 60;
          storyTextElement.style.transform = `translateX(${translateValue}%)`;
          storyImageElement2.style.transform = `translateX(${translateValue}%)`;

          const oppositeTranslateValue = (1 - offset / windowHeight) * -60;
          storyImageElement1.style.transform = `translateX(${oppositeTranslateValue}%)`;
        } else {
          storyTextElement.style.transform = 'translateX(60%)';
          storyImageElement1.style.transform = 'translateX(-60%)';
          storyImageElement2.style.transform = 'translateX(60%)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#101010] text-white sm:pb-20">
      <div className="w-full px-[20px] sm:px-[100px] md:flex" ref={storyRef}>
        <div>
          <h2 className="pt-[10px] text-[50px] sm:text-[70px] tracking-[-2.8px] mb-[-30px] font-medium">SUMIT KHETAN</h2>
          <div
            ref={storyTextRef}
            className="my-10 text-[170px] sm:text-[300px] tracking-[-13.6px] text-[#242424] relative leading-none transition-transform duration-[1s] ease-out"
            style={{ transform: 'translateX(20%)' }} // Initial position to 20% right
          >
            <h2 className="font-medium">Story</h2>
          </div>

          <div className="sm:flex gap-10 relative mt-0">
            <div
              className="flex-shrink-0 w-[50%] sm:w-[25%] h-[100%] duration-[1s] ease-out"
              ref={storyImage1Ref}
              style={{ transform: 'translateX(-60%)' }}
            >
              <Image src={details[activeYear].image} height={400} className="brightness-50" alt="story" />
            </div>
            <div
              className="flex w-[100%] sm:w-[85%] h-[100%] relative top-[50px] transition-transform duration-1000 ease-out"
              ref={storyImageRef}
              style={{ transform: 'translateX(20%)' }} // Initial position to 20% right
            >
              <Image src={details[activeYear].image} height={400} className="brightness-50" alt="story" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-20 text-justify sm:mt-40 sm:pl-10">
          <div className="flex justify-center space-x-4 mt-10 mb-10">
            {Object.keys(details).map((year) => (
              <span
                key={year}
                onClick={() => setActiveYear(year as keyof typeof details)}
                className={`cursor-pointer text-lg sm:text-xl font-small ${activeYear === year ? 'text-white' : 'text-[#626262]'} hover:text-white`}
              >
                {year} <span className="inline-block w-2 h-2 bg-white rounded-full ml-2"></span>
              </span>
            ))}
          </div>
          <p className="leading-[2rem] jost-uniquifier text-[14px]">{details[activeYear].text}</p>
        </div>
      </div>
      <div
        ref={ref}
        className={`py-40 mx-auto max-w-[1000px] transition-opacity duration-500 ease-out ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}
      >
        <div className=" w-[90%] sm:w-full mx-auto flex flex-col sm:flex-row gap-20 sm:gap-0 justify-between text-2xl uppercase text-[#626262]">
          <a href="/Wedding" className="relative transition-colors duration-300 hover:text-white group pb-2">
            Brand Partnerships
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
          </a>
          <a href="/Corporates" className="relative transition-colors duration-300 hover:text-white group pb-2">
            Brand Partnerships
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
          </a>
          <a href="/retail-space" className="relative transition-colors duration-300 hover:text-white group pb-2">
            Brand Partnerships
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Story;