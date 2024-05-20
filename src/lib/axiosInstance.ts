import axios from 'axios';

const AxiosInstance = axios.create();
AxiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
AxiosInstance.defaults.headers.Accept = 'application/json';
AxiosInstance.defaults.timeout = 60000;

// Add a request interceptor
AxiosInstance.interceptors.request.use(
  (config: any) => {
    // Do something before the request is sent
    // const accessToken = `Bearer ${localStorage.getItem("access-token")}`;;
    // if (accessToken) {
    //   config.headers.Authorization = accessToken;
    // }

    const newConfig = { ...config };

    const accessToken = JSON?.parse(
      localStorage?.getItem('access-token') as string,
    );

    if (accessToken?.token) {
      newConfig.headers.Authorization = `Bearer ${accessToken?.token.replace(
        /"/g,
        '',
      )}`;
    }
    return newConfig;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
