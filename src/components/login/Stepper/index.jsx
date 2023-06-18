import cls from './stepper.module.scss'

const Stepper = ({ currentStep }) => {
  return (
    <div className={cls.stepper}>
      <div className={`${cls.step} ${currentStep >= 1 ? cls.active : ''}`}>
        Login
      </div>
      <div className={`${cls.line} ${currentStep >= 2 ? cls.active : ''}`}></div>
      <div className={`${cls.step} ${currentStep >= 2 ? cls.active : ''}`}>
        Session
      </div>
    </div>
  )
}

export default Stepper;