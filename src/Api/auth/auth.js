//== Api
import { API } from "../handlers"

export const Login = async (endpoint, body) => {
  const response = await API.POST(endpoint, body);
  if (response) return console.log(response);
}