"use client";
import React from "react";

export default function StepperItem({
  title,
  icon,
  background = "bg-gray-100",
  color = "text-blue-700",
  showLineEnd = true,
  showLineFirst = true,
  active = true
}: {
  title: string;
  icon: React.ReactNode;
  background?: string;
  color?: string;
  showLineEnd?: boolean;
  showLineFirst?: boolean;
  active?: boolean;
}) {
  return (
    <div className={`w-full grid grid-flow-col grid-rows-${(showLineEnd ? 3 : 0) + 1 + (showLineFirst ? 3 : 0) } items-center pb-10  relative`}>
      <div className={`col-span-3 mx-auto w-full h-0.5 ${showLineFirst ? 'bg-gray-500' : 'bg-transparent' } `}></div>

      <div
        className={`flex gap-2 flex-col items-center  justify-center text-center`}
      >
        <div
          className={`px-4 py-3 rounded-full text-lg z-999  ${active ? "text-white" : color} ${active ? "bg-green-500" : background}`}
        >
          {icon}
        </div>
      </div>

      {/* border */}
      {<div className={`col-span-3 mx-auto w-full h-0.5 ${showLineEnd ? "bg-gray-500" : "bg-transparent"} `}></div>}

      <p className={`text-black text-sm text-center absolute left-1/2 -translate-x-1/2 bottom-0`}>{title}</p>

    </div>
  );
}
