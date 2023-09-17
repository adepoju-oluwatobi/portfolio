import React, { useState } from "react";
import Open from "../assets/chevrons-right.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Email from "../assets/mail.svg";
import profilePics from '../assets/profile-pics.png'

function LandingPage() {
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
        <div className='pt-4 transform transition-transform duration-800 ease-in-out'>
          <div className="w-2 h-[80vh] bg-[#5F439B] rounded"></div>
        </div>
        {/** End */}

        <div>
          {/** Bio */}
          <div className="text-white mt-[50%]">
            <div className="p-2">
              <p>Hello, I am Adepoju Oluwatobi</p>
              <p className="font-bold text-[34px]">WEB DEVELOPER</p>
              <p className="text-[24px] font-bold">{`< FULL STACK />`}</p>
            </div>
          </div>

          <div className="flex gap-10">
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

      <div className={`nav-menu transform transition-transform duration-500 ease-in-out relative top-[-80%] ${isNavMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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

            <div className="text-center flex flex-col gap-[10px] mt-8 text-white">
          <p className={`bg-black rounded p-4 hover:bg-[#5F439B] transition duration-300 ${isNavMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            About
          </p>

          <p className={`bg-black rounded p-4 hover:bg-[#5F439B] transition duration-300 ${isNavMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            Projects
          </p>

          <p className={`bg-black rounded p-4 hover:bg-[#5F439B] transition duration-300 ${isNavMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            Contact
          </p>

          <p className={`bg-black rounded p-4 hover:bg-[#5F439B] transition duration-300 ${isNavMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            Resume
          </p>
        </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
