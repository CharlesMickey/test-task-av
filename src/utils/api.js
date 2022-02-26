import { BASE_URL } from './constants';

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export const getData = async () => {
  const res = await fetch(BASE_URL, {
    method: 'GET',
  });
  return checkResponse(res);
};
