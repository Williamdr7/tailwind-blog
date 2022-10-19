import React from "react";
import TechnologyCard from "./components/TechnologyCard";
import Slider from "react-slick";
import Link from "next/link";

export default function TechnologySection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    centerMode: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: 150,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: 150,
        },
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 20,
        },
      },
    ],
  };

  return (
    <div className="w-full px-16">
      <div className="flex justify-between py-6 mx-auto">
        <h4 className="text-xl">Main Technologies ----</h4>

        <Link href="/technologies">
          <h4 className="text-xl">See all {"->"}</h4>
        </Link>
      </div>

      <Slider {...settings}>
        <TechnologyCard title="Javascript" imgUrl="/Javascript.svg" />
        <TechnologyCard title="Css" imgUrl="/Css.svg" />
        <TechnologyCard title="React" imgUrl="/React.png" emphasis />
        <TechnologyCard title="Html" imgUrl="/html.png" />
        <TechnologyCard title="Javascript" imgUrl="/React.png" />
      </Slider>
    </div>
  );
}
