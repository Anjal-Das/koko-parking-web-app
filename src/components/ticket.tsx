import React from "react";

type Props = {
  no?: number;
  vehicleNo?: string;
  driverName?: string;
  in?: string;
};

const Ticket = (props: Props) => {
  return (
    <div className="py-10 h-[200px] w-[440px] bg-[#FFBDBD] flex justify-center items-center rounded-xl">
      <div className="grid grid-cols-[30%_70%]  w-full gap-3 px-4 md:px-12">
        <div className="w-full flex justify-start items-center font-bold text-5xl">
          01
        </div>
        <div>
          <div className="font-bold">KL 41 N 8986</div>
          <div>In : 9:00 Am</div>
          <div>D : Suresh</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
