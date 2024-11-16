import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Empower Your Future Skills with
        <span className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          Stack Mentor
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Join us to unlock your potential and achieve your goals.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-800 py-3 px-4 mx-3 rounded-md">Get Started</a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">Explore Courses</a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-cyan-400 mx-2 my-4"><source src={video1} type="video/mp4"/>Your browser does not support the video tag.</video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-cyan-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
