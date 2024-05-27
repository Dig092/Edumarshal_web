import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
export default function App() {
    return (
        <Router>
            <Routes>
            <Route exact path="/Exams" element={<Exams/>} />
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/Classroom" element={<Classroom/>} />
            <Route exact path="/Events" element={<Events/>} />
            </Routes>
        </Router>
    );
}