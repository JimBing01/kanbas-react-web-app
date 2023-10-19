import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, Link, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import KanbasNarrowNavigation from "../KanbasNarrowNavigation";
import './index.css'

function Courses() {
    const { courseId } = useParams();
    localStorage.setItem("courseId",courseId);
    const course = db.courses.find((course) => course._id === courseId);
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
        "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements",
        "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    let {link} = links[0];
    for(let i = 0; i < links.length; i++){
        if(pathname.includes(links[i])){
            link = links[i];
            break;
        }
    }

    return (
        <div className="margin-left" style={{"display": "inline-block","width":"100%"}}>
            <div className="hidden-1100" style={{"margin-top": "20px","margin-left": "20px"}}>
                <i className="fa-solid fa-bars" style={{"color": "red", "display": "inline-block"}}></i>
                <nav className="breadcrumb-style"
                     aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="#" style={{"color": "red","textDecoration":"none"}}>
                                {course.number} {course.name}</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {link}
                        </li>
                    </ol>
                </nav>

                <button type="button" className="btn btn-secondary float-end"
                        style={{"margin-right": "100px","background-color": "#f5f5f5",
                            "color": "#2d3b45","border-color": "#c7cdd1"}}>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    Student View
                </button>

                <hr className="hr-style"></hr>
            </div>


            <CourseNavigation />


            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0 margin-left"
                    style={{
                        left: "320px",
                        top: "50px",

                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;

