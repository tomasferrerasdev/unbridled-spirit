import axios from 'axios';

const unbridledSpiritAPI = axios.create({
  baseURL: '/api',
});

export default unbridledSpiritAPI;
