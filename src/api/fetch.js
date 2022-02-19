import axios from 'axios';

const http = axios.create({
  baseURL: 'http://death.fm/soap/FM24sevenJSON.php',
});

const fetch = async (url, options) => {
  return http.request({ url, ...options });
};

export { fetch };
