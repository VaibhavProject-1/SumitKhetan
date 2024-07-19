import Image from 'next/image'
import bg from '../../public/images/aboutimg.jpg'

export default function About() {
    return (
        <main className="overflow-hidden bg-[#f6f4f1]">
            <div className="relative h-[80vh]">
                <div className="h-full w-full relative">
                    <Image
                        src={bg}
                        alt="Image"
                        layout="fill"
                        objectFit="cover"
                        className="shadow-custom"
                    />
                </div>

                {/* Add a dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,16,16,0.65)] to-[rgba(16,16,16,0.2)]"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl font-semibold text-white sm:text-4xl py-5 sn:pb-0 md:text-6xl">
                        Sustainability
                    </h1>
                </div>
            </div>

            <div className="bg-[#f6f4f1] max-w-[1140px] mx-auto mb-[0px]">
                <h1 className="text-[70px] tracking-[-2.8px] py-[30px]"></h1>
                <div className="mt-[100px] sm:flex items-center">
                    <div className="flex-shrink-0 w-full sm:w-[50%] px-[30px] sm:px-2">
                        <div className="pt-10">
                            <Image src='/images/Sustainable-Luxury.jpg' alt='Image' width={600} height={500} className="object-cover h-full w-full align-middle shadow-custom" />
                        </div>
                    </div>

                    <div className="pl-[30px] sm:pl-[50px] pr-[30px] w-full sm:w-[41.6%] flex-shrink-0">
                        <h2 className="text-[30px] sm:text-[40px] text-black leading-[50px] pt-[20px] sm:pt-[10px] tracking-[-2.8px]">Commitment to Sustainable Luxury
                        </h2>
                        <h3 className="text-[24px] tracking-[-0.59px] pt-[10px] "></h3>
                        <p className='text-justify text-black pt-[10px]'>
                            We have always been committed to conserving energy, and reducing water and waste, be it on our construction sites, in our hotels, offices or the homes that we build. In keeping with our commitment to sustainable luxury and conscious living, our homes typically include features such as rainwater harvesting, waste management, solar panelling, drip irrigation, construction of sewage treatment plants, dual flush WCs and the adoption of STADs systems for recycling of wastewater.
                        </p>
                        <p className='text-justify text-black py-4'>
                            Each of our spaces is constructed using materials with good insulation properties thereby reducing the demand for energy required for regulative temperatures. Smart placement of windows throughout our structures further limits the energy loss.
                        </p>
                        <p className='text-justify text-black'>
                            We endeavour to adopt materials like bricks or block made from construction waste to reduce the impact on the environment
                        </p>
                    </div>
                </div>
            </div>  

            <div className="bg-[#f6f4f1] max-w-[1140px] mx-auto mb-[100px]">
                <h1 className="text-[70px] tracking-[-2.8px] py-[30px]"></h1>
                <div className="mt-[20px] flex items-center flex-col-reverse sm:flex-row">
                    <div className="px-[30px] sm:px-[40px] w-full sm:w-[41.6%] flex-shrink-0">
                        <h2 className="text-[30px] sm:text-[40px] text-black leading-[50px] pt-[20px] sm:pt-[10px] tracking-[-2.8px]">Commitment to Sustainable Luxury
                        </h2>
                        <h3 className="text-[24px] tracking-[-0.59px] pt-[10px] "></h3>
                        <p className='text-justify text-black pt-[10px]'>
                            We have always been committed to conserving energy, and reducing water and waste, be it on our construction sites, in our hotels, offices or the homes that we build. In keeping with our commitment to sustainable luxury and conscious living, our homes typically include features such as rainwater harvesting, waste management, solar panelling, drip irrigation, construction of sewage treatment plants, dual flush WCs and the adoption of STADs systems for recycling of wastewater.
                        </p>
                        <p className='text-justify text-black py-4'>
                            Each of our spaces is constructed using materials with good insulation properties thereby reducing the demand for energy required for regulative temperatures. Smart placement of windows throughout our structures further limits the energy loss.
                        </p>
                        <p className='text-justify text-black'>
                            We endeavour to adopt materials like bricks or block made from construction waste to reduce the impact on the environment
                        </p>
                    </div>

                    <div className="flex-shrink-0 w-full sm:w-[50%] px-[30px] sm:px-2">
                        <div className="pt-10">
                            <Image src='/images/Enriching.jpg' alt='Image' width={600} height={500} className="object-cover h-full w-full align-middle shadow-custom" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="flex mb-[50px] sm:mb-[100px] pt-[50px] sm:pt-[150px] items-center justify-center">
                <div className="absolute items-center text-[#212529] font-medium text-[1rem] leading-2 text-center">
                    <h1 className='tracking-[-13.6px] text-[90px] sm:text-[230px] font-medium leading-2 mb-[0.5rem] text-[#242424] opacity-[0.04] text-center'>Sustainability</h1>
                </div>
            </section>
            <div className="bg-[#f6f4f1] max-w-[1140px] mx-auto mb-[0px]">
                <h1 className="text-[70px] tracking-[-2.8px] py-[30px]"></h1>
                <div className="mt-[100px] sm:flex items-center">
                    <div className="flex-shrink-0 w-full sm:w-[50%] px-[30px] sm:px-2">
                        <div className="pt-10">
                            <Image src='/images/Sustainable-Luxury.jpg' alt='Image' width={600} height={500} className="object-cover h-full w-full align-middle shadow-custom" />
                        </div>
                    </div>

                    <div className="pl-[30px] sm:pl-[50px] pr-[30px] w-full sm:w-[41.6%] flex-shrink-0">
                        <h2 className="text-[30px] sm:text-[40px] text-black leading-[50px] pt-[20px] sm:pt-[10px] tracking-[-2.8px]">Commitment to Sustainable Luxury
                        </h2>
                        <h3 className="text-[24px] tracking-[-0.59px] pt-[10px] "></h3>
                        <p className='text-justify text-black pt-[10px]'>
                            We have always been committed to conserving energy, and reducing water and waste, be it on our construction sites, in our hotels, offices or the homes that we build. In keeping with our commitment to sustainable luxury and conscious living, our homes typically include features such as rainwater harvesting, waste management, solar panelling, drip irrigation, construction of sewage treatment plants, dual flush WCs and the adoption of STADs systems for recycling of wastewater.
                        </p>
                        <p className='text-justify text-black py-4'>
                            Each of our spaces is constructed using materials with good insulation properties thereby reducing the demand for energy required for regulative temperatures. Smart placement of windows throughout our structures further limits the energy loss.
                        </p>
                        <p className='text-justify text-black'>
                            We endeavour to adopt materials like bricks or block made from construction waste to reduce the impact on the environment
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#f6f4f1] max-w-[1140px] mx-auto mb-[100px]">
                <h1 className="text-[70px] tracking-[-2.8px] py-[30px]"></h1>
                <div className="mt-[20px] flex items-center flex-col-reverse sm:flex-row">
                    <div className="px-[30px] sm:px-[40px] w-full sm:w-[41.6%] flex-shrink-0">
                        <h2 className="text-[30px] sm:text-[40px] text-black leading-[50px] pt-[30px] sm:pt-[10px] tracking-[-2.8px]">Commitment to Sustainable Luxury
                        </h2>
                        <h3 className="text-[24px] tracking-[-0.59px] pt-[10px] "></h3>
                        <p className='text-justify text-black pt-[10px]'>
                            We have always been committed to conserving energy, and reducing water and waste, be it on our construction sites, in our hotels, offices or the homes that we build. In keeping with our commitment to sustainable luxury and conscious living, our homes typically include features such as rainwater harvesting, waste management, solar panelling, drip irrigation, construction of sewage treatment plants, dual flush WCs and the adoption of STADs systems for recycling of wastewater.
                        </p>
                        <p className='text-justify text-black py-4'>
                            Each of our spaces is constructed using materials with good insulation properties thereby reducing the demand for energy required for regulative temperatures. Smart placement of windows throughout our structures further limits the energy loss.
                        </p>
                        <p className='text-justify text-black'>
                            We endeavour to adopt materials like bricks or block made from construction waste to reduce the impact on the environment
                        </p>
                    </div>

                    <div className="flex-shrink-0 w-full sm:w-[50%] px-[30px] sm:px-2">
                        <div className="pt-10">
                            <Image src='/images/Enriching.jpg' alt='Image' width={600} height={500} className="object-cover h-full w-full align-middle shadow-custom" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
