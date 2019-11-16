import axios from 'axios';

const createApi = () => {
  return axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });
};

export default createApi;
