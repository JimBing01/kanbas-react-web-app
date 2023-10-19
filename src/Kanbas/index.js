import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './index.css';
import KanbasNarrowNavigation from "./KanbasNarrowNavigation";


function Kanbas() {
    return (
        <div>
            <KanbasNarrowNavigation/>
            <KanbasNavigation />
            <div className="margin-left" style={{width:"100%","margin-left": "85px"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>


        </div>
    );
}
export default Kanbas;



