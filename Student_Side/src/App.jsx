import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import ProfilePage from "./pages/ProfilePage";
import Classroom from "./pages/Classroom";
import LoginPage from "./pages/LoginPage";
// import HostelPage from "./pages/HostelPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/dashboard" element={<DashBoardPage />} />
                <Route exact path="/profile" element={<ProfilePage/>}/>
                {/* <Route exact path="/hostelpage" element={<HostelPage />} /> */}
                <Route exact path="/Classroom" element={<Classroom/>}/>
            </Routes>
        </Router>
    );
}
