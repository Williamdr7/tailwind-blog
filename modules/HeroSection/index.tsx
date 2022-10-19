import Image from "next/image";
import React from "react";
import HeroContainer from "../../components/HeroContainer";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <HeroContainer>
      <div className="sm:flex items-center p-5 text-black sm:px-20 sm:w-full sm:py-0 sm:h-full justify-between">
        <div>
          <h2 className="text-5xl font-bold mt-20 mb-3">
            Hi, {"I'm"} William <br />
            Front End Dev
          </h2>
          <div className="border-l-4 pl-1">
            <span className="text-zinc-500 font-semibold">
              On this blog I share tips and tricks, frameworks, projects,
              tutorials, etc <br /> Make sure you subscribe to get the latest
              updates
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-10 sm:mt-0">
          <Image
            className={styles.heroImage}
            src="/HeroImage.svg"
            width="435"
            height="363"
            alt="Coding illustration"
          />
        </div>
      </div>
    </HeroContainer>
  );
}
