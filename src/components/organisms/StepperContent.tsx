"use clienr";
import React from "react";
import StepperItem from "../moleculs/StepperItem";

interface Props {
  dataStep: { title: string; icon: React.ReactNode }[];
  group?: Record<string, number[]>;
  groupColor?: Record<string, string>;
  currentStep?: number;
}

export default function StepperContent({ dataStep, group, groupColor, currentStep}: Props) {
  if (!group) {
    return (
      <div className="flex items-center">
        {dataStep.map((step, i) => (
          <StepperItem
            key={i}
            title={step.title}
            icon={step.icon}
            showLineEnd={i !== dataStep.length - 1}
            showLineFirst={i !== 0}
            active={i === currentStep}
          />
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="flex items-center gap-2">
        {/* Step: Mulai (0) */}
        <div className="pt-6 w-1/4">
          <StepperItem
            title={dataStep[0].title}
            icon={dataStep[0].icon}
            showLineFirst={false}
            active={currentStep === 0}
          />
        </div>

        {/* Grouped steps */}
        {Object.entries(group).map(([groupName, stepIndexes]) => (
          <div
            key={groupName}
            className={`w-full text-black px-2 py-4 rounded flex flex-col items-center ${
              groupColor?.[groupName] || ""
            }`}
          >
            <span className="text-sm font-medium mb-1">{groupName}</span>
            <div className="flex items-center w-full">
              {stepIndexes.map((stepIdx) => (
                <StepperItem
                  key={stepIdx}
                  title={dataStep[stepIdx].title}
                  icon={dataStep[stepIdx].icon}
                  active={currentStep === stepIdx}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Step: Selesai (6) */}
        <div className="pt-6 w-1/4">
          <StepperItem
            title={dataStep[6].title}
            icon={dataStep[6].icon}
            showLineEnd={false}
            active={currentStep === 6}
          />
        </div>
      </div>

    </>
  );
}
