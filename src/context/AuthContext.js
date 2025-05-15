import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          
            setUser({ token });
        }
    }, []);

    const login = async (usernameOrPhone, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email: usernameOrPhone,
                password,
            });
            if (response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
                setUser({ token: response.data.access_token });
            } else {
                throw new Error('Login failed!');
            }
        } catch (err) {
            throw new Error(err.response?.data?.message || 'Login failed!');
        }
    };

    const register = async (username, phone, password) => {
        try {
            const response = await axios.post(`${API_URL}/signup`, {
                username,
                phone,
                password,
            });
            if (response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
                setUser({ token: response.data.access_token });
            } else {
                throw new Error('Registration failed!');
            }
        } catch (err) {
            throw new Error(err.response?.data?.message || 'Registration failed!'); // Improved error handling
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
