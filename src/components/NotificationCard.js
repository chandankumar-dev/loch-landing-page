import React from "react";
import barChartIcon from "../static/bar-chart.svg";
import bellIcon from "../static/bell.svg";
import clockIcon from "../static/clock.svg";
import checkmarkIcon from "../static/checkmark.svg";

export default function NotificationCard() {
  return (
    <>
      <div className="bg-white min-w-[190px] h-[150px] rounded-md p-3 flex flex-col gap-3">
        <div className="flex justify-between">
          <button>
            <img className="h-[25px]" src={bellIcon} alt="bell" />
          </button>
          <button>save</button>
        </div>
        <h5 className="text-sm">We’ll be sending notifications to you here</h5>
        <input
          className="p-2 text-[12px] border border-gray-300 rounded-md"
          type="text"
          placeholder="hello@loch.one"
        />
      </div>
      <div className="bg-white min-w-[190px] h-[150px] rounded-md p-3 flex flex-col gap-5">
        <div className="flex justify-between">
          <button>
            <img className="h-[25px]" src={barChartIcon} alt="barChartIcon" />
          </button>
          <button>
            <img className="h-[15px]" src={checkmarkIcon} alt="bell" />
          </button>
        </div>
        <h5 className="text-sm">Notify me when any wallets move more than</h5>
        <span className="text-[12px] bg-gray-200 w-20 text-center rounded-sm">
          $1,000.00
        </span>
      </div>
      <div className="bg-white min-w-[190px] h-[150px] rounded-md p-3 flex flex-col gap-5">
        <div className="flex justify-between">
          <button>
            <img className="h-[25px]" src={clockIcon} alt="bell" />
          </button>
          <button>
            <img className="h-[15px]" src={checkmarkIcon} alt="bell" />
          </button>
        </div>
        <h5 className="text-sm">Notify me when any wallet dormant for</h5>
        <span className="text-[12px] bg-gray-200 w-20 text-center rounded-sm">
          {"> 30 days"}
        </span>
      </div>
      <div className="bg-white min-w-[190px] h-[150px] rounded-md p-3 flex flex-col gap-5">
        <div className="flex justify-between">
          <button>
            <img className="h-[25px]" src={clockIcon} alt="bell" />
          </button>
          <button>
            <img className="h-[15px]" src={checkmarkIcon} alt="bell" />
          </button>
        </div>
        <h5 className="text-sm">Notify me when any wallet dormant for</h5>
        <span className="text-[12px] bg-gray-200 w-20 text-center rounded-sm">
          {"> 30 days"}
        </span>
      </div>
    </>
  );
}
