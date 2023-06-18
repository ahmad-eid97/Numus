//== Hooks
import { useContext } from 'react';
//== Component Logic
import useLogic from './sessionLogic';
//== Utils
import { RequestsContext } from '@/contexts/requestsContext/requestsContext';
//== Styles
import cls from './sessionForm.module.scss';

const SessionForm = () => {
    const { sessionData, handleFields, confirm } = useLogic();
    const { setOpenRequests } = useContext(RequestsContext);

    return (
        <div className={cls.sessionForm}>
            <img src="/images/logo/logo.png" alt="logo" loading="lazy" />
            <div className={cls.field}>
                <input type="text" placeholder='Employee ID' name="employeeId" value={sessionData.employeeId} onChange={(e) => handleFields(e)} />
                <div className={cls.icon}>
                    <i className="fa-light fa-user-tie"></i>
                </div>
            </div>
            <div className={cls.field}>
                <input type="text" placeholder='Session ID' name="id" value={sessionData.id} onChange={(e) => handleFields(e)} />
                <div className={cls.icon}>
                    <i className="fa-light fa-pen-nib"></i>
                </div>
            </div>

            <button onClick={confirm}>Confirm</button>

            <p onClick={() => setOpenRequests(true)}>Open requests bar!</p>
        </div>
    )
}

export default SessionForm;