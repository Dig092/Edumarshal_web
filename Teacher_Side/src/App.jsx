import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exams from "./pages/Exams";
import Events from "./pages/Events";
import ClassNotes from "./pages/ClassNotes";
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
import LoginPage from "./pages/LoginPage";
export default function App() {
    return (
        <Router>
            <Routes>
            <Route exact path="/Exams" element={<Exams/>} />
            <Route exact path="/ClassNotes" element={<ClassNotes/>}/>
            <Route exact path="/" element={<Dashboard/>} />
            <Route exact path="/Classroom" element={<Classroom/>} />
            <Route exact path="/Events" element={<Events/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            </Routes>
        </Router>
    );
}