import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import mobileScreen from './assets/images/iPhone_screen.png'

const App = () => {
  return (
    <>
      <nav className='mx-auto sm:flex sm:flex-row flex-col sm:justify-between'>
        <img alt='logo' className='sm:w-auto sm:py-6 sm:mx-4 justify-center my-4 sm:my-0 place-self-center' />

        <ul className='flex sm:mx-4 space-x-2 text-center text-[14px] sm:text-[1.1rem] justify-center my-7'>
          <li className='md:mx-2'>About</li>
          <li className='md:mx-2'>Pricing</li>
          <li className='md:mx-2'>Gallery</li>
          <li className='md:mx-2'>Endorsments</li>
          <li className='md:mx-2'>Resources</li>
          <li className='md:mx-2'>Contact</li>
        </ul>
      </nav>
      <main>
        <section id='hero' className='justify-center' >
          <div className='lg:ml-[7rem] xl:ml-[8rem] md:ml-[5rem] sm:ml-[5rem] ml-[2.25rem] mt-3'>
            <h1 className='font-display font-semibold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl'> Your Driving Journey</h1>
          </div>
          <div className='flex flex-col bg-cover bg-bottom min-h-[300px] md:h-[500px] sm:h-[400px] lg:h-[700px] 2xl:w-[1700px] max-w-[1920px] bg-[url(./assets/images/title_img.png)] rounded-4xl sm:mx-17 lg:mx-25 mx-6 mt-[-.5rem] lg:mt-[-1rem]' >
            <div className='lg:ml-[1rem] xl:ml-[2rem] md:ml-[1rem] sm:ml-[1rem] ml-[1rem]'>
              <div className='flex space-x-2'>
                <h1 className='font-display text-white italic font-semibold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl'>Starts</h1>
                <h1 className='bg-yellow-300/20 px-1 font-display text-white italic font-semibold xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl'>Here</h1>
              </div>
              <h3 className='text-shadow-md font-display font-normal text-white xl:text-3xl lg:text-2xl text-[1rem]/5'>Whether you're a complete beginner or brushing up your skills, I'm here to guide you every step of the way—with patience, experience, and a focus on safe, confident driving. </h3>
            </div>
            <div className='place-content-end min-w-full flex flex-1'>
              <button className='shadow-2xl rounded-2xl flex p-2 sm:px-5 bg-linear-to-r from-tur_blue to-blue_sky place-self-end mx-[2rem] lg:mx-[4rem] my-6 sm:my-10 lg:my-15 '>
                <h1 className='text-white pl-2 sm:text-2xl'>Get in Touch</h1>
                <SlArrowRight className='inline sm:text-2xl text-lg text-white sm:mt-1.5  mt-0.75 ml-2 ' />
              </button>
            </div>
          </div>
        </section>
        <section className=' mt-13 sm:px-14 md:px-17 lg:px-25 xl:px-50 py-7'>
          <div className='flex flex-col '>
            <img src={mobileScreen} alt="mobile screen" className='z-20 w-30 sm:w-50 lg:w-75 self-center absolute ' />
            <div className='flex flex-col mt-8 sm:mt-16 lg:mt-25'>
              <div id='Triangle' className="w-0 h-0 
              border-l-[60px] sm:border-l-[95px] lg:border-l-[140px] border-l-transparent
              border-b-[60px] sm:border-b-[90px] lg:border-b-[130px] border-b-[#274060]
              border-r-[60px] sm:border-r-[95px] lg:border-r-[140px] border-r-transparent self-center z-10">
              </div>
              <div className='size-28 sm:size-47 lg:size-67 mt-[-1.6rem] sm:mt-[-3.5rem] lg:mt-[-5.5rem] bg-[#6AF5F1] self-center absolute rounded-2xl sm:rounded-3xl lg:rounded-4xl z-0' />
              <div className='bg-[#274060] w-full rounded-2xl h-[20rem] sm:h-[22rem] lg:h-[32rem] z-10 mt-[-.25rem] '>
                <div className='flex sm:flex-row flex-col text-center place-items-center sm:place-items-stretch' >
                  <div className='flex flex-col flex-1 h-full place-items-center font-display min-w-[127px] order-2 sm:order-1 mt-5 sm:mt-0'>
                    <h1 className='font-medium text-white text-[1.5rem]'>About</h1>
                    <p className='text-white font-light text-[16px]/4  px-2'>
                      "Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do
                      eiusmodtempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim
                      veniam, "Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do
                      eiusmodtempor incididunt ut labore.
                    </p>
                  </div>
                  <div className='flex flex-col flex-initial w-30 sm:w-50 lg:w-75 font-display order-1 sm:order-2 place-items-center'>
                    <div className='place-self-center sm:text-2xl sm:-mt-10 lg:text-5xl lg:-mt-15 z-10'>
                      <h1 className='font-display text-[#BABDFF] font-medium -mt-9 -ml-2 sm:-ml-4'>Hi, I'm</h1>
                      <h1 className='font-display text-white font-medium -mt-2.5 sm:text-4xl lg:text-6xl'> Steph</h1>
                    </div>
                    <div className='place-self-center bg-gray-600 size-20 sm:size-35 lg:size-50 -mt-2 sm:-mt-3 rounded-2xl place-content-center'>
                      <img src="" alt="Picture of steph" className='text-center text-[15px]' />
                    </div>
                    <div className='place-self-center flex flex-col text-white  text-[0.75rem] sm:text-[1.25rem] lg:text-[2rem]'>
                      <button className='flex place-self-center my-0.5 mt-1 bg-[#0FA3B1] rounded-full p-1 sm:px-2'>
                        <h2 className='ml-0.5'>Message Me</h2>
                        <SlArrowRight className='inline text-sm mt-0.5 ml-1 sm:text-lg sm:mt-1.5 lg:text-3xl lg:mt-2.5' />
                      </button>
                      <button className='flex justify-center my-0.5 bg-[#8789C0] rounded-full p-1 sm:px-2 w-full'>
                        <div className='flex'>
                          <h2 className='ml-0.5'>See Pricing</h2>
                          <SlArrowRight className='inline text-sm mt-0.5 ml-1 sm:text-lg sm:mt-1.5 lg:text-3xl lg:mt-2.5' />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className='flex-1 flex flex-col h-full order-3'>
                    <h1>hello</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main >

    </>
  )
}

export default App