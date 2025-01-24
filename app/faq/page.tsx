import FAQsection from "@/components/FAQs/FAQsection";
import Image from "next/image";
import React from "react";

const FAQs = () => {
  return (
    <div className="bg-black mt-24 mb-12 max-sm:px-3">
      <div className="w-full templateContainer lg:flex-row flex flex-col gap-10 p-10 justify-between ">
        {/* 1 Section */}
        <div className="lg:w-[40%] w-full h-screen max-sm:h-auto lg:sticky static top-0">
          <div className="max-w-[400px]  w-full rounded-2xl overflow-hidden">
            <Image
              src={"/assets/faq.jpg"}
              width={500}
              height={900}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2 Section */}
        <div className="lg:w-[60%] w-full ">
          <div className="">
            <h1 className="lg:text-5xl text-3xl">Frequently Asked Questions</h1>
          </div>
          <div className="">
            <FAQsection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
