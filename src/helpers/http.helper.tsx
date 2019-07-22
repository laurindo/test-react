import axios from 'axios';

const URL = 'https://auto1-backend.herokuapp.com';

const prepareQueryString = (queries: any) => {
  try {
    let queryString = '';
    for (var key in queries) {
      queryString += `${key}=${queries[key]}&`;
    }
    return queryString.substr(0, queryString.length - 1);
  } catch (e) {
    return '';
  }
};

function getCarsEndpoint(params: Object = {}) {
  const query = prepareQueryString(params);
  return axios({
    url: `${URL}/api/cars?${query}`,
    method: "GET",
  });
}

function getColorsEndpoint() {
  return axios({
    url: `${URL}/api/colors`,
    method: "GET",
  }); 
}

function getManufacturersEndpoint() {
  return axios({
    url: `${URL}/api/manufacturers`,
    method: "GET",
  }); 
}

export { getCarsEndpoint, getColorsEndpoint, getManufacturersEndpoint };
