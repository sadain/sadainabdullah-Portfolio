import React from 'react'

const Footer = () => {
  return (
    <section className="relative mt-20">
      <div className="z-10 mx-auto relative">
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden"><div className="absolute -right-8 bottom-0 -left-8 h-px bg-blue-600/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div></div>
        <div className="absolute bottom-0 lg:left-[38%] sm:left-20 flex h-8 items-end overflow-hidden"><div className="flex -mb-px h-[5px] w-80 -scale-x-100"><div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div><div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div></div></div>
      </div>
      <div className="mx-auto relative min-h max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">

      <p class="pt-5 pb-5 xpx-40 text-center font-display text-lg tracking-tight text-blue-900">
        {/* Loosely designed in Figma and coded in <span className='text-blue-600 hover:border-b-2 hover:border-blue-600 hover:transition'>Visual Studio</span> Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface. */}
      Designed & Developed by Sadain Abdullah - 2023
      </p>
      </div>
    </section>
  )
}

export default Footer;