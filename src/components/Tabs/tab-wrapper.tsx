import React from "react";

type Props = {
  children: React.ReactNode;
};

const TabWrapper = (props: Props) => {
  return <div className="flex items-center space-x-4 overflow-scroll">{props.children}</div>;
};

export default TabWrapper;
