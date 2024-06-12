"use client";

import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";

const EmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <button
      className="relative inline-flex h-10 overflow-hidden rounded-md p-[2px]"
      onClick={() =>
        window.navigator.clipboard
          .writeText("adiprayogongrwisnu@gmail.com")
          .then(() => {
            setIsCopied(true);
          })
      }
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-2 py-1 text-sm font-medium text-white gap-1 backdrop-blur-3xl">
        <IoMdMail /> {!isCopied ? "Email" : "Email copied"}
      </span>
    </button>
  );
};

export default EmailButton;
