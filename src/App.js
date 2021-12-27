import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Repository from "./pages/Repository";

function ProtectRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      element={props =>
        true ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <ProtectRoute>
          <Route path="repository" element={<Repository />} />
        </ProtectRoute> */}
      </Routes>
    </Router>
  );
}

export default App;
