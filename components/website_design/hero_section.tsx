import Image from 'next/image';
import { Button } from '../ui/button';


const hero_section = () => {
  return (
    <div>
      <div className='w-full h-[800px] flex flex-row xs:flex-col'>
        <div className='w-[640px] h-[300px] p-16 xs:p-0 xs:w-0'>

          <div className='w-full h-[212px] gap-6 flex flex-col mt-[141px] xs:w-[310px]'>
            <h1 className='w-full h-[134px] font-bold text-[56px] xs:text-[40px]'>Learn new skills online with ease</h1>
            <p className='w-[500px] h-[54px] text-[18px] mt-3 xs:w-[320px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          </div>

          <div className='w-[358px] h-16 pt-5 gap-10 xs:pt-10 xs:w-[300px]'>
            <Button className='w-[178px] h-12  py-3 px-6 text-[16px] Roboto xs:w-[135px]'>Start learning now</Button>
            <Button variant="outline" className='w-[164px] h-12 py-3 px-6 ml-2 border-black text-[16px] Roboto xs:w-[135px]'>Explore Courses</Button>
          </div>
        </div>


        <div>
          <Image
            src='/img/Image.svg'
            alt='Image'
            width={640}
            height={900}
            className='xs:w-[528px] xs:mt-[200px]'
          />
        </div>


      </div>

      <div className='w-[1280px] h-[228px] py-20 px-16 gap-5 bg-[#F7F7F7] flex xs:mt-[200px] xs:flex-col xs:p-0 justify-center xs:w-[320px]'>
        <div className='w-[320px] h-[68px]'>
          <h2 className='font-bold text-2xl xs:hidden'>Trusted by 2000+ companies worldwide.</h2>
          <p className='w-[320px] h-[54px] font-bold text-lg hidden xs:block'>Trusted by the world's best companies [social proof to build credibility]</p>
        </div>
        <div className="w-[880px] h-14 py-[8.74px] gap-[19.12] xs:w-[320px]">
          <Image src="/Logo/Logos.png" alt='Logos' width={880} height={56} className='xs:w-[320px]' />
        </div>
      </div>

      <div className='w-[1280px] h-[1049px] py-[112px] px-16 gap-20 bg-[#FFFFFF] xs:w-[320px] xs:pl-0'>
        <div className='flex flex-col items-center xs:w-[320px]'>
          <div className='w-[768px] h-[109px] gap-[357px] text-center xs:w-[320px]'>
            <h2 className='w-[768px] h-[58px] font-bold text-[48px] xs:text-[32px] xs:w-[320px]'>Explore Courses By Category</h2>
            <p className='text-[18px] mt-5 xs:mt-10'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          </div>
        </div>


        <div className='w-[1280px] h-[636px] gap-24 bg-[#FFFFFF] xs:w-full'>

          {/* 1st Section of 3 Boxes */}
          <div className='w-[1280px] h-[132px] gap-6 mt-6 flex justify-center xs:flex-col xs:mt-[260px] xs:w-full'>

            {/* Box 1 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center xs:w-80'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center xs:w-[50px] xs:h-[50px]'>
                <Image src="/Icons/Courses_Icons/pen-tool-2.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Design & Development</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>

            { /* Box 2 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center xs:w-80'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center  xs:w-[50px] xs:h-[50px]'>
                <Image src="/Icons/Courses_Icons/volume-high.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Marketing</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>


            {/* Box 3 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center xs:w-80'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center  xs:w-[50px] xs:h-[50px]'>
                <Image src="/Icons/Courses_Icons/group.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Development</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>


          </div>

          {/* 2 Second section of 3 boxes*/}
          <div className='w-[1280px] h-[132px] gap-6 flex mt-6 justify-center xs:hidden'>

            {/* Box 1 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center'>
                <Image src="/Icons/Courses_Icons/microphone.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Communication</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>

            { /* Box 2 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center'>
                <Image src="/Icons/Courses_Icons/link.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Digital Marketing</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>


            {/* Box 3 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center'>
                <Image src="/Icons/Courses_Icons/arrow-2.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Self Development</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>
          </div>

          {/* 3rd Section of 3 Boxes */}
          <div className='w-[1280px] h-[132px] gap-6 flex mt-6 justify-center xs:hidden'>

            {/* Box 1 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center'>
                <Image src="/Icons/Courses_Icons/briefcase.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Business</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>

            { /* Box 2 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center'>
                <Image src="/Icons/Courses_Icons/group.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Finance</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>


            {/* Box 3 */}
            <div className='w-[410.67px] h-[132px] p-4 rounded-[5px] bg-[#F7F7F7] gap-8 flex flex-row items-center'>
              <div className='w-[100px] h-[100px] bg-[#FFFFFF] flex justify-center items-center'>
                <Image src="/Icons/Courses_Icons/book.svg" alt='Icon' width={32} height={32} className='items-center' />
              </div>
              <div className='w-[246.67] h-14 gap-4 ml-0'>
                <h4 className='font-bold text-xl'>Consulting</h4>
                <p>50+ Courses Available</p>
              </div>
            </div>
          </div>

          <div className='text-center xs:mt-28'>
            <Button variant="My_btn" className='my-3 mx-6 '>View All Courses</Button>
          </div>

        </div>
      </div>


      <div className='w-[1290px] h-[488px] px-16 py-[112px] xs:px-0 xs:w-80'>
        <div className='w-[1152] h-[264px] gap-6'>
          <div className='w-[1152px] h-[136px] gap-4 xs:w-80'>
            <h2 className='text-5xl font-bold text-center xs:text-start xs:text-4xl xs:w-80'>Our Achivements</h2>
            <p className='w-[1152px] h-[54px] text-[18px] text-center xs:w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </div>


          <div className='w-[1256px] h-24 gap-6 text-center flex xs:flex-col xs:mt-[100px] xs:w-80'>
            <div className='w-[616px] h-24 py-2 gap-6 flex justify-around xs:w-[320px]'>
              <div className='w-[296] h-20 gap-2'>
                <h3 className='font-bold text-[40px] xs:text-2xl'>+200</h3>
                <p className='text-[16px]'>Courses</p>
              </div>

              <div className='w-[296] h-20 gap-2'>
                <h3 className='font-bold text-[40px] xs:text-2xl'>50K</h3>
                <p className='text-[16px]'>Mentors</p>
              </div>
            </div>


            <div className='w-[616px] h-24 py-2 gap-6 flex justify-around xs:w-[320px]'>
              <div className='w-[296] h-20 gap-2'>
                <h3 className='font-bold text-[40px] xs:text-2xl'>370K</h3>
                <p className='text-[16px]'>Students</p>
              </div>

              <div className='w-[296] h-20 gap-2'>
                <h3 className='font-bold text-[40px] xs:text-2xl'>100+</h3>
                <p className='text-[16px]'>Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='w-[1280px] h-[1742px] py-[112px] pr-16 gap-[60px] bg-[#FFFFFF] flex flex-col items-center xs:items-start xs:w-80'>
        <div className='w-[768px] h-[118px] gap-6 xs:w-80'>
          <h1 className='w-[768px] h-[67px] font-bold text-[56px] text-center leading-10 xs:text-4xl xs:text-start xs:w-80'>Courses</h1>
          <p className='text-[18px] text-center leading-7 xs:text-start xs:w-80'>Your Ultimate Guide to learning</p>
        </div>

        <div className='w-[1152px] h-[1340px] gap-16 xs:w-full'>
          <div className='w-[336] h-10 flex justify-center xs:justify-normal xs:w-80'>
            <div className="py-2 px-4 text-[16px] w-[87px] h-10 border-black border-b-[1px]">Popular</div>
            <div className='py-2 px-4 text-[16px]'>Recommended</div>
            <div className='py-2 px-4 text-[16px]'>Best Price</div>
          </div>

          <div className='w-[1152px] h-[1132] gap-16 xs:w-[100%]'>
            <div className='w-[1312px] h-[534px] gap-8 mt-10 flex justify-between xs:flex-col xs:w-80'>

              {/* 1st course */}
              <div className='w-[416px] h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] xs:w-screen'>
                <div>
                  <Image src="/img/Course_Image/Image.svg" alt='' width={416} height={300} />
                </div>

                <div className='w-[416px] h-[210px] px-4 pb-6 gap-6 xs:px-0 xs:w-80'>
                  <div className='flex items-center justify-between gap-2 mt-2'>
                    <p className='font-semibold text-[14px]'>Design</p>
                    <div className='flex items-center gap-2'>
                      <Image src='/Icons/Courses_Icons/Star_1.svg' alt='Star Icon' width={16} height={16} />
                      <p className='font-semibold text-[14px]'>5.0</p>
                    </div>
                  </div>

                  <h5 className='font-bold text-xl leading-8 mt-2'>UX/UI Design 201</h5>
                  <p className='text-[16px] leading-6 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex items-center justify-between mt-8'>
                    <Button variant="Enrol_btn" className='w-[150px] h-10'>Enroll Now</Button>
                    <p className='font-semibold text-[16px]'>$400</p>
                  </div>

                </div>
              </div>


              {/* 2st course */}
              <div className='w-[416px] h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] xs:w-screen'>
                <div>
                  <Image src="/img/Course_Image/Image0.svg" alt='' width={416} height={300} />
                </div>

                <div className='w-[416px] h-[210px] px-4 pb-6 gap-6 xs:px-0 xs:w-80'>
                  <div className='flex items-center justify-between gap-2 mt-2'>
                    <p className='font-semibold text-[14px]'>Programmimg</p>
                    <div className='flex items-center gap-2'>
                      <Image src='/Icons/Courses_Icons/Star_1.svg' alt='Star Icon' width={16} height={16} />
                      <p className='font-semibold text-[14px]'>5.0</p>
                    </div>
                  </div>

                  <h5 className='font-bold text-xl leading-8 mt-2'>Introduction to Python</h5>
                  <p className='text-[16px] leading-6 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex items-center justify-between mt-8'>
                    <Button variant="Enrol_btn" className='w-[150px] h-10'>Enroll Now</Button>
                    <p className='font-semibold text-[16px]'>$400</p>
                  </div>

                </div>
              </div>

              {/* 3st course */}
              <div className='w-[416px] h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7] xs:w-screen'>
                <div>
                  <Image src="/img/Course_Image/Image1.svg" alt='' width={416} height={300} />
                </div>

                <div className='w-[416px] h-[210px] px-4 pb-6 gap-6 xs:px-0 xs:w-80'>
                  <div className='flex items-center justify-between gap-2 mt-2'>
                    <p className='font-semibold text-[14px]'>Business</p>
                    <div className='flex items-center gap-2'>
                      <Image src='/Icons/Courses_Icons/Star_1.svg' alt='Star Icon' width={16} height={16} />
                      <p className='font-semibold text-[14px]'>5.0</p>
                    </div>
                  </div>

                  <h5 className='font-bold text-xl leading-8 mt-2'>Data Analysis for Begineers</h5>
                  <p className='text-[16px] leading-6 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                  <div className='flex items-center justify-between mt-8'>
                    <Button variant="Enrol_btn" className='w-[150px] h-10'>Enroll Now</Button>
                    <p className='font-semibold text-[16px]'>$400</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* 2nd section */}
          <div className='w-[1312px] h-[534px] gap-8 mt-10 flex justify-between xs:hidden'>

            {/* 1st course */}
            <div className='w-[416px] h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7]'>
              <div>
                <Image src="/img/Course_Image/Image3.svg" alt='' width={416} height={300} />
              </div>

              <div className='w-[416px] h-[210px] px-4 pb-6 gap-6'>
                <div className='flex items-center justify-between gap-2 mt-2'>
                  <p className='font-semibold text-[14px]'>Art</p>
                  <div className='flex items-center gap-2'>
                    <Image src='/Icons/Courses_Icons/Star_1.svg' alt='Star Icon' width={16} height={16} />
                    <p className='font-semibold text-[14px]'>5.0</p>
                  </div>
                </div>

                <h5 className='font-bold text-xl leading-8 mt-2'>Art Specialization</h5>
                <p className='text-[16px] leading-6 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                <div className='flex items-center justify-between mt-8'>
                  <Button variant="Enrol_btn" className='w-[150px] h-10'>Enroll Now</Button>
                  <p className='font-semibold text-[16px]'>$400</p>
                </div>

              </div>
            </div>


            {/* 2st course */}
            <div className='w-[416px] h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7]'>
              <div>
                <Image src="/img/Course_Image/Image4.svg" alt='' width={416} height={300} />
              </div>

              <div className='w-[416px] h-[210px] px-4 pb-6 gap-6'>
                <div className='flex items-center justify-between gap-2 mt-2'>
                  <p className='font-semibold text-[14px]'>Law</p>
                  <div className='flex items-center gap-2'>
                    <Image src='/Icons/Courses_Icons/Star_1.svg' alt='Star Icon' width={16} height={16} />
                    <p className='font-semibold text-[14px]'>5.0</p>
                  </div>
                </div>

                <h5 className='font-bold text-xl leading-8 mt-2'>Rule of Law</h5>
                <p className='text-[16px] leading-6 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                <div className='flex items-center justify-between mt-8'>
                  <Button variant="Enrol_btn" className='w-[150px] h-10'>Enroll Now</Button>
                  <p className='font-semibold text-[16px]'>$400</p>
                </div>

              </div>
            </div>

            {/* 3st course */}
            <div className='w-[416px] h-[534px] gap-6 rounded-[5px] bg-[#F7F7F7]'>
              <div>
                <Image src="/img/Course_Image/Image5.svg" alt='' width={416} height={300} />
              </div>

              <div className='w-[416px] h-[210px] px-4 pb-6 gap-6'>
                <div className='flex items-center justify-between gap-2 mt-2'>
                  <p className='font-semibold text-[14px]'>Tech</p>
                  <div className='flex items-center gap-2'>
                    <Image src='/Icons/Courses_Icons/Star_1.svg' alt='Star Icon' width={16} height={16} />
                    <p className='font-semibold text-[14px]'>5.0</p>
                  </div>
                </div>

                <h5 className='font-bold text-xl leading-8 mt-2'>Introduction to webflow</h5>
                <p className='text-[16px] leading-6 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                <div className='flex items-center justify-between mt-8'>
                  <Button variant="Enrol_btn" className='w-[150px] h-10'>Enroll Now</Button>
                  <p className='font-semibold text-[16px]'>$400</p>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="xs:mt-[1100px] xs:ml-24">
        <Button variant='Enrol_btn'>View All Courses</Button>
        </div>

      </div>

      <div className='w-full h-[895px] py-[112] px-16 gap-20  flex flex-col items-center bg-[#F7F7F7] xs:mt-[110%]'>
        <div className='w-[768px] h-[109px] gap-4 xs:w-[310px]'>
          <h2 className='font-bold text-5xl leading-[57.6px] text-center'>Our team</h2>
          <p className='text-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        <div className='w-[1280px] h-[482px] gap-24 flex flex-wrap justify-center xs:w-80'>

          <div className="flex w-[1280px] h-[209px] gap-[12px] xs:flex-col xs:w-80">

            <div className='w-[394px] h-[209px] gap-6 text-center xs:w-80'>
              <div className='flex flex-col items-center mb-4 xs:w-80'>
                <Image src="/img/rate/image4.svg" alt='Image' width={80} height={80} />
              </div>
              <div className='w-[394.67px] h-14 xs:w-80'>
                <p className='font-semibold text-xl items-center'>James Nduku</p>
                <p>Marketing Coordinator</p>
              </div>
              <div className='mt-4 h-6 flex flex-row justify-center gap-[14px]'>
                <Image src='/Icons/linkedIn.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Twitter.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Vector.svg' alt='Icon' width={24} height={24} />
              </div>
            </div>

            <div className='w-[394px] h-[209px] gap-6 text-center xs:w-80'>
              <div className='flex flex-col items-center mb-4 xs:w-80'>
                <Image src="/img/rate/image0.svg" alt='Image' width={80} height={80} />
              </div>
              <div className='w-[394.67px] h-14 xs:w-80'>
                <p className='font-semibold text-xl items-center'>Joseph Munyambu</p>
                <p>Nursing Assistant</p>
              </div>
              <div className='mt-4 h-6 flex flex-row justify-center gap-[14px]'>
                <Image src='/Icons/linkedIn.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Twitter.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Vector.svg' alt='Icon' width={24} height={24} />
              </div>
            </div>


            <div className='w-[394px] h-[209px] gap-6 text-center xs:w-80'>
              <div className='flex flex-col items-center mb-4 xs:w-80'>
                <Image src="/img/rate/image.svg" alt='Image' width={80} height={80} />
              </div>
              <div className='w-[394.67px] h-14 xs:w-80'>
                <p className='font-semibold text-xl items-center'>Joseph Ngumbau</p>
                <p>Medical Assistant</p>
              </div>
              <div className='mt-4 h-6 flex flex-row justify-center gap-[14px]'>
                <Image src='/Icons/linkedIn.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Twitter.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Vector.svg' alt='Icon' width={24} height={24} />
              </div>
            </div>
            <Button variant="Enrol_btn" className='hidden xs:block'>View All</Button>

          </div>

          <div className="flex w-[1280px] h-[209px] gap-[12px] xs:hidden">

            <div className='w-[394px] h-[209px] gap-6 text-center'>
              <div className='flex flex-col items-center mb-4'>
                <Image src="/img/rate/image1.svg" alt='Image' width={80} height={80} />
              </div>
              <div className='w-[394.67px] h-14'>
                <p className='font-semibold text-xl items-center'>Erick Kipkembol</p>
                <p>Web Designer</p>
              </div>
              <div className='mt-4 h-6 flex flex-row justify-center gap-[14px]'>
                <Image src='/Icons/linkedIn.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Twitter.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Vector.svg' alt='Icon' width={24} height={24} />
              </div>
            </div>

            <div className='w-[394px] h-[209px] gap-6 text-center'>
              <div className='flex flex-col items-center mb-4'>
                <Image src="/img/rate/image2.svg" alt='Image' width={80} height={80} />
              </div>
              <div className='w-[394.67px] h-14'>
                <p className='font-semibold text-xl items-center'>Stephen Kerubo</p>
                <p>President of Sales</p>
              </div>
              <div className='mt-4 h-6 flex flex-row justify-center gap-[14px]'>
                <Image src='/Icons/linkedIn.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Twitter.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Vector.svg' alt='Icon' width={24} height={24} />
              </div>
            </div>


            <div className='w-[394px] h-[209px] gap-6 text-center'>
              <div className='flex flex-col items-center mb-4'>
                <Image src="/img/rate/image3.svg" alt='Image' width={80} height={80} />
              </div>
              <div className='w-[394.67px] h-14'>
                <p className='font-semibold text-xl items-center'>John Leboo</p>
                <p>Dog Trainer</p>
              </div>
              <div className='mt-4 h-6 flex flex-row justify-center gap-[14px]'>
                <Image src='/Icons/linkedIn.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Twitter.svg' alt='Icon' width={24} height={24} />
                <Image src='/Icons/Vector.svg' alt='Icon' width={24} height={24} />
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className='w-full h-[830.89px] py-28 px-16 gap-20 bg-[#F7F7F7] xs:px-0'>

        <div className='w-full h-[109px] gap-6'>
          <h2 className='w-[560px] font-bold text-5xl leading-[57.6px] xs:text-[32px] xs:w-80 xs:text-center'>Customer testimonials</h2>
          <p className='text-[18px] leading-[27px] xs:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='w-[1152px] h-[417.89px] xs:w-80'>
          <div className='w-[1152px] h-[321.89px] gap-8 flex xs:w-80'>

            <div className='w-[362.67px] h-[321.89px] p-8 gap-6 border-2 xs:mt-24 xs:w-80'>
              <div className='w-[116px] h-[18.89px] gap-1 flex'>
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
              </div>

              <div className='w-[298.67px] h-[215px] mt-5 xs:w-[250px]'>
                <div className='text-[18px] leading-7 mt-3 xs:w-[250px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>

                <div className='w-[254px] h-14 gap-5 flex mt-5'>
                  <div><Image src="/img/rate/image.svg" alt='picture' width={56} height={56} className='rounded-full' /></div>
                  <div className='w-[178px] h-12'>
                    <p className='font-semibold text-[16px] leading-6'>James Nduku</p>
                    <p className='text-[16px] leading-6'>Software Developer</p>
                  </div>
                </div>

              </div>
            </div>

            <div className='w-[362.67px] h-[321.89px] p-8 gap-6 border-2 xs:hidden'>
              <div className='w-[116px] h-[18.89px] gap-1 flex'>
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
              </div>

              <div className='w-[298.67px] h-[215px] mt-5'>
                <div className='text-[18px] leading-7 mt-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>

                <div className='w-[254px] h-14 gap-5 flex mt-5'>
                  <div><Image src="/img/rate/image4.svg" alt='picture' width={56} height={56} className='rounded-full' /></div>
                  <div className='w-[178px] h-12'>
                    <p className='font-semibold text-[16px] leading-6'>Erick Kipkemboi</p>
                    <p className='text-[16px] leading-6'>Scrum Master</p>
                  </div>
                </div>

              </div>
            </div>

            <div className='w-[362.67px] h-[321.89px] p-8 gap-6 border-2 xs:hidden'>
              <div className='w-[116px] h-[18.89px] gap-1 flex'>
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
                <Image src='/Icons/Black_Star.svg' alt='star' width={20} height={18.89} />
              </div>

              <div className='w-[298.67px] h-[215px] mt-5'>
                <div className='text-[18px] leading-7 mt-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>

                <div className='w-[254px] h-14 gap-5 flex mt-5'>
                  <div><Image src="/img/rate/image3.svg" alt='picture' width={56} height={56} className='rounded-full' /></div>
                  <div className='w-[178px] h-12'>
                    <p className='font-semibold text-[16px] leading-6'>Stephen Kerubo</p>
                    <p className='text-[16px] leading-6'>UI/UX Designer</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="w-[1152px] h-12 justify-between mt-12 flex xs:w-80">

            <div className='w-[72px] h-2 gap-2 flex'>
              <Image src="/Icons/Customer_Sec/Dot_B.svg" alt='Dot' width={8} height={8} />
              <Image src="/Icons/Customer_Sec/Dot.svg" alt='Dot' width={8} height={8} />
              <Image src="/Icons/Customer_Sec/Dot.svg" alt='Dot' width={8} height={8} />
              <Image src="/Icons/Customer_Sec/Dot.svg" alt='Dot' width={8} height={8} />
              <Image src="/Icons/Customer_Sec/Dot.svg" alt='Dot' width={8} height={8} />
            </div>
            <div className='w-[111px] h-12 flex gap-3'>
              <Image src="/Icons/Customer_Sec/Arrow.svg" alt='btn' width={48} height={48} />
              <Image src="/Icons/Customer_Sec/Arrow2.svg" alt='btn' width={48} height={48} />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default hero_section