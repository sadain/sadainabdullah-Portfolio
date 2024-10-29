import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp, FaReact, FaNodeJs, FaMixcloud, FaGitAlt, FaGithub, FaDiceD20, FaWordpress, FaFigma, FaChrome, FaSass } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import { TbArrowsTransferDown, TbTemplate, TbTransferVertical } from "react-icons/tb";
import { SiMysql, SiTailwindcss, SiAdobexd, SiPostman, SiNextdotjs, SiThreedotjs, SiGodaddy, SiGooglecloud, SiIbmwatson, SiJsonwebtokens, SiTypescript, SiPostgresql, SiRedux } from "react-icons/si";
import profile from "../assets/Profile.png";

const Tag = ({ icon: Icon, text, iconColor }) => (
  <span className="flex items-center justify-center mx-2 my-2 min-w-24 px-2 py-1 text-base bg-white rounded-md shadow-md border border-neutral-200 space-x-1">
    <Icon className={iconColor} />
    <span>{text}</span>
  </span>
);

const Section = ({ title, items }) => (
  <>
    <p className="mt-4 text-xl tracking-tight text-black font-display">{title}</p>
    <div className="relative flex flex-wrap py-2 mb-2">
      {items.map((item, index) => (
        <Tag key={index} icon={item.icon} text={item.text} iconColor={item.iconColor} />
      ))}
    </div>
  </>
);

const About = () => {
  const programmingLanguages = [
    { icon: DiJavascript, text: "JavaScript", iconColor: "text-yellow-500" },
    { icon: SiTypescript, text: "TypeScript", iconColor: "text-blue-500" },
    { icon: FaPython, text: "Python", iconColor: "text-cyan-800" },
    { icon: FaJava, text: "Java", iconColor: "text-red-500" },
    { icon: FaPhp, text: "PHP", iconColor: "text-indigo-900" },
    { icon: SiMysql, text: "MySQL", iconColor: "text-cyan-800" },
    { icon: SiPostgresql, text: "PostgreSQL", iconColor: "text-sky-700" },
    { icon: FaHtml5, text: "HTML5", iconColor: "text-orange-500" },
    { icon: FaCss3Alt, text: "CSS3", iconColor: "text-blue-500" },
  ];

  const librariesAndFrameworks = [
    { icon: FaReact, text: "React JS", iconColor: "text-sky-600" },
    { icon: SiNextdotjs, text: "Next Js", iconColor: "text-black" },
    { icon: FaNodeJs, text: "Node Js", iconColor: "text-green-700" },
    { icon: SiTailwindcss, text: "Tailwind CSS", iconColor: "text-sky-500" },
    { icon: FaSass, text: "SASS", iconColor: "text-pink-500" },
    { icon: SiRedux, text: "Redux", iconColor: "text-indigo-700" },
    { icon: FaMixcloud, text: "Rest API", iconColor: "text-sky-500" },
    { icon: BsFiletypeJson, text: "JSON", iconColor: "text-indigo-900" },
    { icon: SiJsonwebtokens, text: "JWT", iconColor: "text-red-500" },
    { icon: SiThreedotjs, text: "Three Js", iconColor: "text-black" },
    { icon: TbArrowsTransferDown, text: "SSE", iconColor: "text-sky-500" },
    { icon: TbTransferVertical, text: "Websocket", iconColor: "text-sky-500" },
  ];

  const toolsAndPlatforms = [
    { icon: FaGitAlt, text: "Git", iconColor: "text-orange-600" },
    { icon: FaGithub, text: "GitHub", iconColor: "text-black" },
    { icon: FaDiceD20, text: "Netlify", iconColor: "text-sky-500" },
    { icon: SiGodaddy, text: "GoDaddy", iconColor: "text-[#1bdbdb]" },
    { icon: SiGooglecloud, text: "GCP", iconColor: "text-blue-500" },
    { icon: FaWordpress, text: "WordPress", iconColor: "text-sky-700" },
    { icon: FaFigma, text: "Figma", iconColor: "text-black" },
    { icon: SiPostman, text: "Postman", iconColor: "text-orange-500" },
    { icon: SiAdobexd, text: "Adobe XD", iconColor: "text-fuchsia-800" },
    { icon: SiIbmwatson, text: "IBM Watson", iconColor: "text-violet-500" },
    { icon: FaChrome, text: "Chrome Dev Tool", iconColor: "text-blue-500" },
    { icon: TbTemplate, text: "Wireframing", iconColor: "text-black" },
  ];

  return (
    <section id="about-me" aria-labelledby="about-me-title" className="relative max-w-6xl px-4 py-10 mx-auto mb-4 md:py-20 sm:px-6 lg:px-8" >
      <h2 className="text-4xl font-medium tracking-tighter text-blue-600 font-display sm:text-5xl">
        About Me
      </h2>
      <div className=" mx-auto md:mx-0 lg:mx-0">
        <div className="relative mt-8">
          <div className="float-right flex justify-end md:pl-10 pb-5 md:w-1/2 lg:w-2/5">
            <div className="relative md:order-2 h-fit before:absolute before:inset-0 before:z-10 before:border before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:hover:shadow-lg" >
              <div className="relative w-full overflow-hidden h-fit rounded-xl">
                <img className="object-cover rounded-lg shadow-lg" src={profile} alt="About Me" />
                {/* <div className="absolute top-0 start-full -z-[1] w-60 h-20 bg-blue-100 blur-[100px] -translate-y-full -translate-x-1/2"></div>
                <div className="absolute top-0 start-full -z-[1] w-60 h-20 bg-purple-100 blur-[100px] -translate-y-full -translate-x-1/2"></div>
                <div className="absolute top-1/2 start-1/2 -z-[1] w-60 h-32 bg-purple-100 blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute -bottom-40 -end-24 -z-[1] w-60 h-32 bg-blue-200 blur-[100px]"></div>
                <div className="absolute -bottom-[635px] -end-[635px] -z-[1] w-[635px] h-[635px] border border-dashed border-violet-200 rounded-full transform -translate-y-[255px] -translate-x-[310px] opacity-40"></div>
                <div className="absolute -bottom-[490px] -end-[490px] -z-[1] w-[490px] h-[490px] border border-dashed border-violet-200 rounded-full transform -translate-y-[190px] -translate-x-[240px] opacity-60"></div>
                <div className="absolute -bottom-[340px] -end-[340px] -z-[1] w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full transform -translate-y-[120px] -translate-x-[170px] opacity-80"></div>
                <div className="absolute -bottom-[200px] -end-[200px] -z-[1] w-[200px] h-[200px] border border-dashed border-violet-200 rounded-full transform -translate-y-[60px] -translate-x-[100px]"></div> */}
              </div>
            </div>
          </div>
          <div className="text-justify lg:w-3/5">
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
        </div>
        <div>
          <Section title="Programming Languages:" items={programmingLanguages} />
          <Section title="Libraries & Frameworks:" items={librariesAndFrameworks} />
          <Section title="Tools & Platforms:" items={toolsAndPlatforms} />
        </div>
      </div >
    </section >
  )
}

export default About;
