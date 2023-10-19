import { Link, useParams, useLocation } from "react-router-dom";
import './index.css'


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
        "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements",
    "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="courses hidden-1100">
            <ul className="ul">
                {links.map((link, index) => (
                    <li className={`${pathname.includes(link) && "active"}`}>
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
}


export default CourseNavigation;

