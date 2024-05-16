import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Events from "./pages/Events";
import ClassNotes from "./pages/ClassNotes";
import Dashboard from "./pages/Dashboard";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/Exams" element={<Exams />} />
                <Route exact path="/ClassNotes" element={<ClassNotes />} />
                {/* <Route exact path="/" element={<Events/>} /> */}
                <Route exact path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}