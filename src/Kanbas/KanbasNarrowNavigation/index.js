import './index.css';
import {Link, Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import db from "../Database";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
import NarrowNavigation from "../Courses/CourseNavigation/NarrowNavigation";

function KanbasNarrowNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calender", "Inbox", "History", "Studio", "Commons", "Question"];
    const icons = ["fa-regular fa-circle-user fa-xl","fa-solid fa-gauge fa-xl","fa-solid fa-book fa-xl", "fa-solid fa-calendar-days fa-xl",
        "fa-solid fa-inbox fa-xl", "fa-regular fa-clock fa-xl","fa-solid fa-film fa-xl",
        "fa-solid fa-arrow-right-from-bracket fa-xl","fa-regular fa-circle-question fa-xl"];
    const { pathname } = useLocation();
    const courseLinks = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
        "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements",
        "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    let  courseId  = localStorage.getItem("courseId");
    if(courseId == null) {
        courseId = db.courses[0]._id;
    }
    const course = db.courses.find((course) => course._id === courseId);
    let {link} = courseLinks[0];

    if (pathname.includes("Courses")) {
        for(let i = 0; i < courseLinks.length; i++){
            if(pathname.includes(courseLinks[i])){
                link = courseLinks[i];
                break;
            }
        }
    } else {
        for(let i = 0; i < links.length; i++){
            if(pathname.includes(links[i])){
                link = links[i];
                break;
            }
        }
    }

    const courseIcons = ["fa fa-home","fa fa-circle-o-notch","fa fa-plug","fa fa-plug",
        "fa fa-book","fa fa-fighter-jet","fa fa-area-chart","fa fa-users","fa fa-plug",
        "fa fa-commenting-o","fa fa-bullhorn","fa fa-columns","fa fa-file-text",
        "fa fa-book","fa fa-eercast","fa fa-circle-thin","fa fa-book","fa fa-plug","fa fa-cog"]

    return(
        <div>
            <div className="hidden-navigation-1100 whole-div-style">

                <button id="narrow-navigation-show" className="btn float-start" type="button"
                onClick={()=> {
                    var narrowNavigation = document.getElementById('narrow-navigation');
                    narrowNavigation.style.display = 'block'
                }}>
                    <i className="fa-solid fa-bars" style={{"color": "white"}}></i>
                </button>

                <button id="narrow-courses-show" className="btn float-end" type="button"
                onClick={ function () {
                    var narrowCoursesShow = document.getElementById('narrow-courses-show');
                    var narrowCourses = document.getElementById('narrow-courses');
                    var narrowCoursesClose = document.getElementById('narrow-courses-close');
                    narrowCourses.style.display='block'
                    narrowCoursesShow.style.display='none'
                    narrowCoursesClose.style.display='inline-block'
                }}>
                    <i className="fa fa-chevron-down" style={{"color": "white"}} aria-hidden="true"></i>
                </button>
                <button id="narrow-courses-close" type="button"
                        className="btn float-end"  style={{"display": "none"}}
                onClick={function () {
                    var narrowCoursesShow = document.getElementById('narrow-courses-show');
                    var narrowCourses = document.getElementById('narrow-courses');
                    var narrowCoursesClose = document.getElementById('narrow-courses-close');
                    narrowCourses.style.display='none'
                    narrowCoursesShow.style.display='block'
                    narrowCoursesClose.style.display='none'
                }}>
                    <i className="fa fa-times" aria-hidden="true" style={{"color": "white"}}></i>
                </button>

                <span style={{"color":"white"}}>{course.number}</span><br/>
                <span style={{"color": "white"}}>{link}</span>
            </div>

            <div id="narrow-navigation" className="narrow-navigation"
                 style={{"display": "none","vertical-align": "top","position": "fixed",
                     "z-index": "10"}}>
                <button id="narrow-navigation-close" type="button"
                        className="btn-close float-end" aria-label="Close"
                onClick={()=>{
                    var narrowNavigation = document.getElementById('narrow-navigation');
                    narrowNavigation.style.display='none'
                }}>
                </button>
                <ul>
                    {links.map((link, index) => (
                        <li>
                            <Link
                                key={index}
                                to={`/Kanbas/${link}`}
                            >
                                <div className="nav-icon-margin">
                                    <i className={icons[index]}
                                       style={{color: "red",marginRight:"10px"}}></i>
                                    {link}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <NarrowNavigation/>


        </div>

    );
}



export default KanbasNarrowNavigation