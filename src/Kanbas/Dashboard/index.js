import { Link} from "react-router-dom";
import db from "../Database";
import './index.css';
import {useState} from "react";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {
    return (
        <div className="dashboard-left-part">
            <div className="dashboard">
                <span style={{
                    color: "gray",
                    "font-size": "xx-large"}}>
                    Dashboard
                </span>
                <h5>Course</h5>
                <div>
                    <input value={course.name} className="form-control input-course"
                           onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <input value={course.number} className="form-control input-course"
                           onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                </div>
               <div>
                   <div style={{display:"inline-block"}}>
                       Start Date<br/>
                       <input value={course.startDate} className="form-control input-course" type="date"
                              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                   </div>
                    <div style={{display:"inline-block"}}>
                        End Date<br/>
                        <input value={course.endDate} className="form-control input-course" type="date"
                               onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                    </div>

               </div>


                <button className="btn btn-success" onClick={addNewCourse} >
                    Add
                </button>

                <button className="btn btn-primary" style={{marginLeft:"10px"}} onClick={updateCourse} >
                    Update
                </button>
                <hr className="hr-style"></hr>
                <div className="published-course">
                    <span style={{
                        color: "black",
                        "font-size": "x-large"}}>
                        Published Courses({courses.length})
                    </span>
                    <hr className="hr-style"></hr>

                    <div className="flex-row card-over-4">
                        <div className="d-flex flex-row flex-wrap row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                            {courses.map((course) => (
                                <div className="col course-col">
                                    <div className="card course-col-card">
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}` }
                                              onClick={() => {
                                                  setCourse(course);
                                              }}>
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

                                            <button className="btn btn-warning"
                                                    style={{marginLeft:"40px",marginBottom:"10px"}}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}>
                                                Edit
                                            </button>

                                            <button className="btn btn-danger"
                                                    style={{marginLeft:"20px",marginBottom:"10px"}}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}>
                                                Delete
                                            </button>

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

