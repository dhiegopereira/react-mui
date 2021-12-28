import { createContext } from 'react';
import { useAuthProvider } from '../../hooks/useAuth';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const value = useAuthProvider();

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}