import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-[50px] flex justify-between items-center">
      <div>
        <img
          src={"nav/hamburger.svg"}
          height={26}
          width={26}
          alt="ham-berger-menue"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img src={"nav/search.svg"} height={16} width={16} alt="search" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="border border-black text-sm rounded-lg  lg:w-[500px] ps-10 p-2.5"
            placeholder="search"
          />
        </div>
      </div>
      <div className="flex space-x-3">
        <img
          className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          src={"nav/add.svg"}
          height={26}
          width={26}
          alt="search"
        />
        <img
          className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          src={"nav/notification.svg"}
          height={26}
          width={26}
          alt="search"
        />
      </div>
    </header>
  );
};

export default Header;
