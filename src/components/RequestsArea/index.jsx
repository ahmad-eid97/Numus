//== Hooks
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { RequestsContext } from '../../contexts/requestsContext/requestsContext';
//== Styles
import styles from './requestsArea.module.scss';

const RequestsArea = () => {
  const { openRequests, setOpenRequests } = useContext(RequestsContext)
  const { requestsList } = useSelector((state) => state.requests)

  return (
    <div className={`${styles.requestsArea} ${!openRequests ? styles.closed : ''}`}>
      <div className={styles.close} onClick={() => setOpenRequests(false)}>
        <i className="fa-light fa-xmark"></i>
      </div>
      <div className={styles.content}>
        {requestsList.map((request, idx) => (
          <div className={styles.request} key={idx}>
            <p>{request.endpoint}</p>
            <p>{JSON.stringify(request.data)}</p>
          </div>
        ))}
        {!requestsList.length && <h3>You have no requests yet!</h3>}
      </div>
    </div>
  )
}

export default RequestsArea
