import React from "react";
import { GoBell } from "react-icons/go";

export default function NotificationCard() {
  return (
    <div className="bg-white w-[190px] h-[150px] rounded-md p-3 flex flex-col gap-3">
      <div className="flex justify-between">
        <button>
          <GoBell fontSize={25} />
        </button>
        <button>save</button>
      </div>
      <h5 className="text-sm">We’ll be sending notifications to you here</h5>
      <input
        className="p-2 text-sm border border-gray-300 rounded-md"
        type="text"
        placeholder="hello@loch.one"
      />
    </div>
  );
}
