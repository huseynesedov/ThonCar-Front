import React, { createContext, useState, useContext, useEffect } from 'react';
import { AccountApi } from "../../Api/account.api";
import { notification } from 'antd';
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    let [loginLoading, setLoginLoading] = useState(false);
    let [returnData, setReturnData] = useState({});

    const openNotification = (message, description, error) => {
        if (error) {
            notification.error({
                message,
                description,
                placement: 'topRight'
            });
        }
        else {
            notification.info({
                message,
                description,
                placement: 'topRight'
            });
        }
    };


    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('loggedIn');
        if (storedLoggedIn) {
            setLoggedIn(JSON.parse(storedLoggedIn));
        }
        else {
            setLoggedIn(false)
        }
        setLoading(false);
    }, []);

    const login = (userCode, customerCode, passwordHash) => {
        setLoginLoading(true);
        AccountApi.Login({ userCode, customerCode, passwordHash }).then((res) => {
            console.log(res)
            setLoading(true)
            setLoggedIn(true);
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('refreshToken', res.refreshToken);
            openNotification('Giriş uğurlu !', 'Xoş gəldiniz!', false);
        }).catch((error) => {
            setLoading(false);
            setLoggedIn(false)
            setLoginLoading(false)
            openNotification('Xəta baş verdi', error.response.data.message, true)
        }).finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000)
            setLoginLoading(false)
        })
    };





    const logout = () => {

        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
    };


    const updateReturnData = (d) => {
        setReturnData(d)
    };

    return (
        <AuthContext.Provider value={{ loggedIn, loading, loginLoading, login, logout, openNotification, updateReturnData, returnData }}>
            {children}
        </AuthContext.Provider>
    );
};