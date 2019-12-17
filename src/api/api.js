import axios from 'axios';
import {actions} from '~/actions/actions';
import Swal from 'sweetalert2';

export const BASE_URL = `https://htmlacademy-react-2.appspot.com`;
const POST_DOMAIN = `wtw`;
const TIMEOUT = 5000;
const Status = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};
export const Route = {
  LOGIN: `/login`,
  MOVIES: `/`,
};

const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: `${BASE_URL}/${POST_DOMAIN}`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const fireError = (error) => Swal.fire(`Oops...`, error, `error`);

  const onSuccess = (response) => response;

  const onError = (err) => {
    switch (err.response.status) {
      case Status.NOT_FOUND: {
        const {error = `Not found`} = err.response.data;
        fireError(error);
        dispatch(actions.films.setError({
          status: true,
          message: error
        }));
        dispatch(actions.films.setLoading(false));
        break;
      }

      case Status.BAD_REQUEST: {
        const {error = `Bad request`} = err.response.data;
        fireError(error);
        break;
      }
    }

    return false;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createApi;
