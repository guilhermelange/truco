import axios from "axios";

function getAPIClient(ctx?: any) {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
    })

    api.interceptors.request.use(config => {
        return config;
    })

    return api;
}

export const api = getAPIClient();