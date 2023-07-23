"use client";

import Image from "next/image";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import react from "react";

const Hero = () => {
  return (
    <div>
      <div className="container  font-extrabold text-4xl  flex justify-center ">
        <h1>
          {
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("The Unyielding Path to Success: Hard Work")
                  .start();
              }}
            />
          }
        </h1>
      </div>
    </div>
  );
};

export default Hero;
