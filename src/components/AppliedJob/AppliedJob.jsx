import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const AppliedJob = ({ job }) => {
  console.log(job);
  const {
    job_title,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salary,
    company_name,
    id,
  } = job;
  return (
    <div>
      <div className="card bg-slate-100 p-7 mb-4">
        <div className="flex justify-between">
          <div>
            <img className="mb-7" src={logo} alt="" />
          </div>
          <div>
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div>
              <button className="border px-4 mr-2 mt-4 py-2 border-[#7E90FE] text-[#7E90FE] rounded-md">
                {remote_or_onsite}
              </button>
              <button className="border px-4 mr-2 mt-4 py-2 border-[#7E90FE] text-[#7E90FE] rounded-md">
                {job_type}
              </button>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center mt-3">
                <h2 className="mr-2">
                  <GrLocation />
                </h2>
                <p>{location}</p>
              </div>
              <div className="flex items-center mt-3">
                <h2 className="mr-2">
                  <HiOutlineCurrencyDollar />
                </h2>
                <p>{salary}</p>
              </div>
            </div>
          </div>
          <div className="card-actions">
            <NavLink to={"/"}>
              <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white normal-case mt-3">
                Go Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
AppliedJob.propTypes = {
  job: PropTypes.object,
};
export default AppliedJob;
