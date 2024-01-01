import React from 'react'

const Projects = () => {
  return (
    <div className='relative'>
      <div className="absolute inset-0 overflow-hidden bg-indigo-50 -bottom-2 -top-10">
        <svg aria-hidden="true" class="absolute text-blue-200  inset-0 h-full w-full"><defs><pattern id=":S4:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" patternTransform="translate(0 80)"><path d="M0 128V.5H128" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:S4:)"></rect></svg>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      <section className='mx-auto relative min-h-full max-w-screen-xl px-6 font-sans md:px-12 lg:px-24'>
        <div id='projects' className='mx-auto py-10'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 class="mx-auto max-w-2xl mt-10 lg:text-center md:text-center font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">Other Noteworthy Projects</h2>
            <p className="mt-4 lg:text-center md:text-center font-display text-lg tracking-tight text-blue-900">I build exceptional and accessible digital experiences for the web.</p>
          </div>
          <ul class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3 md:grid-cols-1">
            <li>
              <ul class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white border-2 hover:border-2 border-transparent hover:border-blue-600 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote class="relative">
                      <div>
                        <a class="inline-flex mb-2 items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="http://srikanth.net.in/" target="_blank" rel="noreferrer noopener" aria-label="Srikanth Trading Company Website (opens in a new tab)">
                          <span className='text-lg'>
                            Learning Management Website
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <p class="text-lg tracking-tight text-slate-900">
                        Developed a user-friendly Learning Management System using WordPress, featuring seamless payment gateway integration and a highly intuitive user interface design.
                      </p>
                    </blockquote>
                    <figcaption class="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                      <div>
                        <div class="font-display text-base lg:max-w-[15rem] text-slate-900">WordPress - HTML - CSS - JavaScript - PHP</div>
                      </div>
                      <div class="bg-slate-50">
                        <div class="text-2xl flex gap-3">
                          {/* <a href="https://github.com/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> */}
                          <a href="http://srikanth.net.in/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600 group relative w-auto"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg>
                          </a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure class="relative rounded-2xl bg-white border-2 hover:border-2 border-transparent hover:border-blue-600 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote class="relative">
                      <div>
                        <a class="inline-flex mb-2 items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://github.com/sadain/Online-Order-Filtration-System" target="_blank" rel="noreferrer noopener" aria-label="Online Order Filtration System (opens in a new tab)">
                          <span className='text-lg'>
                            Online Order Filtration System
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <p class="text-lg tracking-tight text-slate-900">
                        Innovative Online Order Filtration System optimizing efficiency and accuracy in processing orders through intelligent filtering mechanisms.
                      </p>
                    </blockquote>
                    <figcaption class="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                      <div>
                        <div class="font-display text-base lg:max-w-[15rem] text-slate-900">PHP - MySQL - HTML - CSS - Material UI</div>
                      </div>
                      <div class="bg-slate-50">
                        <div class="text-2xl flex gap-3">
                          <a href="https://github.com/sadain/Online-Order-Filtration-System" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                          {/* <a href="https://github.com/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600 group relative w-auto"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg></a> */}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            
            <li>
              <ul class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white border-2 hover:border-2 border-transparent hover:border-blue-600 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote class="relative">
                      <div>
                        <a class="inline-flex mb-2 items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://smashitonline.in/" target="_blank" rel="noreferrer noopener" aria-label="Smashit Online E-Commerce Website (opens in a new tab)">
                          <span className='text-lg'>
                            E-Commerce Website
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <p class="text-lg tracking-tight text-slate-900">
                        Engineered a dynamic E-Commerce website using WordPress, focusing on streamlined user experiences and efficient online transactions.
                      </p>
                    </blockquote>
                    <figcaption class="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                      <div>
                        <div class="font-display text-base lg:max-w-[15rem] text-slate-900">WooCommerce - HTML - CSS - PHP - MySQL - WordPress</div>
                      </div>
                      <div class="bg-slate-50">
                        <div class="text-2xl flex gap-3">
                          {/* <a href="https://github.com/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> */}
                          <a href="https://smashitonline.in/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600 group relative w-auto"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg>
                          </a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure class="relative rounded-2xl bg-white border-2 hover:border-2 border-transparent hover:border-blue-600 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote class="relative">
                      <div>
                        <a class="inline-flex mb-2 items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://al-qamar.in/" target="_blank" rel="noreferrer noopener" aria-label="Online Tutor Website (opens in a new tab)">
                          <span className='text-lg'>
                            Online Tutor Website
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <p class="text-lg tracking-tight text-slate-900">
                        Developed an intuitive online tutoring platform streamlining the booking process for personalized educational sessions, enhancing learning accessibility and efficiency.
                      </p>
                    </blockquote>
                    <figcaption class="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                      <div>
                        <div class="font-display text-base lg:max-w-[15rem] text-slate-900">HTML - CSS - JavaScript - Google Forms</div>
                      </div>
                      <div class="bg-slate-50">
                        <div class="text-2xl flex gap-3">
                          {/* <a href="https://github.com/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> */}
                          <a href="https://al-qamar.in/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600 group relative w-auto"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg></a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>

            <li>
              <ul class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative rounded-2xl bg-white border-2 hover:border-2 border-transparent hover:border-blue-600 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote class="relative">
                      <div>
                        <a class="inline-flex mb-2 items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="http://cybot.epizy.com/" target="_blank" rel="noreferrer noopener" aria-label="Cyber Security Bot System (opens in a new tab)">
                          <span className='text-lg'>
                            Smart Cyber Security Bot System
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <p class="text-lg tracking-tight text-slate-900">
                        Innovative Security bot orchestrating EDR, SIEM, WiFi-scanning, and SOC Dashboard for threat mitigation and real-time security intelligence.
                      </p>
                    </blockquote>
                    <figcaption class="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                      <div>
                        <div class="font-display text-base lg:max-w-[15rem] text-slate-900">Python - HTML - CSS - JavaScript - XML - Power BI - PHP - Bash</div>
                      </div>
                      <div class=" bg-slate-50">
                        <div class="text-2xl flex gap-3">
                          <a href="https://github.com/sadain/CYBOT---Smart-Cyber-Security-Bot-System" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                          <a href="http://cybot.epizy.com/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600 group relative w-auto"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg>
                          </a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure class="relative rounded-2xl bg-white border-2 hover:border-2 border-transparent hover:border-blue-600 p-6 shadow-xl shadow-slate-900/10">
                    <blockquote class="relative">
                      <div>
                        <a class="inline-flex mb-2 items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://tahausa.org/" target="_blank" rel="noreferrer noopener" aria-label="Charitable trust website (opens in a new tab)">
                          <span className='text-lg'>
                            Charitable trust website
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                      <p class="text-lg tracking-tight text-slate-900">
                        Designed and launched a charitable trust website for effective donation campaigns.
                        {/* Developed a dynamic website for a charitable trust, facilitating seamless donation campaigns and enhancing donor engagement. */}
                      </p>
                    </blockquote>
                    <figcaption class="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-2">
                      <div>
                        <div class="font-display text-base lg:max-w-[15rem] text-slate-900">HTML - CSS - JavaScript - WordPress - PHP - Api - Payment Gateway</div>
                      </div>
                      <div class=" bg-slate-50">
                        <div class="text-2xl flex gap-3">
                          {/* <a href="https://github.com/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a> */}
                          <a href="https://tahausa.org/" target="_blank" rel="noreferrer noopener" class="hover:text-blue-600 group relative w-auto"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="currentColor"></path></svg></a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
          <div class="text-center mt-12 lg:mt-12">
            <div class="inline-block bg-white border shadow-sm rounded-full">
              <div class="py-3 px-4 flex items-center gap-x-2">
                <p class="text-gray-600">
                  Archived Project
                </p>
                <a class="inline-flex items-center font-semibold leading-tight text-slate-500 group hover:text-blue-600" aria-label="Archived Project" href="#projects">
                  <span class="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">
                    View All
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects