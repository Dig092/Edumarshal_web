import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import ProfilePage from "./pages/ProfilePage";
import Classroom from "./pages/Classroom";
import Fees from "./pages/Fees";
import LoginPage from "./pages/LoginPage";
import Events from "./pages/Events";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/dashboard" element={<DashBoardPage />} />
                <Route exact path="/profile" element={<ProfilePage/>}/>
                {/* <Route exact path="/hostelpage" element={<HostelPage />} /> */}
                <Route exact path="/Classroom" element={<Classroom/>}/>
                <Route exact path="/Fees" element={<Fees/>}/>
                <Route exact path="/events" element={<Events/>}/>
            </Routes>
        </Router>
    );
}