import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://death.fm/soap/FM24sevenJSON.php'
});

export default apiClient;
