import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Header = () => {
  const links = [
    { id: 1, name: "WHY ALPHY", link: "/" },
    { id: 2, name: "SEARCH JOBS", link: "/searchJobs" },
    { id: 3, name: "OUR PROCESS", link: "/ourProcess" },
    { id: 4, name: "OUR BENEFITS", link: "/ourBenefits" },
  ];

  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full shadow-md bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-700">
      <div className="items-center justify-between px-0 py-4 md:py-2 md:px-2 lg:px-10 md:flex">
        <div className="flex flex-row items-center justify-start pl-2 cursor-pointer ">
          <img
            src="https://res.cloudinary.com/jhay/image/upload/v1673365871/vectrus/My_project-1_zqj6xv.png"
            alt="logo"
            className="h-16"
          />
          <div className="ml-1">
            <h1 className="font-bold text-teal-400 lg:text-lg">
              ALPHY JONHNSON
            </h1>
            <p className="font-serif italic text-teal-200 ">
              Integrity is our Emblem
            </p>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 lg:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={`absolute mt-3 md:flex md:items-center bg-white lg:bg-transparent  lg:static md:z-auto z-[-1] 
        left-0 w-full lg:w-auto  transition-all duration-500 ease-in ${
          open ? `top-20 opacity-100` : `top-[-490px] md:opacity-100 opacity-0`
        }`}
        >
          <div className="flex flex-col py-3 text-gray-700 md:items-end">
            <ul className="flex flex-col gap-4 px-3 py-3 text-lg md:px-0 md:py-0 md:gap-3 lg:flex-row ">
              {links.map((link) => (
                <Link href={link.link} key={link.id}>
                  <li
                    className={`hover:underline  hover:text-[#beb800] cursor-pointer font-medium decoration-[#beb800] ${
                      router.pathname == link.link && ` text-[#beb800]`
                    }`}
                  >
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
