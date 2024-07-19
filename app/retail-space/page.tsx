import bg from '../../public/images/double.jpg'
import Image from 'next/image'

export default function OurHomes() {
    return ( 
 
        <main className="overflow-hidden ">
            <div className='bg-[#ede8e0]'>
                <div className="relative h-[20vh]">

                </div>
                <section className="flex mb-[100px] pt-30 sm:pt-[150px] items-center justify-center">
                    <div className="absolute items-center text-[#212529] font-medium text-[1rem] leading-2 text-center text-black">
                        <h1 className='tracking-[-13.6px] text-[100px] sm:text-[230px] font-medium leading-2 mb-[0.5rem] text-[#242424] opacity-[0.04] text-center text-black '>Retail Space
</h1>
                    </div>
                    <div className="sm:w-[550px] text-center text-black absolute my-auto">
                        <h1 className="text-[40px] sm:text-[70px] tracking-[-2.8px] text-black">Retail Space
</h1>
                    </div>
                </section>
                <div className="w-full flex flex-col sm:flex-row py-[80px]">
                    <div className="flex-shrink-0 w-full px-[30px] sm:px-0 sm:w-[50%]">
                        <Image
                            src='/images/Riviera-Galleria.jpg'
                            alt='image'
                            width={400}
                            height={400}
                            className='w-full h-full'
                            style={{
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                            }}
                        />
                    </div>

                    <div className="mx-auto my-0 pr-[30px] sm:pr-[55px] pl-[30px] pt-[30px] sm:pt-0 sm:pl-[60px] relative w-full sm:w-[41.6%]">
                        <h4 className="text-[30px] mt-0 mb-[0.5rem] font-medium text-black">Riviera Galleria</h4>
                        <p className="font-regular tracking-[-0.56px] text-justify text-black ">
                            The Lanai is tucked away in a quiet corner of the coastal village of Arpora, flanked on either side by the Anjuna and Baga beaches. Embracing both a life near the beach, and the quiet green luxury that only Goa affords, it is a combination that makes living in Arpora uniquely rewarding.
                        </p>
                        <p className="font-regular tracking-[-0.56px] text-justify text-black my-4 ">
                            The Lanai is tucked away in a quiet corner of the coastal village of Arpora, flanked on either side by the Anjuna and Baga beaches. Embracing both a life near the beach, and the quiet green luxury that only Goa affords, it is a combination that makes living in Arpora uniquely rewarding.
                        </p>
                       
                    </div>


                </div>
            </div>
        


        </main>
    )
}
