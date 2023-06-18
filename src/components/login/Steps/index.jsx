//== Components
import { Stepper, StepOne, StepTwo } from '@/components';
//== Component Logic
import { useLogic } from './logic';

const Steps = () => {
  const { currentStep, changeStep } = useLogic();

  const steps = {
    1: <StepOne changeStep={changeStep} />,
    2: <StepTwo />
  }

  return (
    <>
      <Stepper currentStep={currentStep} />
      {steps[currentStep]}
    </>
  )
}

export default Steps