import React from 'react';
import { FiDownload } from 'react-icons/fi';
import HeroImage from '../assets/Hero-image.jpg';

const Intro = () => {
    return (
        <main className="flex-auto">
            <div className="relative py-20 sm:pb-24 sm:pt-36">
                <div className="absolute inset-0 overflow-hidden bg-indigo-50 -bottom-14 -top-36">
                    <img src={HeroImage} alt="" fetchpriority="high" width="918" height="1495" decoding="async" data-nimg="1" className="absolute top-0 left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]" style={{ color: "transparent" }} />
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                        <p className="font-mono text-base text-blue-600">
                            Hi, my name is
                        </p>
                        <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
                            Sadain Abdullah.
                        </h1>
                        <h1 className="font-display text-5xl font-bold tracking-tighter text-[#7194e1] sm:text-7xl">
                            I build things for the web.
                        </h1>
                        <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
                            <p>
                                I’m a software engineer specializing in building and designing exceptional digital experiences. My focus is on developing accessible and human-centered products, specializing in robust web application construction.
                            </p>
                        </div>

                        <div className="flex flex-row flex-wrap">
                            <a className="mt-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-500 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block" aria-label="View Full Résumé" href="mailto:nsasadain@gmail.com">
                                <span className="absolute inset-0 overflow-hidden rounded-md">
                                    <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center rounded-md text-base text-blue-600 bg-transparent py-2 px-4 ring-1 ring-white/10 max-sm:px-2 ">
                                    <span>Say Hello!</span>
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
                            <a href="/sadain_abdullah_resume.pdf" className="mt-10 mx-4 px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 max-sm:px-4" target='_blank'>
                                <div className="relative flex space-x-2 items-center z-10 text-white text-base">
                                    <span>Resume</span>
                                    <FiDownload />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Intro;