import axios from 'axios';

const api =axios.create({
    baseURL: 'http://18.188.41.187:9008',
});

export default api;