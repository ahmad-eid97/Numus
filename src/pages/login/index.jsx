//== Components
import { Steps } from "@/components";
//== Styles
import cls from './login.module.scss';

const Login = () => {
  return (
    <div className={cls.login}>
      <Steps />
    </div>
  )
}

export default Login