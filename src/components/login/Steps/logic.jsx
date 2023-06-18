//== Hooks
import { useState } from "react";

export function useLogic() {
  const [currentStep, setCurrentStep] = useState(1);

  const changeStep = (newStep) => {
    setCurrentStep(newStep)
  }

  return {
    currentStep,
    changeStep
  }
}