import React from 'react';
import { FiDownload } from 'react-icons/fi';
import HeroImage from '../assets/Hero-image.jpg';

const Contact = () => {
  return (
    <section id="contact" aria-label="Contact">
      <div class="mx-auto lg:mt-20 mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24 xl:py-36">
          <img alt="" loading="lazy" width="919" height="1351" decoding="async" data-nimg="1" class="absolute left-1/2 top-0 translate-x-[-11%] translate-y-[-43%] lg:translate-x-[-0%]" style={{ color: "transparent" }} src={HeroImage} />
          <div class="relative mx-auto max-w-2xl gap-x-32 gap-y-14 xl:max-w-none items-center">
            <p class="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">Get In Touch</p>
            <p class="mt-4 text-lg tracking-tight max-w-md lg:max-w-2xl text-blue-900">
              I am currently open to new opportunities and invite you to reach out via email to connect and discuss potential collaborations.
            </p>
            <div className="flex flex-row flex-wrap">
              <a href="mailto:nsasadain@gmail.com" className="mt-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-500 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center rounded-md text-base text-blue-600 bg-transparent py-2 px-4 ring-1 ring-white/10 max-sm:px-2 ">
                  <span>Say Hello</span>
                  <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2563eb]"></span>
                </span>
              </a>
              <a href='/Sadain_Abdullah_N_Resume.pdf' target='_blank' className="mt-10 mx-4 px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 max-sm:px-4">
                <div className="relative flex space-x-2 items-center z-10 text-white text-base">
                  <span>Resume</span>
                  <FiDownload />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;