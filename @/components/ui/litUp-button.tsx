import React, { ReactNode } from "react";

interface LitUpButtonProps {
  text: string;
  icon?: ReactNode;
  position?: "right" | "left";
  link: string;
}

const LitUpButton = ({
  text,
  icon,
  position = "left",
  link,
}: LitUpButtonProps) => {
  return (
    <a
      href={link}
      className="p-[2px] relative hover:cursor-pointer"
      download="CV-Ngr-Wisnu-Adiprayogo"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] flex gap-1 justify-center items-center text-sm font-medium relative group transition duration-200 text-white hover:bg-transparent">
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </div>
    </a>
  );
};

export default LitUpButton;
