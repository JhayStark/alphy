import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import LearnMoreCard from "./components/learnMoreCard";
import ValueCardImgLeft from "./components/valueCardImgLeft";
import ValueCardImgRight from "./components/valueCardImgRight";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-8 py-24 md:pt-28 bg-slate-100">
        <div className="flex flex-col items-center bg-work-with-alphy-bg bg-cover bg-center justify-around py-3 bg-blend-darken  text-white bg-gray-300 h-[30rem] px-7">
          <h1 className="text-4xl text-[#fb8500] text-center md:text-6xl">
            Work with Alphy
          </h1>
          <p className="text-xl text-center md:text-4xl">
            Alphy offers exciting and rewarding career opportunities and a
            commitment to help you advance and succeed
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-2 md:flex-row md:gap-5">
            <input
              type="text"
              placeholder="Keyword or MOS code"
              className="md:w-[30%] w-[80%] h-10 px-3"
            />
            <input
              type="text"
              placeholder="Try 'New York'"
              className="md:w-[30%] w-[80%] h-10 px-3"
            />
            <button className="h-10 px-5 text-white bg-blue-400">
              Find Jobs
            </button>
          </div>
        </div>
        <div className="pt-3">
          <h1 className="flex items-center justify-center text-center text-[#fb8500] bg-blend-darken bg-our-values text-7xl h-96">
            Our Values
          </h1>
          <ValueCardImgLeft
            img="https://res.cloudinary.com/jhay/image/upload/v1673367373/vectrus/meeting-gfe17d4965_1280_buicel.jpg"
            heading="Integrity"
            bgColor="bg-gradient-to-r from-cyan-600 via-cyan-900 to-cyan-800"
            text1="We hold ourselves to the highest standard of ethical conduct"
            text2="We communicate with honesty and courage"
            text3="We are consistent in what we say and do"
          />
          <ValueCardImgRight
            img="https://res.cloudinary.com/jhay/image/upload/v1673367373/vectrus/meeting-gfe17d4965_1280_buicel.jpg"
            heading="Integrity"
            bgColor="bg-[#beb800]"
            text1="We hold ourselves to the highest standard of ethical conduct"
            text2="We communicate with honesty and courage"
            text3="We are consistent in what we say and do"
          />
          <ValueCardImgLeft
            img="https://res.cloudinary.com/jhay/image/upload/v1673367373/vectrus/meeting-gfe17d4965_1280_buicel.jpg"
            heading="Integrity"
            bgColor="bg-gradient-to-r from-cyan-600 via-cyan-900 to-cyan-800"
            text1="We hold ourselves to the highest standard of ethical conduct"
            text2="We communicate with honesty and courage"
            text3="We are consistent in what we say and do"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-white md:p-28 bg-gradient-to-r from-cyan-600 via-cyan-900 to-cyan-800">
          <h1 className="mb-5 text-3xl text-center md:text-7xl text-[#fb8500] ">
            Our Legacy
          </h1>
          <p className="text-xl text-center md:text-4xl">
            More than 70 years of deploying resources rapidly and with precision
            to support the mission success of our customers.
          </p>
        </div>
        <LearnMoreCard />
        <div className="flex flex-col items-center justify-center gap-5 my-10 md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/jhay/image/upload/v1673448037/vectrus/running_c6ihf8.png"
              alt=""
              className="w-40 mb-5 h-44"
            />
            <h1 className="text-lg text-center text-[#fb8500] cursor-pointer">
              Agility - Increase Speed
            </h1>
            <p>
              "We anticipate and respond to changes in our environment with a
              bias for taking action, NOW."
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/jhay/image/upload/v1673448037/vectrus/engagement_vvuzrl.png"
              alt=""
              className="w-40 mb-5 h-44"
            />
            <h1 className="text-lg text-center text-[#fb8500]">
              Agility - Increase Speed
            </h1>
            <p className="px-12 text-center">
              "We anticipate and respond to changes in our environment with a
              bias for taking action, NOW."
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/jhay/image/upload/v1673448037/vectrus/thumbs-up_spdspx.png"
              alt=""
              className="w-40 mb-5 h-44"
            />
            <h1 className="text-lg text-center text-[#fb8500]">
              Agility - Increase Speed
            </h1>
            <p className="px-12 text-center">
              "We anticipate and respond to changes in our environment with a
              bias for taking action, NOW."
            </p>
          </div>
        </div>
        <LearnMoreCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
