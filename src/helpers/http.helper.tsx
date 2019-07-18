import { useState, useEffect } from 'react';
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

interface Response {
  data?: {}
}

const _useFetch = (url: string) => {
  try {
    let [data, setData] = useState({});
    let [loading, setLoading] = useState(true);

    async function fetchUrl() {
      let response: Response;
      response = await axios({
        url,
        headers: { 'Content-Type': 'application/json' }
      }).catch(e => {
        return {};
      });
      debugger;
      const json = response.data;
      setData({ ...json });
      setLoading(false);
    }

    useEffect(() => {
      fetchUrl().catch(e => {
        console.log(e);
      });
    }, []);

    return [data, setData, loading];
  } catch (e) {
    return e;
  }
};

const useFetch = (url: string) => {
  return _useFetch(url);
};

const getCars = (params: Object = {}) => {
  const query = prepareQueryString(params);
  return _useFetch(`${URL}/api/cars?${query}`);
};

export { useFetch, getCars };
