import routes from '../config/routes';
import fetchApi from './fetchApi';

export default async function () {
  try {
    const response = await fetchApi(routes.GET_TRACKS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }   
}
