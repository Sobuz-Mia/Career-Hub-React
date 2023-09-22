import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utility/Utility";
import { useEffect, useState } from "react";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [storegJob, setStoregJob] = useState([]);
  const [display,setDisplay] = useState([]);

   const handleFilter = filter =>{
        if(filter === 'all'){
            setDisplay(storegJob);
        }else if(filter === 'remote'){
            const remoteJob = storegJob.filter(job=> job.remote_or_onsite ==='Remote');
            setDisplay(remoteJob);
        }else if(filter === 'onsite'){
            const onsiteJob = storegJob.filter(job=>job.remote_or_onsite === 'Onsite');
            setDisplay(onsiteJob);
        }
   } 
  useEffect(() => {
    const storageJobId = getStoredData();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job=>storageJobId.includes(job.id));
      // console.log(jobsApplied);
      const appliedJob = [];
      for (const id of storageJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJob.push(job);
        }
      }
      setStoregJob(appliedJob);
      setDisplay(appliedJob);
    }
  }, [jobs]);

  return (
    <div>
      <div className="flex justify-end mr-10">
        <details className="dropdown mb-5 text-right">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={()=>handleFilter('all')}>All</a>
            </li>
            <li>
              <a onClick={()=> handleFilter('remote')}>Remote</a>
            </li>
            <li>
              <a onClick={()=>handleFilter('onsite')}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {display.map((job) => (
          <AppliedJob job={job} key={job.id}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
