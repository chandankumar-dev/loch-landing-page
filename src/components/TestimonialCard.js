import React from "react";

export default function TestimonialCard({ name, position, description }) {
  return (
    <div className="bg-white h-[100px] min-w-[250px] rounded-lg text-sm p-2 overflow-auto">
      <div>
        <span className="font-semibold mr-2">{name}</span>
        <span className="text-[10px] text-gray-400">{position}</span>
      </div>
      <p className="mt-1">{description}</p>
    </div>
  );
}
