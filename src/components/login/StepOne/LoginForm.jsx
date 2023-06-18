//== Hooks
import { useContext } from 'react';
//== Component Logic
import useLogic from './loginLogic';
//== Utils
import { RequestsContext } from '@/contexts/requestsContext/requestsContext';
//== Styles
import cls from './loginForm.module.scss';

const LoginForm = ({ changeStep }) => {
    const { loginData, handleFields, login } = useLogic(changeStep);
    const { setOpenRequests } = useContext(RequestsContext);

    return (
        <div className={cls.loginForm}>
            <img src="/images/logo/logo.png" alt="logo" loading="lazy" />
            <div className={cls.field}>
                <input type="text" placeholder='Username' name="username" value={loginData.username} onChange={(e) => handleFields(e)} />
                <div className={cls.icon}>
                    <i className="fa-regular fa-at"></i>
                </div>
            </div>
            <div className={cls.field}>
                <input type="password" placeholder='Password' name="password" value={loginData.password} onChange={(e) => handleFields(e)} />
                <div className={cls.icon}>
                    <i className="fa-regular fa-unlock-keyhole"></i>
                </div>
            </div>

            <button onClick={login}>Login</button>

            <p onClick={() => setOpenRequests(true)}>Open requests bar!</p>
        </div>
    )
}

export default LoginForm;