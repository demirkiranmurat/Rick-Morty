const fetchData = async endPoint => {
  const BASE_URL = 'https://rickandmortyapi.com/api/';
  const response = await fetch(BASE_URL + endPoint, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};

export default {fetchData};
