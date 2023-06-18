//== Hooks
import { useNavigate } from "react-router";
import { useState } from "react";
//== Store
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "@/store/Slices/requestsSlice";
//== Api
import { API } from "@/Api/handlers";

export default function useLogic() {
  const [sessionData, setSessionData] = useState({ employeeId: '', id: '' });
  const { username } = useSelector((state) => state.requests)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFields = (e) => {
    setSessionData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  const confirm = async () => {
    const response = await API.POST('/session', sessionData);
    // if (response.data.employeeId) {
    // router.push('/')
    // }
    const request = {
      endpoint: 'http://145.131.81.249:8881/session',
      data: response.data
    }
    dispatch(addRequest(request))

    const signinData = {
      sessionId: sessionData.id,
      username: username
    }

    const signinResponse = await API.POST('/sign_in', signinData);

    const request2 = {
      endpoint: 'http://145.131.81.249:8881/sign_in',
      data: signinResponse.data
    }
    dispatch(addRequest(request2))

    navigate('/')
  }

  return {
    sessionData,
    handleFields,
    confirm
  }
}