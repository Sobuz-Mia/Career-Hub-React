import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [show,setShow] = useState(4);


    useState(()=>{
        fetch('/data/jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div className="my-24">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Featured Jobs</h2>
                <p className="my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0,show).map(job=> <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={show === jobs.length && 'hidden'} id="show-data">
             <button onClick={()=>setShow(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white normal-case mt-3 text-center" >View All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;