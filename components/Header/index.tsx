import Link from "next/link";
import React, { useState } from "react";
import { GrGithub } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FiMail, FiMenu } from "react-icons/fi";
import Button from "../Button";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <nav
        className=" shadow-xl h-20 w-full bg-slate-200 sm:px-10"
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      >
        {mobileMenu && <MobileMenu />}
        <div className="px-4 h-full w-full flex items-center justify-between py-3 sm:px-10 text-black">
          <div className="text-3xl font-semibold">
            Dev <span className="text-xl text-violet-800">.Blog</span>
          </div>

          <div className="flex items-center sm:hidden text-4xl">
            <FiMenu onClick={() => setMobileMenu(!mobileMenu)} />
          </div>

          <div className="hidden sm:flex items-center text-xl font-semibold gap-5 ">
            <Link href="/teste">
              <Button>
                <div className="flex items-center gap-2 cursor-pointer hover:underline text-white text-lg">
                  <FiMail /> Contact-me
                </div>
              </Button>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer hover:underline visible ">
                Github <GrGithub color="black" />
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer hover:underline">
                Linkedin <BsLinkedin color="black" />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

const MobileMenu = () => (
  <div className="h-auto absolute w-full bg-slate-200 top-20 text-black">
    <div className="items-center text-xl font-semibold p-5">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer hover:underline ">
          Github <GrGithub />
        </div>
      </Link>
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer hover:underline mt-5">
          Linkedin <BsLinkedin />
        </div>
      </Link>
      <Link href="/teste">
        <Button className="mt-5">
          <div className="flex items-center gap-2 cursor-pointer hover:underline text-white text-lg ">
            <FiMail /> Contact-me
          </div>
        </Button>
      </Link>
    </div>
  </div>
);
