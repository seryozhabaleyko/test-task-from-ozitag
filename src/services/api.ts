import axios from 'axios';
import { Credentials, Token } from '../store/auth/auth.interface';

const requests = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

requests.interceptors.request.use(
    (config) => {
        const token: Token = JSON.parse(localStorage.getItem('token') || '{}');
        const access_token: string = token.accessToken;
        console.log('access_token', access_token);

        if (token) {
            config.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export async function signIn({ email, password }: Credentials) {
    const response = await requests.post(
        '/auth/user',
        JSON.stringify({ email, password, clientId: 1 }),
    );
    return response.data.data;
}

export async function signOut(): Promise<{ success: boolean }> {
    const response = await requests.post('/tager/user/profile/logout');
    return response.data.data;
}

export async function getUserProfile(): Promise<{ name: string; email: string }> {
    const response = await requests.get('/tager/user/profile');
    return response.data.data;
}
