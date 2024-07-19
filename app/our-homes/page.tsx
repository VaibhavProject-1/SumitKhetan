import bg from '../../public/images/double.jpg'
import Image from 'next/image'

export default function OurHomes() {
    return ( 
 
        <main className="overflow-hidden ">
            <div className='bg-[#ede8e0]'>
                <div className="relative h-[20vh]">

                </div>
                <section className="flex mb-[100px] pt-30 sm:pt-[150px] items-center justify-center">
                    <div className="absolute items-center text-[#212529] font-medium text-black text-[1rem] leading-2 text-center text-black">
                        <h1 className='tracking-[-13.6px] text-[100px] sm:text-[230px] font-medium text-black leading-2 mb-[0.5rem] text-[#242424] opacity-[0.04] text-center text-black '>Upcoming</h1>
                    </div>
                    <div className="sm:w-[550px] text-center text-black absolute my-auto">
                        <h1 className="text-[40px] sm:text-[70px] tracking-[-2.8px] text-black">Upcoming Projects</h1>
                    </div>
                </section>
                <div className="w-full flex flex-col sm:flex-row py-[80px]">
                    <div className="flex-shrink-0 px-[30px] sm:px-0 w-full sm:w-[50%]">
                        <Image
                            src='/images/lannai.jpg'
                            alt='image'
                            width={400}
                            height={400}
                            className='w-full h-full'
                            style={{
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                            }}
                        />
                    </div>

                    <div className="mx-auto my-0 pr-[30px] pt-[30px] sm:pt-auto sm:pr-[55px] pl-[30px] sm:pl-[60px] relative w-full sm:w-[41.6%]">
                        <h4 className="text-[30px] mt-0 mb-[0.5rem] font-medium text-black ">The Lanai</h4>
                        <p className="font-regular tracking-[-0.56px] text-justify text-black ">
                            The Lanai is tucked away in a quiet corner of the coastal village of Arpora, flanked on either side by the Anjuna and Baga beaches. Embracing both a life near the beach, and the quiet green luxury that only Goa affords, it is a combination that makes living in Arpora uniquely rewarding.
                        </p>
                        <div className="w-full flex flex-wrap gap-x-[1.5rem] gap-y-0 ">

                            <div className="flex-shrink-0 w-[25%]">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">Unit type</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">4 BHK Villas</p>

                            </div>
                            <div className="flex-shrink-0 w-{50%}">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">carpet area</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">309.86 - 353.01 <span className='text-[12px] font-light tracking-[-0.48px]'>sq.mtr</span> </p>

                            </div>
                            <div className="flex-shrink-0 w-[25%]">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">location</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">Arpora </p>

                            </div>
                            <div className="flex-shrink-0 w-[30%] ">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">RERA Registration no.</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">PRGO02221536 </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='bg-[#f6f4f1]'>

                <section className="flex mb-[100px] pt-[150px] items-center justify-center mb-[140px]">
                    <div className="absolute items-center text-[#212529] font-medium text-black text-[1rem] leading-2 text-center text-black">
                        <h1 className='tracking-[-13.6px] text-[90px] sm:text-[230px] font-medium text-black leading-2 mb-[0.5rem] text-[#242424] opacity-[0.04] text-center text-black'>Our Homes</h1>
                    </div>
                    <div className="sm:w-[550px] text-center text-black absolute my-auto">
                        <h1 className="text-[40px] sm:text-[70px] tracking-[-2.8px]">Our Homes</h1>
                        <p className='pt-[4px] sm:pt-[35px] text-[17px] text-center text-black mx-auto w-[70%] sm:w-auto tracking-[-0.56px]'>“Architecture should speak of its time and place, but yearn for timelessness”</p>
                        <p className='pt-[35px] text-[17px] font-bold text-center text-black tracking-[-0.56px]'>– Frank Gehry</p>
                    </div>
                </section>
                <div className="w-full flex flex-col sm:flex-row py-[80px]">
                    <div className="flex-shrink-0 px-[30px] sm:px-0 w-full sm:w-[50%]">
                        <Image
                            src='/images/comming.jpg'
                            alt='image'
                            width={400}
                            height={400}
                            className='w-full h-full'
                            style={{
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                            }}
                        />
                    </div>

                    <div className="mx-auto my-0 pr-[30px] sm:pr-[55px] pl-[30px] sm:pl-[60px] relative w-full sm:w-[41.6%] mt-[30px] sm:mt-auto">
                        <h4 className="text-[30px] mt-0 mb-[0.5rem] font-medium text-black ">The Lanai</h4>
                        <p className="font-regular tracking-[-0.56px] text-justify text-black ">
                            The Lanai is tucked away in a quiet corner of the coastal village of Arpora, flanked on either side by the Anjuna and Baga beaches. Embracing both a life near the beach, and the quiet green luxury that only Goa affords, it is a combination that makes living in Arpora uniquely rewarding.
                        </p>
                        <div className="w-full flex flex-wrap gap-x-[1.5rem] gap-y-0 ">

                            <div className="flex-shrink-0 w-[25%]">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">Unit type</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">4 BHK Villas</p>

                            </div>
                            <div className="flex-shrink-0 w-{50%}">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">carpet area</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">309.86 - 353.01 <span className='text-[12px] font-light tracking-[-0.48px]'>sq.mtr</span> </p>

                            </div>
                            <div className="flex-shrink-0 w-[25%]">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">location</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">Arpora </p>

                            </div>
                            <div className="flex-shrink-0 w-[30%] ">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">RERA Registration no.</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">PRGO02221536 </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='bg-[#f6f4f1]'>


                <div className="w-full flex flex-col-reverse sm:flex-row pt-[40px] py-[80px]">


                    <div className="mx-auto my-0 pr-[30px] sm:pr-[55px] pl-[30px] sm:pl-[60px] relative w-full sm:w-[41.6%] pt-[30px] sm:pt-auto">
                        <h4 className="text-[30px] mt-0 mb-[0.5rem] font-medium text-black ">The Lanai</h4>
                        <p className="font-regular tracking-[-0.56px] text-justify text-black ">
                            The Lanai is tucked away in a quiet corner of the coastal village of Arpora, flanked on either side by the Anjuna and Baga beaches. Embracing both a life near the beach, and the quiet green luxury that only Goa affords, it is a combination that makes living in Arpora uniquely rewarding.
                        </p>
                        <div className="w-full flex flex-wrap gap-x-[1.5rem] gap-y-0 ">

                            <div className="flex-shrink-0 w-[25%]">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">Unit type</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">4 BHK Villas</p>

                            </div>
                            <div className="flex-shrink-0 w-{50%}">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">carpet area</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">309.86 - 353.01 <span className='text-[12px] font-light tracking-[-0.48px]'>sq.mtr</span> </p>

                            </div>
                            <div className="flex-shrink-0 w-[25%]">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">location</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">Arpora </p>

                            </div>
                            <div className="flex-shrink-0 w-[30%] ">
                                <h6 className="text-center text-black text-[8px] font-semibold uppercase tracking-[2.59px] mt-[36px] mb-[0.5rem] text-[#a8a8a8]">RERA Registration no.</h6>
                                <p className="text-[14px] tracking-[-0.8px] text-[#242424] font-bold text-center text-black">PRGO02221536 </p>

                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0 px-[30px] sm:px-0 w-full sm:w-[50%]">
                        <Image
                            src='/images/comming.jpg'
                            alt='image'
                            width={400}
                            height={400}
                            className='w-full h-full'
                            style={{
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                            }}
                        />
                    </div>
                </div>
            </div>


        </main>
    )
}
