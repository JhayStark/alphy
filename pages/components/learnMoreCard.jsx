import React from "react";

const LearnMoreCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-3 md:flex-row ">
        <div className="md:w-[45%] w-full flex flex-col py-3 items-center justify-center">
          <h1 className="mb-3 text-xl text-[#fb8500] font-semibold">
            Celebrating Diversity and Inclusion
          </h1>
          <p className="text-center">
            Our ability to create an inclusive business environment, coupled
            with our strong company values, attracts diverse employees to a
            workplace that brings together the most talented people and ideas
            from around the world
          </p>
          <button className="bg-[#beb800] p-3 hover:opacity-70  rounded-lg mt-6">
            Learn More
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/jhay/image/upload/v1673367373/vectrus/meeting-gfe17d4965_1280_buicel.jpg"
          alt=""
          className="md:w-[45%] w-full h-80"
        />
      </div>
    </>
  );
};

export default LearnMoreCard;
