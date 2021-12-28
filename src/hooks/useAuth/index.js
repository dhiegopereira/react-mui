import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function useAuthProvider() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = async username => {
        try {
            let result = await fetch(`https://api.github.com/users/${username}`);
            if (result.status === 200) {
                result = await result.json()
                const data = await btoa(JSON.stringify(result));
                setIsAuthenticated(true);
                localStorage.setItem('token', data);
                return true;
            } else {
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
            setIsAuthenticated(true);
        }
    }, []);

    return {
        isAuthenticated,
        setIsAuthenticated,
        login,
        token
    };
}

export function useAuth() {
    return useContext(AuthContext);
}
