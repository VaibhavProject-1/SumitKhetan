import Image from 'next/image'

export default function Contact() {
    return (
        <main className="overflow-hidden bg-[#ede8e0]">
            <section className="flex mb-[100px] pt-[150px] sm:pt-[250px] items-center justify-center">
                <div className="absolute items-center text-[#212529] font-medium text-[1rem] leading-2 text-center text-black">
                    <h1 className='tracking-[-13.6px] text-[100px] sm:text-[230px] font-medium leading-2 mb-[0.5rem] text-[#242424] opacity-[0.04] text-center text-black'>Contact us</h1>
                </div>
                <div className="sm:w-[550px] text-center text-black absolute my-auto">
                    <h1 className="text-[40px] sm:text-[70px] tracking-[-2.8px]">Contact us</h1>
                </div>
            </section>
            <div className="w-full flex flex-col sm:flex-row py-[80px]">
                <div className="flex-shrink-0 w-full px-[30px] sm:px-0 sm:w-[41%]">
                    <Image
                        src='https://via.placeholder.com/400'
                        alt='image'
                        width={400}
                        height={400}
                        className='w-full h-full'
                        style={{
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        }}
                    />
                </div>

                <div className="flex-shrink-0 px-[30px] sm:px-0 w-full sm:w-[59%]">
                    <div className="pt-[100px] flex flex-col justify-center items-center text-center text-black">

                        <h1 className="text-4xl font-semibold text-black sm:text-4xl py-5 sn:pb-0 md:text-6xl">
                            Get In Touch
                        </h1>
                        <p className="py-4 text-black sm:w-[550px] jost-uniquifier">We are a lifestyle company committed to creating thoughtfully designed, sustainable spaces that individuals aspire to live in.
                        </p>
                    </div>

                    <div className="bg-[#ede8e0] sm:flex justify-center items-center max-w-[1140px] mx-auto mb-[100px] text-center text-black">
                        <form action="" className="mt-[20px]">
                            <div className="inline relative border-none">
                                <input
                                    type="text"
                                    name='name'
                                    className='mb-[40px] mx-auto sm:mx-8 w-[350px] sm:w-auto bg-[#ede8e0] border-b-2 border-solid border-gray-500 pb-2 focus:outline-none'
                                    placeholder='Your Full Name'
                                    id='username'
                                />
                            </div>
                            <div className="inline relative border-none">
                                <input
                                    type="text"
                                    name='email'
                                    className='mb-[40px] mx-auto sm:mx-8 w-[350px] sm:w-auto bg-[#ede8e0] border-b-2 border-solid border-gray-500 pb-2 focus:outline-none'
                                    placeholder='Your Email Address'
                                    id='email'
                                />
                            </div>
                            <div className="inline relative border-none">
                                <input
                                    type="text"
                                    name='mobile'
                                    className='mb-[40px] mx-auto sm:mx-8 w-[350px] sm:w-auto bg-[#ede8e0] border-b-2 border-solid border-gray-500 pb-2 focus:outline-none'
                                    placeholder='Your Mobile No.'
                                    id='mobile'
                                />
                            </div>
                            <div className="mt-6">
                                <button className="mx-auto block relative bg-[#222] uppercase text-[#909090] font-semibold py-[17px] px-[35px]">Register your interest</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
