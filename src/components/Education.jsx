import React from 'react';

const Education = () => {
  return (
    <div className="mx-auto relative min-h max-w-screen-xl px-6 py-2 font-sans md:px-12 md:py-0 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between md:py-12 lg:py-0">
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
              My Education
            </h2>
            <p className="mt-4 max-w-xs font-display text-lg tracking-tight text-blue-900">Acquired tech skills through coursework, enhanced communication, and problem-solving.</p>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 " href="#BachelorDegree">
                    <span className="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-blue-600 group-focus-visible:w-16 group-focus-visible:bg-blue-600 motion-reduce:transition-none"></span>
                    <span className="nav-text text-base font-bold uppercase tracking-widest text-black group-hover:text-blue-600 group-focus-visible:text-blue-600">Bachelor Of Engineering</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 active" href="#12th">
                    <span className="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-blue-600 group-focus-visible:w-16 group-focus-visible:bg-blue-600 motion-reduce:transition-none"></span>
                    <span className="nav-text text-base font-bold uppercase tracking-widest text-black group-hover:text-blue-600 group-focus-visible:text-blue-600">12th - HSSC</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 active" href="#10th">
                    <span className="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-blue-600 group-focus-visible:w-16 group-focus-visible:bg-blue-600 motion-reduce:transition-none"></span>
                    <span className="nav-text text-base font-bold uppercase tracking-widest text-black group-hover:text-blue-600 group-focus-visible:text-blue-600">10th - SSLC</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="content" className="pt-12 md:pt-2 lg:w-1/2 lg:py-24 lg:pt-0">
          <section id="experience" className="mb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div>
              <ol className="group/list">
                <li id="BachelorDegree" className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="bg-white/20 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-transparent lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2019 to 2023">2019 — 2023</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div className='font-medium leading-tight text-base text-black hover:text-blue-600'>
                          {/* <a className="inline-flex items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://tflex.tech/" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)"> */}
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover:shadow-md hover:border-2 hover:border-blue-600"></span>
                          <span>
                            Priyadarshini Engineering College -
                            <span className="inline-block">
                              Anna University
                              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg> */}
                            </span>
                          </span>
                          {/* </a> */}
                        </div>
                      </h3>
                      <h3 className="font-semibold mt-2 tracking-wide text-black">BE. Computer Science and Engineering</h3>
                      <h3 className="font-semibold mt-2 tracking-wide text-black">CGPA: 8.59 / 10</h3>
                      {/* <p className="mt-2 text-base leading-normal">Content</p> */}
                    </div>
                  </div>
                </li>
                <li id="12th" className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="bg-white/20 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-transparent lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2019 to 2023">2019 — 2023</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div className='font-medium leading-tight text-base text-black hover:text-blue-600'>
                          {/* <a className="inline-flex items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://tflex.tech/" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)"> */}
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover:shadow-md hover:border-2 hover:border-blue-600"></span>
                          <span>
                            Islamiah Higher Secondary School
                            <span className="inline-block">
                              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg> */}
                            </span>
                          </span>
                          {/* </a> */}
                        </div>
                      </h3>
                      <h3 className="font-semibold mt-2 tracking-wide text-black">12th - Higher Secondary School Certificate</h3>
                      {/* <h3 className="font-semibold mt-2 tracking-wide text-black">Percentage: 63.6%</h3> */}
                      {/* <p className="mt-2 text-base leading-normal">Content</p> */}
                    </div>
                  </div>
                </li>
                <li id="10th" className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="bg-white/20 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-transparent lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2019 to 2023">2019 — 2023</header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div className='font-medium leading-tight text-base text-black hover:text-blue-600'>
                          {/* <a className="inline-flex items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://tflex.tech/" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)"> */}
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover:shadow-md hover:border-2 hover:border-blue-600"></span>
                          <span>
                            Islamiah Higher Secondary School
                            <span className="inline-block">
                              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                </svg> */}
                            </span>
                          </span>
                          {/* </a> */}
                        </div>
                      </h3>
                      <h3 className="font-semibold mt-2 tracking-wide text-black">10th - Secondary School Leaving Certificate</h3>
                      {/* <h3 className="font-semibold mt-2 tracking-wide text-black">Percentage: 78.6%</h3> */}
                      {/* <p className="mt-2 text-base leading-normal">Content</p> */}
                    </div>
                  </div>
                </li>
              </ol>
              <div className="mt-12">
                <a className="inline-flex items-center font-semibold leading-tight text-slate-500 group" aria-label="View Full Résumé" href="/Sadain_Abdullah_N_Resume.pdf" target="_blank" rel="noreferrer noopener">
                  <span>
                    <span className="whitespace-nowrap">
                      <span className="border-b border-transparent pb-px transition group-hover:border-blue-300 motion-reduce:transition-none">View Full Resume</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                        <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Education;