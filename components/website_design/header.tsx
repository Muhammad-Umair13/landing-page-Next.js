import Image from 'next/image';
import { Button } from '../ui/button';

const header = () => {
    return (
        <div className='xs:grid xs:grid-cols-3'>
            <div className='w-full h-[54px] px-16 bg-[#F7F7F7] border-b border-black xs:hidden'>
                <div className='w-[1154px] h-[54px] py-3 justify-center flex'>
                    <div className='w-[386px] h-[30px] gap-4 flex'>
                        <div className='w-[205px] h-[21px] font-normal Roboto'>
                            <p className='w-[213px]'>Phone Number: 956 742 455 678</p>
                        </div>
                        <span className='w-[30] border-2 text-[#676767]'></span>
                        <div className='w-[149ppx] h-[21px] font-normal Roboto'>
                            <p>Email:info@ddsgnr.com</p>
                        </div>
                    </div>


                    <div className='w-[736px] h-6 gap-4'>
                        <div className='w-[132px] h-6 gap-3 ml-auto flex'>
                            <Image src="/Icons/Facebook.svg" alt='Icon' width={24} height={24} />
                            <Image src="/Icons/Instagram.svg" alt='Icon' width={24} height={24} />
                            <Image src="/Icons/LinkedIn.svg" alt='Icon' width={24} height={24} />
                            <Image src="/Icons/Twitter.svg" alt='Icon' width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[72px] px-16 bg-[#F7F7F7] border border-[#676767] mt-5 xs:w-screen xs:col-span-4'>
                <div className='w-[1152] h-11 flex items-center justify-between py-[15px] xs:h-12  xs:justify-between xs:gap-16'>
                    <div className="xs:flex">
                        <Image src="/Logo/Ddsgnr Library.svg" alt='logo' width={130} height={30.38} className='mt-5' />
                        <div className='hidden xs:block xs:mt-5'>
                            <Image src="/Icons/Menu.svg" alt='Menu' width={48} height={48} className='' />
                        </div>
                    </div>

                    <div className='w-[910px] h-11 flex m-auto xs:hidden'>
                        <div className='w-[687px] h-11'>
                            <ul className='flex gap-8 justify-center'>
                                <li className='p-2'>Home</li>
                                <li className='p-2'>Courses</li>
                                <li className='p-2'>Services</li>
                                <li className='p-2'>Achievement</li>
                                <li className='p-[6px]'>About Us</li>
                                <li className='p-2'>Testimonial</li>
                            </ul>
                        </div>

                        <div className="w-[191px] h-10 flex ml-4 gap-4 xs:hidden">
                            <Button variant="outline">Login</Button>
                            <Button>Sign Up</Button>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default header;