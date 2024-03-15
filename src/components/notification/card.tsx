import React from "react";

type Props = {};

const NotificationCard = (props: Props) => {
  return (
    <div className="w-full min-w-[300px] bg-[#F1F1F1]">
      <div className="bg-[#FEFFBD] p-2 flex justify-between">
        <div className="uppercase">VEHICLE REQUEST</div>
        <div>12 Mins ago</div>
      </div>
      <div className="grid grid-cols-3 py-5 px-5">
        <div className="flex justify-center items-center font-bold text-xl">
          01
        </div>
        <div>
          <div>KL 41 N 8986</div>
          <div>In : 9:00 Am</div>
          <div>D : Suresh</div>
        </div>
        <div className="flex justify-end items-end">
          <button className="bg-black text-white px-2 py-1">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
