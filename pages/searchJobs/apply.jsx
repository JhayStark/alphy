import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const Apply = () => {
  return (
    <>
      <Header />
      <div className="px-8 py-24 md:pt-28 bg-slate-100">
        <form className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-2 w-[90%] md:w-[40%]">
            <h1 className="p-3 mb-5 text-2xl border-b-2">Job Name here</h1>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="p-3 border-2 border-gray-300 rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 w-[90%] md:w-[40%]">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="p-3 border-2 border-gray-300 rounded-xl"
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
          </div>
          <div className="flex flex-col gap-2 w-[90%] md:w-[40%]">
            <label htmlFor="email">Email</label>
            <input
              className="p-3 border-2 border-gray-300 rounded-xl"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2 w-[90%] md:w-[40%]">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              className="p-3 border-2 border-gray-300 rounded-xl"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col gap-2 w-[90%] md:w-[40%]">
            <label htmlFor="CV / Resume">CV / Resume</label>
            <input
              className="p-3 rounded-xl"
              type="file"
              placeholder="CV / Resume"
            />
          </div>

          <button className="px-5 py-3 rounded-lg hover:opacity-70 bg-cyan-600">
            Apply
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
