"use client";

import { ReactNode } from "react";

const BaseButton = ({
  children,
  actionFn,
  size = "sm",
}: {
  children: ReactNode;
  actionFn: () => void;
  size?: "sm" | "lg";
}) => {
  return (
    <button
      className={`relative inline-flex h-10 overflow-hidden rounded-[8px] p-[2px] hover:-translate-y-1 hover:scale-105 transition-all ease-in delay-150 ${size === "sm" && "h-9"} ${size === "lg" && "h-11"}`}
      onClick={actionFn}
    >
      <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white dark:bg-slate-950 px-2 py-1 text-sm font-medium dark:text-white text-slate-950 gap-1 backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};

export default BaseButton;
