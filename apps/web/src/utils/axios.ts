import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000/';

export function api() {
  const params = {
    headers: {
      'Content-Type': 'application/json',
      withCredentials: true, // Include cookies in requests
      // xsrfCookieName: "csrftoken",   // Cookie name
      // xsrfHeaderName: "X-CSRFToken"  // Request header name
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    },
  } as AxiosRequestConfig;
  const instance = axios.create({ baseURL: baseUrl, ...params });

  return instance;
}

export const catchErrorHandeler = (error: AxiosError) => {
  // Handle the error
  if (error.response) {
    // The request was made and the server responded with a status code
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
};
