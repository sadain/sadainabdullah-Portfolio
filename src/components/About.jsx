import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp, FaReact, FaNodeJs, FaMixcloud, FaGitAlt, FaGithub, FaDiceD20, FaWordpress, FaFigma, FaChrome, FaSass } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import { TbArrowsTransferDown, TbShieldCode, TbTemplate, TbTransferVertical } from "react-icons/tb";
import { SiMysql, SiTailwindcss, SiAdobexd, SiPostman, SiNextdotjs, SiThreedotjs, SiGodaddy, SiGooglecloud, SiIbmwatson, SiJsonwebtokens } from "react-icons/si";
import profile from "../assets/Profile.png";

const About = () => {
  return (
    <section id="about-me" aria-labelledby="about-me-title" className="relative max-w-6xl px-4 py-10 mx-auto mb-4 md:py-20 sm:px-6 lg:px-8" >
      <h2 className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl">
        About Me
      </h2>
      <div className="flex flex-col justify-between mx-auto lg:flex-row md:flex-row md:mx-0 lg:mx-0">
        <div className="lg:w-3/5 md:w-[55%]">
          <div>
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              Hello, I'm Sadain, a skilled software engineer with a focus on creating high-quality, innovative web applications. With expertise in React.js, Next.js, and Tailwind CSS, I develop solutions that are both technically robust and user-friendly. My approach is centered on enhancing application performance and delivering engaging digital experiences. I thrive in agile environments where collaborative problem-solving and efficiency are key.
            </p>
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              In my professional journey, I've successfully managed diverse projects, leveraging my technical expertise and collaborative spirit. I excel in fast-paced environments, where I utilize agile methodologies to deliver high-quality software solutions. My dedication to excellence drives me to produce work that is both functional and aesthetically pleasing, ensuring optimal performance and user satisfaction.
            </p>
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              My goal is to continually push the boundaries of what's possible in web development, delivering solutions that are not only functional but also visually appealing and intuitive for end-users.
            </p>
            <p className="mt-4 text-xl tracking-tight text-blue-900 font-display">
              Here are the technologies with which I've been working:
            </p>
          </div>
          <div>
            <p className="mt-4 text-xl tracking-tight text-black font-display">
              Programming Languages:
            </p>
            <div className="relative flex flex-wrap py-2 mb-2">
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><DiJavascript className="text-yellow-500" /> <span>JavaScript</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaJava className="text-red-500" /> <span>Core Java</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaPython className="text-cyan-800" /> <span>Python</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaPhp className="text-indigo-900 text" /> <span>PHP</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiMysql className="text-cyan-800" /> <span>MySQL</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaHtml5 className="text-orange-500" /> <span>HTML5</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaCss3Alt className="text-blue-500" /> <span>CSS3</span></span>
            </div>
            <p className="mt-2 text-xl tracking-tight text-black font-display">
              Libraries & Frameworks:
            </p>
            <div className="relative flex flex-wrap py-2 mb-2">
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaReact className="text-sky-600" /> <span>React</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiNextdotjs className="text-black" /> <span>Next Js</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaNodeJs className="text-green-700" /> <span>Node Js</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiTailwindcss className="text-sky-500" /> <span>Tailwind CSS</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaSass className="text-pink-500" /> <span>SASS</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaMixcloud className="text-sky-500" /> <span>Rest API</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><BsFiletypeJson className="text-indigo-900" /> <span>JSON</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiJsonwebtokens className="text-red-500" /> <span>JWT</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiThreedotjs className="text-black" /> <span>Three Js</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><TbArrowsTransferDown className="text-sky-500" /> <span>SSE</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><TbTransferVertical className="text-sky-500" /> <span>Websocket</span></span>
            </div>
            <p className="mt-4 text-xl tracking-tight text-black font-display">
              Tools & Platforms:
            </p>
            <div className="relative flex flex-wrap py-4 mb-2">
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaGitAlt className="text-orange-600" /> <span>Git</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaGithub className="text-black" /> <span>GitHub</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaDiceD20 className="text-sky-500" /> <span>Netlify</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiGodaddy className="text-[#1bdbdb]" /> <span>GoDaddy</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiGooglecloud className="text-blue-500" /> <span>GCP</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaWordpress className="text-sky-700" /> <span>WordPress</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaFigma className="text-black" /> <span>Figma</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiPostman className="text-orange-500" /> <span>Postman</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiAdobexd className="text text-fuchsia-800" /> <span>Adobe XD</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiIbmwatson className="text-violet-500" /> <span>IBM Watson</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaChrome className="text-blue-500" /> <span>Chrome Dev Tool</span></span>
              <span className="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><TbTemplate className="text-black" /> <span>Wireframing</span></span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:w-1/3 md:w-2/5 lg:mt-0">
          <div className="relative md:order-2 h-fit before:absolute before:inset-0 before:z-10 before:border before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg" >
            <div className="relative w-full overflow-hidden h-fit rounded-xl">
              <img className="object-center rounded-lg shadow-lg" src={profile} alt="About Me" />
              <div className="absolute top-0 start-full -z-[1] w-60 h-20 bg-blue-100 blur-[100px] -translate-y-full -translate-x-1/2"></div>
              <div className="absolute top-0 start-full -z-[1] w-60 h-20 bg-purple-100 blur-[100px] -translate-y-full -translate-x-1/2"></div>
              <div className="absolute top-1/2 start-1/2 -z-[1] w-60 h-32 bg-purple-100 blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute -bottom-40 -end-24 -z-[1] w-60 h-32 bg-blue-200 blur-[100px]"></div>
              <div className="absolute -bottom-[635px] -end-[635px] -z-[1] w-[635px] h-[635px] border border-dashed border-violet-200 rounded-full transform -translate-y-[255px] -translate-x-[310px] opacity-40"></div>
              <div className="absolute -bottom-[490px] -end-[490px] -z-[1] w-[490px] h-[490px] border border-dashed border-violet-200 rounded-full transform -translate-y-[190px] -translate-x-[240px] opacity-60"></div>
              <div className="absolute -bottom-[340px] -end-[340px] -z-[1] w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full transform -translate-y-[120px] -translate-x-[170px] opacity-80"></div>
              <div className="absolute -bottom-[200px] -end-[200px] -z-[1] w-[200px] h-[200px] border border-dashed border-violet-200 rounded-full transform -translate-y-[60px] -translate-x-[100px]"></div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default About;