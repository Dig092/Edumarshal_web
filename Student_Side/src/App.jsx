import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import ProfilePage from "./pages/ProfilePage";
import Classroom from "./pages/Classroom";
import Fees from "./pages/Fees";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/dashboard" element={<DashBoardPage />} />
                <Route exact path="/profile" element={<ProfilePage/>}/>
                <Route exact path="/Classroom" element={<Classroom/>}/>
                <Route exact path="/Fees" element={<Fees/>}/>
            </Routes>
        </Router>
    );
}
