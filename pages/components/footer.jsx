import {
  AiOutlineSearch,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="flex-row items-end justify-center hidden gap-5 p-20 mt-8 text-white bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-800 md:flex ">
        <div className="flex flex-col items-center text-sm">
          <img
            src="https://res.cloudinary.com/jhay/image/upload/v1673640054/vectrus/output-onlinegiftools_2_j93xrt.gif"
            alt="logo"
            className="w-16 h-20 mr-5"
          />
          <div className="mr-5">
            <img
              src="https://res.cloudinary.com/jhay/image/upload/v1673640161/vectrus/output-onlinegiftools_3_e6g71w.gif"
              alt=""
              className="w-48 "
            />
            <p className="flex flex-col">
              2424 CapeCoast Central Region- <span>Ghana, CO 80919</span>
            </p>
            <p>Phone (717)-591-3600</p>
            <p>Fax (719)-623-7196</p>
          </div>
        </div>
        <div className="flex flex-col border-x-2  border-[#beb800]">
          <div className="mx-5">
            <p>7901 Capecoast Central</p>
            <p>RegionJones Ghana 700</p>
            <p>22102</p>
            <p>Phone: (571)-481-2000</p>
          </div>
        </div>

        <div className="flex flex-col mr-5">
          <button className="h-10 bg-[#beb800] px-5 mb-5 rounded-lg font-bold hover:opacity-80">
            Suppliers
          </button>
          <button className="h-10 bg-[#beb800] px-5 rounded-lg font-bold hover:opacity-80">
            Careers
          </button>
        </div>

        <ul className="flex flex-col  border-x-2  px-5 border-[#beb800]">
          <li>Our Company</li>
          <li>Converged Infrastructure</li>
          <li>Our Solutions</li>
          <li>Markets We Serve</li>
          <li>Suppliers</li>
          <li>Investors</li>
          <li>News</li>
        </ul>
        <ul className="flex flex-col self-start md:mt-20 lg:mt-7">
          <li>Employee Resources</li>
          <li>Legal</li>
          <li>GDPR</li>
          <li>Contract Vehicles</li>
          <li>Contact Us</li>
          <div className="flex flex-row gap-2 mt-5 text-xl ">
            <AiFillFacebook className="hover:text-[#beb800]  " />
            <AiFillTwitterSquare className="hover:text-[#beb800] " />
            <AiFillLinkedin className="hover:text-[#beb800] " />
          </div>
        </ul>
      </div>
      <div className="flex flex-col items-center py-6 mt-5 text-white bg-black md:hidden">
        <img
          src="https://res.cloudinary.com/jhay/image/upload/v1673436179/vectrus/ezgif.com-gif-maker_gcv6k5.gif"
          alt=""
          className="p-10"
        />
        <div className="flex flex-row">
          <ul className="flex flex-col  border-r-2  px-2 border-[#beb800]">
            <li>Our Company</li>
            <li>Converged Infrastructure</li>
            <li>Our Solutions</li>
            <li>Markets We Serve</li>
            <li>Suppliers</li>
            <li>Investors</li>
            <li>News</li>
          </ul>
          <ul className="px-2">
            <li>Employee Resources</li>
            <li>Legal</li>
            <li>GDPR</li>
            <li>Contract Vehicles</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="mt-2 text-center">
          <p className="flex flex-col">
            2424 CapeCoast Central Region- <span>Ghana, CO 80919</span>
          </p>
          <p>Phone (717)-591-3600</p>
          <p>Fax (719)-623-7196</p>
        </div>
        <div className="flex flex-row justify-around w-full mt-4">
          <button className="h-10 bg-[#beb800] px-5 rounded-lg font-bold hover:opacity-80 ">
            Suppliers
          </button>
          <button className="h-10 bg-[#beb800] px-5 rounded-lg font-bold hover:opacity-80">
            Careers
          </button>
        </div>
        <div className="mt-2 text-center">
          <p>7901 Capecoast Central</p>
          <p>RegionJones Ghana 700</p>
          <p>22102</p>
          <p>Phone: (571)-481-2000</p>
        </div>
        <div className="flex flex-row gap-2 mt-5 text-xl ">
          <AiFillFacebook className="hover:text-[#beb800]  " />
          <AiFillTwitterSquare className="hover:text-[#beb800] " />
          <AiFillLinkedin className="hover:text-[#beb800] " />
        </div>
      </div>
    </>
  );
};

export default Footer;
