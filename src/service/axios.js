import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aIOYZrevNLau97ZaC7Go1uzQlEN4jQB_s_infEO6mIQ'
    }
})

export default client;