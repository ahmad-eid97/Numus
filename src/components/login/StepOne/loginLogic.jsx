//== Hooks
import { useState } from "react";
//== Store
import { useDispatch } from "react-redux";
import { addRequest, updateUsername } from "@/store/Slices/requestsSlice";
//== Api
import { Login } from "@/Api/auth/auth";
import { API } from "@/Api/handlers";

export default function useLogic(changeStep) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleFields = (e) => {
    setLoginData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  const login = async () => {
    const response = await API.POST('/login', loginData);
    if (response.data.username) {
      changeStep(2)
    }
    const request = {
      endpoint: 'http://145.131.81.249:8881/login',
      data: response.data
    }
    dispatch(updateUsername(loginData.username))
    dispatch(addRequest(request))
  }

  return {
    loginData,
    handleFields,
    login
  }
}