import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { RxOpenInNewWindow } from 'react-icons/rx'
import IMSImage from '../assets/INVENTORY MANAGEMENT SYSTEM.png';
import SocioAiImage from '../assets/AI Based Chatbot.png';

const FeaturedProjects = () => {
  return (
    <div className='mx-auto relative min-h-full max-w-screen-xl px-6 font-sans md:px-12 lg:px-24'>
        <div id='projects' className='mx-auto py-10'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 class="mx-auto max-w-2xl lg:text-center md:text-center font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">Some Things I Have Built</h2>
            {/* <p className="mt-4 lg:text-center md:text-center font-display text-lg tracking-tight text-blue-900">I build exceptional and accessible digital experiences for the web.</p> */}
          </div>
          <div className='w-full flex flex-col items-center justify-center gap-28 mt-20'>
            {/* Project 1 */}
            <div className='flex flex-col xl:flex-row gap-6'>
              {/* <a href="#" target='_blank' className='w-full xl:w-1/2 relative'> */}
                <div className='w-full xl:w-1/2 relative h-[400px] overflow-hidden'>
                  <img className='w-full object-contain cursor-pointer translate-y-0 hover:-translate-y-[calc(100%-410px)] duration-[10000ms]'
                    src={IMSImage}
                    // "https://brittany-chiang-portfolio-clone.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmdEats.b29597d2.png&w=1920&q=75&dpl=dpl_85EUkBHcDt3NBw37MhGoTix67Ws1"
                    alt='Sports website'
                  />
                </div>
              {/* </a> */}
              <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:items-end text-left xl:-ml-16 z-10'>
                <p className='text-sm -mb-3 font-semibold text-slate-800 tracking-wide'>Featured Project</p>
                <h3 className='text-4xl font-medium tracking-tighter text-blue-600'>Inventory Management System</h3>
                <p className='lg:bg-[#eef2ff]/90 md:text-base text-sm lg:p-6 rounded-xl lg:text-right '>
                    I developed a comprehensive Inventory Management System using React.js, showcasing my proficiency in front-end development. With a focus on delivering an exceptional user experience, I implemented a polished UI design. My commitment to excellence is evident in the robust and efficient codebase, reflecting a high standard of coding practices.
                </p>
                <ul class="lg:mt-2 flex flex-wrap lg:max-w-[30rem] lg:justify-end" aria-label="Technologies used">
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">React</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">JavaScript</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">HTML</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">CSS(SCSS)</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Tailwind CSS</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">React Hooks Form</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Tanstack Query </div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Rest API</div>
                  </li>
                </ul>
                <div className='text-2xl flex gap-3'>
                  {/* <a href="https://github.com/GeorgeMuigai" target='_blank' className='hover:text-blue-600'>
                    <FiGithub />
                  </a> */}
                  <a href="https://dtsapp.azurewebsites.net/" target='_blank' className='hover:text-blue-600 group relative w-auto'>
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
              {/* <a href="#" target='_blank' className='w-full xl:w-1/2 relative'> */}
                <div className='h-[400px] xl:w-1/2 relative w-full overflow-hidden'>
                  <img className='w-full object-contain cursor-pointer translate-y-0 hover:-translate-y-[calc(100%-410px)] duration-[10000ms]'
                    src={SocioAiImage}
                    // "https://brittany-chiang-portfolio-clone.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmdEats.b29597d2.png&w=1920&q=75&dpl=dpl_85EUkBHcDt3NBw37MhGoTix67Ws1"
                    alt='Sports website'
                  />
                </div>
              {/* </a> */}
              <div className='w-full xl:w-1/2 flex flex-col gap-6  text-left  z-10'>
                <p className='text-sm -mb-3 font-semibold text-slate-800 tracking-wide'>Featured Project</p>
                <h3 className='text-4xl font-medium tracking-tighter  text-blue-600'>Socio - Ai Based Discourse For Banking Industry</h3>
                <p className='lg:bg-[#eef2ff]/90 md:text-base text-sm lg:p-6 rounded-xl xl:-mr-16'>
                The Chatbot enables users to interact and receive answers to common banking questions, offering customer support. Capable of handling multiple inquiries simultaneously, it provides rapid responses to frequently asked queries and can be updated to cover new features or services introduced by the bank.
                </p>
                <ul class="lg:mt-2 flex flex-wrap lg:max-w-[30rem]" aria-label="Technologies used">
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Python</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Flask</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">HTML</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">CSS</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">JavaScript</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">IBM Cloud</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">IBM Watson Assistant</div>
                  </li>
                  <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Testing</div>
                  </li>
                </ul>
                <div className='text-2xl flex gap-3'>
                  <a href="https://github.com/sadain/IBM-Project-12106-1659372335" target='_blank' className='hover:text-blue-600'>
                    <FiGithub />
                  </a>
                  <a href="http://socio.epizy.com/" target='_blank' className='hover:text-blue-600 group relative w-auto'>
                    <RxOpenInNewWindow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FeaturedProjects