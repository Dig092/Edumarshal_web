import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/dashboard" element={<DashBoardPage />} />
                <Route exact path="/profile" element={<ProfilePage/>}/>
            </Routes>
        </Router>
    );
}
