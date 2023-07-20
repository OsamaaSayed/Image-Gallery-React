import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aIOYZrevNLau97ZaC7Go1uzQlEN4jQB_s_infEO6mIQ'
    }
})



export const request = ({ ...options }) => {
    return client(options)
        .then(response => response.data)
        .catch(err => err);
}



