import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from "@/components/ui/input";

const footer = () => {
  return (
    <div>
        <div className='w-full h-[684px] p-20 gap-20'>
        <div className='w-[1120px] h-[524px] gap-20 xs:w-[200px]'>

          <div className='w-[1120px] h-[82px] justify-between flex xs:hidden'>
            <div className='w-[500px] h-[51px]'>
              <p className='font-semibold text-lg leading-7'>Subscribe to our newsletter</p>
              <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-[400px] h-[82px] gap-4'>
              <div className='w-[400px] h-12 gap-4 flex'>
                <Input type="email" placeholder='Enter your email' className='w-[265px] h-12 border-black' />
                <Button type="submit" className='w-[119px] h-12'>Subscribe</Button>
              </div>
              <div className='text-xs leading-6'>By subscribing you agree to with our Privacy Policy</div>
            </div>
          </div>

          <div className='w-[1120px] h-[225px] gap-10 my-20 flex xs:flex-col xs:w-[200px]'>
            <div className='w-[250px] h-10 xs:w-[200px]'><Image src="/Logo/Ddsgnr Library.svg" alt='logo' width={130} height={40} /></div>
            <div className='w-[250px] h-[225px] gap-4'>
              <p className='font-semibold text-base leading-6'>Courses</p>
              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Business</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Development</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Technology</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Design</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Programming</p></div>
              </div>
            </div>
            
            <div className='w-[250px] h-[225px] gap-4 xs:hidden'>
              <p className='font-semibold text-base leading-6'>Resources</p>
              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Career</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Resume</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Learning</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Interview Preparation</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Jobs</p></div>
              </div>
            </div>

            <div className='w-[250px] h-[225px] gap-4 xs:hidden'>
              <p className='font-semibold text-base leading-6'>About Us</p>
              <div className='w-[250px] h-[185px]'>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Contact</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Help/Support</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>FAQ</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Term and Conditions</p></div>
                <div className='w-[250px] h-[37px] py-2'><p className='text-[14px] leading-5'>Partners</p></div>
              </div>
            </div>

          </div>

          <div className='w-[1120px] h-[57px] gap-8 border-t border-black xs:hidden'>
            <div className='w-[1120px] h-6 justify-between flex mt-8'>
              <div className='w-auto h-[21px] gap-6 justify-center flex'>
                <p>2023 Ddsgnr. All right reserved.</p>
                <p className='text-sm leading-[21px] underline decoration-solid'>Privacy Policy</p>
                <p className='text-sm leading-[21px] underline decoration-solid'>Terms of Service</p>
                <p className='text-sm leading-[21px] underline decoration-solid'>Cookies Settings</p>
              </div>

              <div className='flex w-[132px] h-6 gap-3'>
                <Image src="/Icons/Facebook.svg" alt='facebook' width={24} height={24}/>
                <Image src="/Icons/Instagram.svg" alt='facebook' width={24} height={24}/>
                <Image src="/Icons/Twitter.svg" alt='facebook' width={24} height={24}/>
                <Image src="/Icons/LinkedIn.svg" alt='facebook' width={24} height={24}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer