// src/api/auth.js
import axios from 'axios';
import API_URL from './api';

export const loginUser = async (usernameOrPhone, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        email: usernameOrPhone,
        password,
    });
    return response.data;
};

export const registerUser = async (username, phone, password) => {
    const response = await axios.post(`${API_URL}/signup`, {
        username,
        phone,
        password,
    });
    return response.data;
};
