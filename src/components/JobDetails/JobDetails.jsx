import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { LiaCalendarAltSolid } from "react-icons/lia";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStoraged } from "../../utility/Utility";


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    experiences,
    educational_requirements,
    salary,
    job_title,
    contact_information
  } = job;
  const handleApply = () =>{
    saveLocalStoraged(idInt);
    toast("Successfully you are applied ")
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 h-screen my-24">
        <div className="col-span-2">
          <p className="mb-3">
            <span className="text-3xl font-bold">Job description:</span> <br />
            {job_description}
          </p>
          <p className="mb-3">
            <span className="text-3xl font-bold">Job Responsibility:</span>
            <br />
            {job_responsibility}
          </p>
          <p className="mb-3">
            <span className="text-3xl font-bold">Education Requirment:</span>
            <br />
            {educational_requirements}
          </p>
          <h2 className="mb-3">
            <span className="text-3xl font-bold">Experience:</span>
            <br />
            {experiences}
          </h2>
        </div>
        <div>
          <div className="card  bg-slate-200 ">
            <div className="p-7">
              <h2 className="flex justify-start text-2xl font-bold">
                Job Details
              </h2>
              <hr className="text-white" />
              <div className="flex items-center mt-3">
                <h2 className="mr-2">
                  <HiOutlineCurrencyDollar />
                </h2>
                <p><span className="text-xl font-bold">Salary:</span>{salary} (per Month)</p>
              </div>
              <div className="flex items-center mt-3">
                <h2 className="mr-2">
                  <LiaCalendarAltSolid />
                </h2>
                <p><span className="text-xl font-bold">Job title: </span>{job_title}</p>
              </div>
              <h2 className="text-xl font-extrabold mt-7 mb-10">Contact Information</h2>
              <div className="flex items-center mt-3">
                <h2 className="mr-2 text-2xl">
                  <BiPhoneCall />
                </h2>
                <p><span className="text-xl font-bold">Phone: </span>{contact_information.phone}</p>
              </div>
              <div className="flex items-center mt-3">
                <h2 className="mr-2 text-2xl">
                  <HiOutlineMail />
                </h2>
                <p><span className="text-xl font-bold">Email: </span>{contact_information.email}</p>
              </div>
              <div className="flex items-center mt-3">
                <h2 className="mr-2 text-2xl">
                  <GrLocation />
                </h2>
                <p><span className="text-xl font-bold">Address: </span>{contact_information.address}</p>
              </div>
              <div className="mt-3">
                <button onClick={handleApply} className="btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobDetails;
