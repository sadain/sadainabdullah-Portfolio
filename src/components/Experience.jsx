import React from 'react';
import HeroImage from '../assets/Hero-image.jpg';
import { Education } from ".";

const Experience = () => {
  return (
    <div className="relative">
      <div className="z-10 mx-auto relative">
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden"><div className="absolute -right-8 bottom-0 -left-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div></div>
        <div className="absolute bottom-0 lg:left-44 sm:left-20 flex h-8 items-end overflow-hidden"><div className="flex -mb-px h-[2px] w-80 -scale-x-100"><div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div><div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div></div></div>
      </div>

      <div className="absolute inset-0 overflow-hidden bg-indigo-50 -bottom-2 -top-10 align">
        <img alt="" fetchpriority="high" width="918" height="1495" decoding="async" data-nimg="1" className="absolute top-0 left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[5%]" style={{ color: "transparent" }} src={HeroImage} />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>

      <div className="mx-auto relative min-h max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:pb-0">
            <div>
              <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                Where I’ve Worked
              </h2>
              {/* <h2 className="mt-3 text-lg font-medium tracking-tight text-blue-800 sm:text-xl">Front-End Engineer</h2> */}
              <p className="mt-4 max-w-xs font-display text-lg tracking-tight text-blue-900">I build exceptional and accessible digital experiences for the web.</p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3 " href="#tflex">
                      <span className="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-blue-600 group-focus-visible:w-16 group-focus-visible:bg-blue-600 motion-reduce:transition-none"></span>
                      <span className="nav-text text-base font-bold uppercase tracking-widest text-black group-hover:text-blue-600 group-focus-visible:text-blue-600">TFLEX</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3 active" href="#SafproTechnologySolutions">
                      <span className="nav-indicator mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-blue-600 group-focus-visible:w-16 group-focus-visible:bg-blue-600 motion-reduce:transition-none"></span>
                      <span className="nav-text text-base font-bold uppercase tracking-widest text-black group-hover:text-blue-600 group-focus-visible:text-blue-600">Safpro Technology Solutions</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24 lg:pb-2">
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <div>
                <ol className="group/list">
                  <li id="tflex" className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="bg-white/20 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-transparent lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="OCT to Present">OCT — Present</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600 group/link text-base" href="https://tflex.tech/" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover:shadow-md hover:border-2 hover:border-blue-600"></span>
                              <span>
                                Software Engineer -
                                <span className="inline-block">
                                  TFLEX (Freelancing Agency)
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <span className="font-semibold tracking-wide text-slate-500">Founding Member</span>
                        <p className="mt-2 text-base leading-normal">Deliver high-quality, robust production code for a diverse array of projects for clients including Mina Herbes, Tanza Tradings, Online Tutor Al-Qamar, Srikanth Academy, Charity Trust from US, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">JavaScript</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">HTML</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">CSS</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Tailwind CSS</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">WordPress</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Java</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li id="SafproTechnologySolutions" className="mb-12">
                    <div className="group  relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="bg-white/20 hover:bg-white/60 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-transparent lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="JAN to AUG 2023">JAN — AUG 2023</header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-black hover:text-blue-600 focus-visible:text-blue-600  group/link text-base" href="https://safprotech.com/" target="_blank" rel="noreferrer noopener" aria-label="Lead Engineer at Upstatement (opens in a new tab)">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl md:-inset-x-6 md:-inset-y-4 lg:block lg:group-hover:shadow-md hover:border-2 hover:border-blue-600"></span>
                              <span>
                                JR. Software Engineer -
                                <span className="inline-block">
                                  Safpro Technology Solutions
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-base leading-normal">Developed, maintained, and deployed production code for client websites, including Smashit, Taha USA, DTS Machinery, Alwaseeq, and more. Collaborated with designers and developers to ensure consistent and user-friendly experiences across web applications.</p>
                        {/* <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                        <li className="mr-4">
                          <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-500 focus-visible:text-blue-500" href="https://link" target="_blank" rel="noreferrer noopener" aria-label="link name (opens in a new tab)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                            </svg>
                            <span>Link</span>
                          </a>
                        </li>
                      </ul> */}
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">JavaScript</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Rest API</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">HTML</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">CSS</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">Tailwind CSS</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">PHP</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">WordPress</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">MySQL</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className="mt-12">
                  <a className="inline-flex items-center font-semibold leading-tight text-slate-500 group" aria-label="View Full Résumé" href="/Sadain_Abdullah_N_Resume.pdf" target="_blank" rel="noreferrer noopener" >
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

      <Education />

    </div>
  )
}

export default Experience;