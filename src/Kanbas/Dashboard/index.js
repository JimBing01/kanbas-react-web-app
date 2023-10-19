import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';

function Dashboard() {
    return (
        <div className="dashboard-left-part">
            <div className="dashboard">
                <span style={{
                    color: "gray",
                    "font-size": "xx-large"}}>
                    Dashboard
                </span>
                <hr className="hr-style"></hr>
                <div className="published-course">
                    <span style={{
                        color: "black",
                        "font-size": "x-large"}}>
                        Published Courses({db.courses.length})
                    </span>
                    <hr className="hr-style"></hr>

                    <div className="flex-row card-over-4">
                        <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                            {db.courses.map((course) => (
                                <div className="col course-col">
                                    <div className="card course-col-card">
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                                            <img src="../../images/husky.jpg"
                                                 className="card-img-top" alt="...">
                                            </img>
                                            <i className="fa fa-ellipsis-v ellipsis-style" aria-hidden="true">
                                            </i>

                                            <div className="card-body">
                                                <h5 className="card-title card-title-style" >
                                                    {course.number} {course.name}
                                                </h5>
                                                <h5 className="card-title card-body-title" >
                                                    {course.number} {course.startDate}
                                                </h5>
                                                <p className="card-text card-body-text">
                                                    {course.startDate} {course.number}</p>
                                                <i className="fa-regular fa-pen-to-square"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;

