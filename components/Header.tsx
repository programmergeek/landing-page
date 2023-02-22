import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <h1 className="font-bold text-2xl lg:text-4xl mb-2 md:mb-5">
      {props.children}
    </h1>
  );
};
