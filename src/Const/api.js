import axios from "axios";
import { AccountApi } from "../Api/account.api";

// .env'den BASE_URL çek
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://default-api-url.com";

// API için konfigürasyon fonksiyonları
const createConfig = (params, contentType) => {
    const token = localStorage.getItem('token');

    let config = {};
    if (params) {
        config["params"] = params;
    }
    if (token) {
        config["headers"] = {
            "Content-Type": contentType,
            "Authorization": `Bearer ${token}`,
        };
    }
    return config;
};

const createJsonConfig = (params) => createConfig(params, "application/json;charset=UTF-8");
const createFormDataConfig = (params) => createConfig(params, "multipart/form-data");

// Axios instance oluştur
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

// Yanıt interceptor: Token süresi dolduğunda yenileme işlemi yap
axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response && error.response.data.status === 2017 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');

            if (refreshToken) {
                try {
                    const { data } = await AccountApi.RefreshToken({ refreshToken });

                    localStorage.setItem('token', data.accessToken);
                    localStorage.setItem('refreshToken', data.refreshToken);

                    originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                    return axiosInstance(originalRequest);

                } catch (refreshError) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('loggedIn');
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
);

// API çağrıları için fonksiyonlar
export const BaseApi = {
    get(url, params) {
        return axiosInstance.get(url, createJsonConfig(params)).then(res => res.data);
    },
    post(url, params, queryParams) {
        return axiosInstance.post(url, params, createJsonConfig(queryParams)).then(res => res.data);
    },
    postFormData(url, params, queryParams) {
        const formData = new FormData();
        Object.keys(params).forEach(key => formData.append(key, params[key]));
        return axiosInstance.post(url, formData, createFormDataConfig(queryParams)).then(res => res.data);
    },
    postFormDataFile(url, params) {
        const formData = new FormData();
        Object.keys(params).forEach(key => formData.append(key, params[key]));
        return axiosInstance.post(url, formData, createFormDataConfig()).then(res => res.data);
    },
    delete(url, params) {
        return axiosInstance.delete(url, createJsonConfig(params)).then(res => res.data);
    },
    deleteNew(url, params) {
        return axiosInstance.delete(url, { ...createJsonConfig(), data: params }).then(res => res.data);
    },
    put(url, params) {
        return axiosInstance.put(url, params, createJsonConfig()).then(res => res.data);
    },
    getBaseUrl() {
        return BASE_URL;
    }
};
