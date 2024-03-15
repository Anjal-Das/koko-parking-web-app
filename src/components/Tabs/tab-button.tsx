import React from "react";

type Props = {
  key: string;
  selected: boolean;
  label: string;
  onClick: () => void;
};

const TabButton = (props: Props) => {
  return (
    <div key={props.key}>
      <button
        onClick={props.onClick}
        className={`px-4 py-2 rounded-lg w-[150px]   ${
          props.selected
            ? "bg-[#F1F1F1]"
            : "hover:bg-[#F1F1F1]/60 uppercase font-light text-[#928D8D]"
        }`}
      >
        <div className="">{props.label}</div>
      </button>
    </div>
  );
};

export default TabButton;
