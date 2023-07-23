"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import react from "react";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto mt-10 font-extrabold text-4xl ml-10 flex justify-center ">
        <h1>
          {
            <Typewriter
              onInit={(typewriter) => {
                for (let i = 1; i > 0; i++) {
                  typewriter
                    .typeString("GeeksForGeeks")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Welcomes You")
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
                }
              }}
            />
          }
        </h1>
      </div>
    </div>
  );
};

export default Hero;
