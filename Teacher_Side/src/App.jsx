import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
import LoginPage from "./pages/LoginPage";
export default function App() {
    return (
        <Router>
            <Routes>
            <Route exact path="/Exams" element={<Exams/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/" element={<LoginPage/>} />
            <Route exact path="/Classroom" element={<Classroom/>} />
            <Route exact path="/Events" element={<Events/>} />
            </Routes>
        </Router>
    );
}