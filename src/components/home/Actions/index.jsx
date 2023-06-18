// NEXT STUFF
import { useContext } from 'react';
// CONTEXTS
import { RequestsContext } from '@/contexts/requestsContext/requestsContext';
//== Component Logic
import useLogic from './logic';
// STYLES
import cls from './actions.module.scss';

const Actions = () => {
  const { pressCash } = useLogic()
  const { setOpenRequests } = useContext(RequestsContext);

  return (
    <div className={cls.actions}>
      <button onClick={pressCash}>Cash</button>
      <div className={cls.btns}>
        <button>Close</button>
        <button onClick={() => setOpenRequests(true)}>Open</button>
      </div>
    </div>
  )
}

export default Actions
