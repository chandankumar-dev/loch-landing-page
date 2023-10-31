import React from "react";
import NotificationCard from "./NotificationCard";
import TestimonialCard from "./TestimonialCard";
import CohortImage from "../static/cohorts.png";
import logo from "../static/logo.svg";
import { testimonials } from "../constant";
import { GoBell } from "react-icons/go";
import { IoEye } from "react-icons/io5";

export default function Intro() {
  return (
    <div className="max-w-4xl h-screen bg-gradient-to-tr from-[#1FA911] from-81% via-[#2F15D0] via-100% to-[#000000] to-10%">
      <div className="space-y-2 py-6">
        <div className="flex gap-2 pl-16">
          <div className="w-[322px] flex flex-col gap-1">
            <button className="text-start">
              <GoBell fontSize={25} />
            </button>
            <h6 className="text-[25px] text-white">
              Get notified when a highly correlated whale makes a move
            </h6>
            <p className="text-gray-300">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className="flex space-x-2 overflow-auto ml-6 w-[60%]">
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
          </div>
        </div>
        <div className="flex text-right mt-2 px-16">
          <img
            src={CohortImage}
            alt="cohort"
            className="w-[250px] rounded-lg relative top-5"
          />
          <div className="ml-10">
            <button>
              <IoEye fontSize={25} className="text-white" />
            </button>
            <h5 className="text-3xl text-white">
              Watch what the whales are doing
            </h5>
            <p className="text-lg text-gray-300">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
        <div className="px-16">
          <h3 className="text-2xl text-white text-right">Testimonials</h3>
          <hr className="my-4 md:my-5" />
        </div>
        <div className="flex overflow-x-auto space-x-2 pl-16">
          <img src={logo} alt="logo" className="mx-2" />
          {testimonials.map((testimonial) => {
            return <TestimonialCard key={testimonial.id} {...testimonial} />;
          })}
        </div>
      </div>
    </div>
  );
}
