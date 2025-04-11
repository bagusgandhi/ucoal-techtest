"use client";
import { useImmerReducer } from "use-immer";
import { StepperContent } from "@/components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  stepperData,
  groupColors,
  stepperGroup,
} from "@/constants/stepperContent";

export default function Home() {
  const [state, dispatch] = useImmerReducer(stateReducer, initialState);

  return (
    <>
      <div className="p-4">
        <h1 className="front-bold text-2xl text-black text-center">
          Perjanjian Sewa Alat Berat PT Baturona Adimulya - PT Cahaya
        </h1>
      </div>

      <div className="p-4">
        <StepperContent
          dataStep={stepperData}
          group={stepperGroup}
          groupColor={groupColors}
          currentStep={state.step}
        />
      </div>

      <div className="flex items-center justify-center">
        <Button
          type="primary"
          disabled={state.step === state.stepLength - 1}
          icon={<ArrowRightOutlined />}
          onClick={() =>
            dispatch({ type: "set step", payload: state.step + 1 })
          }
        >
          Next Step
        </Button>
      </div>
    </>
  );
}

interface initialStateType {
  step: number;
  stepLength: number;
}

const initialState: initialStateType = {
  step: 0,
  stepLength: 7,
};

function stateReducer(draft: initialStateType, action: { type: string; payload: number | string | boolean | undefined | null }) {
  switch (action.type) {
    case "set step":
      draft.step = action.payload as number;
      break;
  }
}
