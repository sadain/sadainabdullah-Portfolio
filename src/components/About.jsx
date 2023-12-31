import React from 'react'
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp, FaReact, FaNodeJs, FaMixcloud, FaGitAlt, FaGithub , FaDiceD20, FaWordpress, FaFigma, FaChrome} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import { TbTemplate } from "react-icons/tb";
import { SiMysql, SiTailwindcss, SiJsonwebtokens, SiAdobexd, SiPostman } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
import profile from "../assets/Profile.png";

const About = () => {
  return (
    <section
      id="about-me"
      aria-labelledby="about-me-title"
      className="py-20 sm:py-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative"
    >
      <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row md:flex-row justify-between mx-auto md:mx-0  lg:mx-0">
        <div className="lg:w-3/5 md:w-[55%]">
          <div>
            <p className="mt-4 font-display text-xl tracking-tight text-blue-900">
              Hello, I'm Sadain and I enjoy creating things that live on the internet. I'm dedicated software engineer specializing in React.js, particularly in web application development. With a passion for collaborative problem-solving, I consistently exceed project expectations.
            </p>
            <p className="mt-4 font-display text-xl tracking-tight text-blue-900">
              As a freelancer, I bring a results-driven mindset to diverse projects. I'm also a founding member of TFLEX, combining an entrepreneurial spirit with technical proficiency. My track record in web application development, coupled with leadership roles, underscores a commitment to excellence and innovation in every endeavor.
            </p>
            <p className="mt-4 font-display text-xl tracking-tight text-blue-900">
              My goal is always to build applications that are scalable and efficient under the hood while also providing engaging, pixel-perfect user experiences.
            </p>
            <p className="mt-4 font-display text-xl tracking-tight text-blue-900">
            Here are the technologies with which I've been working:
            </p>
          </div>
          <div>
            <p className="mt-4 font-display text-xl tracking-tight text-black">
              Programming Languages:
            </p>
            <div className="py-2 flex flex-wrap mb-2 relative">
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><DiJavascript className="text-yellow-500" /> <span>JavaScript (ES6)</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaHtml5 className="text-orange-500" /> <span>HTML5</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaCss3Alt className="text-blue-500" /> <span>CSS3/SCSS</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaJava className="text-red-500" /> <span>Core Java</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaPython className="text-cyan-800" /> <span>Python</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaPhp className="text text-indigo-900" /> <span>PHP</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiMysql className="text-cyan-800" /> <span>MySQL</span></span>
            </div>
            <p className="mt-2 font-display text-xl tracking-tight text-black">
              Libraries & Frameworks:
            </p>
            <div className="py-2 flex flex-wrap mb-2 relative">
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaReact className="text-sky-600" /> <span>React</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiTailwindcss className="text-sky-500" /> <span>Tailwind CSS</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaNodeJs className="text-green-700" /> <span>Node Js</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaMixcloud className="text-sky-500" /> <span>Rest API</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><BsFiletypeJson className="text-indigo-900" /> <span>JSON</span></span>
            </div>
            <p className="mt-4 font-display text-xl tracking-tight text-black">
              Tools & Platforms:
            </p>
            <div className="py-4 flex flex-wrap mb-2 relative">
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaGitAlt className="text-orange-600" /> <span>Git</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaGithub className="text-black" /> <span>GitHub</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaDiceD20 className="text-sky-500" /> <span>Netlify</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaWordpress className="text-sky-700" /> <span>WordPress</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaFigma className="text-black" /> <span>Figma</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiAdobexd className="text text-fuchsia-800" /> <span>Adobe XD</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><SiPostman className="text-orange-500" /> <span>Postman</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><FaChrome className="text-blue-500" /> <span>Chrome Dev Tool</span></span>
              <span class="mx-2 my-2 space-x-1 min-w-24 flex justify-center items-center bg-white px-2 py-1 text-base rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><TbTemplate className="text-black" /> <span>Wireframing</span></span>
            </div>
          </div>

        </div>

        <div className="lg:w-1/3 md:w-2/5 mt-8 lg:mt-0 flex justify-center">
          <div
            class="md:order-2 h-fit relative before:absolute before:inset-0 before:z-10 before:border before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg"
          >
            <div class="relative overflow-hidden w-full h-fit rounded-xl">
              <img
                className="object-center rounded-lg shadow-lg"
                src={profile}
                alt="About Me"
              />
              <div class="absolute top-0 start-full -z-[1] w-60 h-20 bg-blue-100 blur-[100px] -translate-y-full -translate-x-1/2"></div>
              <div class="absolute top-0 start-full -z-[1] w-60 h-20 bg-purple-100 blur-[100px] -translate-y-full -translate-x-1/2"></div>
              <div class="absolute top-1/2 start-1/2 -z-[1] w-60 h-32 bg-purple-100 blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
              <div class="absolute -bottom-40 -end-24 -z-[1] w-60 h-32 bg-blue-200 blur-[100px]"></div>
              <div class="absolute -bottom-[635px] -end-[635px] -z-[1] w-[635px] h-[635px] border border-dashed border-violet-200 rounded-full transform -translate-y-[255px] -translate-x-[310px] opacity-40"></div>
              <div class="absolute -bottom-[490px] -end-[490px] -z-[1] w-[490px] h-[490px] border border-dashed border-violet-200 rounded-full transform -translate-y-[190px] -translate-x-[240px] opacity-60"></div>
              <div class="absolute -bottom-[340px] -end-[340px] -z-[1] w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full transform -translate-y-[120px] -translate-x-[170px] opacity-80"></div>
              <div class="absolute -bottom-[200px] -end-[200px] -z-[1] w-[200px] h-[200px] border border-dashed border-violet-200 rounded-full transform -translate-y-[60px] -translate-x-[100px]"></div>
            </div>
          </div>
        </div>
      </div >

    </section >
  )
}

export default About