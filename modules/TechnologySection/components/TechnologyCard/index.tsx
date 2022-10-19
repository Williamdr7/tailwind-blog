import Image from "next/image";
import React from "react";

type ITechnologyCard = {
  imgUrl: string;
  title: string;
  emphasis?: boolean;
};

export default function TechnologyCard({
  imgUrl,
  title,
  emphasis,
}: ITechnologyCard) {
  return (
    <div className="py-20 px-3 w-60 rounded-xl bg-white">
      <div className="flex items-center justify-center">
        <Image width={100} height={100} src={imgUrl} alt={`${title} Logo`} />
      </div>
      <div className="flex items-center justify-center text-black text-3xl font-bold mt-5">
        {title}
      </div>
    </div>
  );
}
