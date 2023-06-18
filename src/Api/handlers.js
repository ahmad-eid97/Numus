//== Utils
import axios from '../utils/axios';

class api {
  async Get(endpoint) {
    try {
      const response = await axios.get(endpoint);
      if (!response) return console.log(response);
      return response;
    } catch (err) {
      console.log(err)
    }
  }

  async POST(endpoint, body) {
    try {
      const response = await axios.post(endpoint, body);
      if (!response) return console.log(response);
      return response;
    } catch (err) {
      console.log(err)
    }
  }
}

export const API = new api();