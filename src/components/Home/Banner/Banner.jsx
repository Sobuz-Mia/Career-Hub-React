const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/src/assets/images/user.png"
          className="max-w-2xl rounded-lg "
        />
        <div className="ml-10">
          <h1 className="text-5xl font-extrabold">One Step <br /> Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
          <p className="py-6">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
