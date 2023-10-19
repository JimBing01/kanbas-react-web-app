import {Link, useLocation, useParams} from "react-router-dom";
import db from "../../../Database";

function NarrowNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calender", "Inbox", "History", "Studio", "Commons", "Question"];
    const icons = ["fa-regular fa-circle-user fa-xl","fa-solid fa-gauge fa-xl","fa-solid fa-book fa-xl", "fa-solid fa-calendar-days fa-xl",
        "fa-solid fa-inbox fa-xl", "fa-regular fa-clock fa-xl","fa-solid fa-film fa-xl",
        "fa-solid fa-arrow-right-from-bracket fa-xl","fa-regular fa-circle-question fa-xl"];
    const { pathname } = useLocation();
    const courseLinks = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
        "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements",
        "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const  courseId  = localStorage.getItem("courseId");
    const course = db.courses.find((course) => course._id === courseId);
    let {link} = courseLinks[0];
    for(let i = 0; i < courseLinks.length; i++){
        if(pathname.includes(courseLinks[i])){
            link = courseLinks[i];
            break;
        }
    }
    const courseIcons = ["fa fa-home","fa fa-circle-o-notch","fa fa-plug","fa fa-plug",
        "fa fa-book","fa fa-fighter-jet","fa fa-area-chart","fa fa-users","fa fa-plug",
        "fa fa-commenting-o","fa fa-bullhorn","fa fa-columns","fa fa-file-text",
        "fa fa-book","fa fa-eercast","fa fa-circle-thin","fa fa-book","fa fa-plug","fa fa-cog"]
    return(
        <div id="narrow-courses" className="narrow-courses"
             style={{"display": "none","vertical-align": "top",
                 "z-index": "10","position": "fixed"}}>
            <ul className="ul">
                {courseLinks.map((link, index) => (
                    <li>
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                        >
                            <i className={courseIcons[index]}
                               style={{color: "red",marginRight:"10px"}}></i>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NarrowNavigation;