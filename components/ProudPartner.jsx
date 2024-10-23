import React from "react";
import ait from "@/assets/aith.png";
import aktu from "@/assets/aktu.png";
import citi from "@/assets/citi.png";
import siic from "@/assets/siic.webp";
import sui from "@/assets/sui.png";
import dst from "@/assets/dst.png";
import startinup from "@/assets/startinup.png";
// import iit from "@/assets/iit.webp";
import Image from "next/image";
const ProudPartner = () => {
  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Proud Partners
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
        {[ait, aktu, citi, siic, sui, dst, startinup].map((image, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
          >
            <Image
              src={image}
              alt={` ${index + 1}`}
              width={150}
              height={75}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProudPartner;
