import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const JobCard = ({ jobTitle, location, careerArea }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col border-b-2 border-gray-300 md:p-4 hover:bg-stone-200 ">
      <div className="flex flex-col justify-between w-full gap-5 px-5 py-10 md:gap-0 md:items-center md:grid md:grid-cols-4 ">
        <div className="flex flex-row">
          <div
            className="text-2xl cursor-pointer "
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <h1 className="text-2xl text-blue-400 md:text-lg lg:text-2xl">
            {jobTitle}
          </h1>
        </div>

        <div className="md:ml-6 ">
          <h2 className="text-lg">Location</h2>
          <p>{location}</p>
        </div>
        <div>
          <h2 className="text-lg">Career Area</h2>
          <p>{careerArea}</p>
        </div>
        <Link href="/searchJobs/apply">
          <button className="p-3 bg-blue-500 lg:px-10 md:ml-4 hover:opacity-80 ">
            Apply Now
          </button>
        </Link>
      </div>
      <p className={`${open ? `block` : `hidden`}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        eveniet reiciendis totam ut repellat illo ad laboriosam rem quos
        delectus earum hic at voluptatem iusto sunt optio, doloribus quam omnis
        vero ipsa quod obcaecati exercitationem harum! Odit placeat provident
        animi? Autem dolor, saepe totam quod enim recusandae commodi blanditiis
        ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus eveniet reiciendis totam ut repellat illo ad laboriosam rem
        quos delectus earum hic at voluptatem iusto sunt optio, doloribus quam
        omnis vero ipsa quod obcaecati exercitationem harum! Odit placeat
        provident animi? Autem dolor, saepe totam quod enim recusandae commodi
        blanditiis ducimus.
      </p>
    </div>
  );
};

export default JobCard;
