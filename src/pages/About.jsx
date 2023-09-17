import React, { useState } from "react";
import Open from "../assets/chevrons-right.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Email from "../assets/mail.svg";
import profilePics from "../assets/profile-pics.png";
import { Link } from "react-router-dom";
import Cert1 from '../assets/cert1.jpeg'
import Cert2 from '../assets/cert2.jpeg'
import Cert3 from '../assets/cert3.png'
import Cert4 from '../assets/cert4.png'

function About() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <div className="h-screen bg-[url(./assets/BACKGROUND.png)]">
      {/** Menu */}
      <div className="pt-4 pl-4">
        <div
          className="bg-[#5F439B] w-fit flex items-center gap-2 p-2 rounded cursor-pointer"
          onClick={toggleNavMenu}
        >
          <div className="bg-black w-fit p-1 rounded-full">
            <img src={Open} alt="" />
          </div>
          <p className="text-white">Menu</p>
        </div>
      </div>
      {/** End of Menu code */}

      <div className="flex items-center gap-4">
        {/** Menu side bar */}
        <div className="pt-4 transform transition-transform duration-800 ease-in-out">
          <div className="w-2 h-[80vh] bg-[#5F439B] rounded"></div>
        </div>
        {/** End */}

        <div>
          {/** Bio */}
          <div className="about text-white">
            <div className="p-2 h-[400px] overflow-y-auto">
              <div>
              <p className="font-bold text-2xl border-b-2 w-fit mb-2">About Me</p>
              <p>
                The passion for developing website and user friendly interface
                led me to the study of front end development in which i am
                certified and proficient in HTML, CSS, JavaScript, React Js,
                Next Js, Vite, Tailwind Css, Sass and Boostrap using these
                skills to create highly responsive and user friendly websites. I
                have under gone a 4 years course in the field of computer
                science and also took some online courses in which FreeCodeCamp
                is one of them. Also, I am an enthusiastic teacher who loves to
                impact knowledge. With a teaching experience of 8 years plus, I
                can say i have impacted more than i could have ever wished for.
              </p>
              </div>

              <div>
              <p className="font-bold text-2xl border-b-2 w-fit mb-2">Certification</p>
              <div className="flex flex-col gap-4">
              <div>
              <img src={Cert1} alt="" />
              <p>
                This is a Certification responsive website development by FreeCodeCamp, one of the most recorgnised online code learning platform. Here is the link to the information about the certificate
              </p>
              <div className="mt-2 p-2 bg-black rounded w-fit">
              <a href="https://www.freecodecamp.org/certification/tobi_frontend/responsive-web-design" target="_blank"
                >Check Certificate</a>
              </div>
              </div>
              <img src={Cert3} alt="" />
              <img src={Cert4} alt="" />
              <img src={Cert2} alt="" />
              </div>
              <p>
                The passion for developing website and user friendly interface
                led me to the study of front end development in which i am
                certified and proficient in HTML, CSS, JavaScript, React Js,
                Next Js, Vite, Tailwind Css, Sass and Boostrap using these
                skills to create highly responsive and user friendly websites. I
                have under gone a 4 years course in the field of computer
                science and also took some online courses in which FreeCodeCamp
                is one of them. Also, I am an enthusiastic teacher who loves to
                impact knowledge. With a teaching experience of 8 years plus, I
                can say i have impacted more than i could have ever wished for.
              </p>
              </div>
              <div className="flex gap-10 mt-2">
            <a
              href="https://www.linkedin.com/in/oluwatobi-adepoju-4a242898/"
              target="_blank"
            >
              <div className="bg-[#5F439B] w-fit p-4 rounded">
                <img src={Linkedin} alt="" />
              </div>
            </a>

            <a href="https://github.com/adepoju-oluwatobi" target="_blank">
              <div className="bg-[#5F439B] w-fit p-4 rounded">
                <img src={Github} alt="" />
              </div>
            </a>

            <a href="mailto:kunletobi4@gmail.com" target="_blank">
              <div className="bg-[#5F439B] w-fit p-4 rounded">
                <img src={Email} alt="" />
              </div>
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`nav-menu transform transition-transform duration-500 ease-in-out relative top-[-80%] ${
          isNavMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-[90%] h-[80vh] bg-white border-r-4 border-[#5F439B]">
          <div className="p-4">
            <div className="flex gap-4">
              <img src={profilePics} alt="" />
              <div>
                <p>Adepoju Oluwatobi</p>
                <p>WEB DEVELOPER</p>
                <p>FULL STACK</p>
              </div>
            </div>

            <div className="text-center flex flex-col items-center gap-[30px] mt-8 text-white">
              <Link to='/'>
              <p
                className={`bg-black rounded px-4 py-2 hover:bg-[#5F439B] transition hover:translate-x-5 w-fit duration-300 ${
                  isNavMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                Home
              </p>
              </Link>

              <p
                className={`bg-black rounded hover:bg-[#5F439B] hover:translate-x-5 transition w-fit px-4 py-2 duration-300 ${
                  isNavMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                Projects
              </p>

              <p
                className={`bg-black rounded p-4 hover:bg-[#5F439B] transition w-fit px-4 py-2 duration-300 hover:translate-x-5 ${
                  isNavMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                Contact
              </p>

              <p
                className={`bg-black rounded p-4 hover:bg-[#5F439B] transition w-fit px-4 py-2 duration-300 hover:translate-x-5 ${
                  isNavMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                Resume
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
