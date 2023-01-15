import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import JobCard from "../components/jobCard";
import { jobs } from "../api/mockData";
import ReactPaginate from "react-paginate";

const SearchJobs = () => {
  const [jobArray, setJobArray] = useState(jobs.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const jobsPerPage = 10;
  const pagesVisited = pageNumber * jobsPerPage;

  const displayJobs = jobArray
    .slice(pagesVisited, pagesVisited + jobsPerPage)
    .map((job) => (
      <JobCard
        key={job.id}
        jobTitle={job.jobTitle}
        location={job.location}
        careerArea={job.careerArea}
      />
    ));

  const pageCount = Math.ceil(jobs.length / jobsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Header />
      <div className="px-5 pt-24 lg:px-8 md:pt-28 bg-slate-100 ">
        <div className="flex flex-col lg:mx-20">
          {displayJobs}
          <div className="flex justify-center m-5 item-center">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                "flex flex-row w-[80%] items-center justify-center gap-3"
              }
              pageClassName={
                "border-2 px-5 py-2 cursor-pointer border-blue-400 hidden md:flex hover:bg-blue-400"
              }
              previousLinkClassName={
                "border-2 px-5 py-2 border-blue-400 hover:bg-blue-400"
              }
              nextLinkClassName={
                "border-2 px-5 py-2 border-blue-400 hover:bg-blue-400 "
              }
              disabledClassName={"paginationsDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchJobs;
