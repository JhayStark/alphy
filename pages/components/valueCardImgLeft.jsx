import React from "react";

const ValueCardImgLeft = ({ text1, text2, text3, heading, bgColor, img }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-3 text-white md:flex-row ">
      <img src={img} alt="" className="md:w-[45%] w-full h-80" />
      <div
        className={`md:w-[45%] w-full flex flex-col items-center h-80 ${bgColor} justify-center`}
      >
        <h1 className="text-3xl text-[#fb8500]">{heading}</h1>
        <div className="mt-5 text-lg text-center">
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCardImgLeft;
