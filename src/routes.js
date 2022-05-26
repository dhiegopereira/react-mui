import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { useAuth } from './hooks/useAuth';
import AuthProvider from './contexts/AuthContext';

import Login from "./pages/Login";
import Repository from "./pages/Repository";

function PrivateRoute({ component: Component }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? Component : <Navigate to="/" />;
}

function MyRoutes() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/repository" element={<PrivateRoute component={<Repository />} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default MyRoutes;
