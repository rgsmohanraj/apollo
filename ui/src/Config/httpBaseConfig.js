import axios from 'axios';
import DefaultResponseDTO from "../DTO/DefaultResponseDTO";

const BASE_URL = "https://apollo-dev.vivriticapital.com/apollo";
const PREFIX = "/api/v1";

// Axios Client (Instance) with required Configurations

const client = axios.create({
    // Base URL for API requests
    baseURL: BASE_URL + PREFIX,

    // Timeout for requests (in milliseconds)
    timeout: 10000,

    // Default Header
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add authentication token or other headers
client.interceptors.request.use(
    (config) => {
        // TODO : Add General Bearer Token to the header
        // config.headers.Authorization = `Bearer ${getToken()}`;
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Response interceptor to handle response errors
client.interceptors.response.use(
    (response) => {
        // Transform response data to DTO
        const { statusCode, uri, message, responseBody, timestamp, error } = response.data;
        const defaultResponseDTO = new DefaultResponseDTO(statusCode, uri, message, responseBody, timestamp, error);

        if (error) {
            // Handle the error here, you can throw it or handle it in a custom way
            throw new Error(message);
        }

        return defaultResponseDTO;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default client;
