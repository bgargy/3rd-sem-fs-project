import React, { useRef, useState } from "react";
import heroVideo from "../assets/heroVideo.mp4";
import bmsceLogo from "../assets/bmsceLogo.png"; // Import the BMSCE logo image
import GradientBtn from "./GradientBtn";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="relative flex items-end justify-center w-full h-screen text-center">
      <img
        src={bmsceLogo}
        alt="BMSCE Logo"
        className="absolute top-8 left-8 h-16 w-16"
      />

      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-5xl lg:text-7xl">Campus Space</h1>
        <br></br>
        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          Automate <span className="text-thBlue font-bold">College Venue</span> permissions
        </h1>

        <div className="flex flex-row justify-center items-center">
        
          <GradientBtn className="capitalize mx-12" title="Log in" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
