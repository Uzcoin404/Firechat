import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UserContext } from "./context/auth";
import Chat from "./components/chat/chat";
import Page404 from "./pages/404/page404";
import Auth from "./pages/auth/auth";

import "./App.scss";
const isMobile = navigator.userAgentData.mobile;

function App() {
    const { user } = useContext(UserContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    index
                    element={!user ? <Navigate replace to="/auth" /> : <Chat />}
                />
                <Route
                    path="/auth"
                    element={!user ? <Auth /> : <Navigate replace to="/" />}
                />
                {/* <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
