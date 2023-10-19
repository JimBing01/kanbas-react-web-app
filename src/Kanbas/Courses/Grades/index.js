import db from "../../Database";
import {Link, useParams} from "react-router-dom";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="total" style={{display: "inline-block","vertical-align": "top",marginTop:"50px",width: "90%"}}>
            <div>
                <button type="button" className="btn btn-secondary float-end common-button">
                    <i className="fa-solid fa-gear"></i>
                </button>
                <div className="dropdown float-end" style={{display: "inline-block",marginRight: "10px"}}>
                    <button className="btn btn-secondary dropdown-toggle common-button"
                            type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        <i className="fa-solid fa-file-export"></i>
                        Export
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-secondary float-end common-button"
                        style={{marginRight: "10px"}}>
                    <i className="fa-solid fa-file-import"></i>
                    Import
                </button>
            </div>
            <div className="container text-left" style={{marginTop: "20px",paddingLeft:"0px"}}>
                <div className="row" >
                    <div className="col" style={{paddingLeft:"0px"}}>
                        <div><span><b>Student Names</b></span></div>
                        <div style={{marginTop: "10px"}}>
                            <div className="mb-3" style={{position: "relative"}}>
                                <i className="fa-solid fa-magnifying-glass"
                                   style={{position: "absolute",marginTop: "10px",
                                       marginLeft: "5px",zIndex: "2"}}></i>
                                <div className="dropdown">
                                    <input type="search" className="form-control dropdown-toggle"
                                           data-bs-toggle="dropdown" placeholder="Search Students"
                                           style={{paddingLeft: "25px"}}></input>
                                        <ul className="dropdown-menu">
                                            {enrollments.map((enrollment) => {
                                                const user = db.users.find((user) => user._id === enrollment.user);
                                                return(
                                                    <li>
                                                        <Link className="dropdown-item" to="#">{user.firstName} {user.lastName}</Link>
                                                    </li>
                                                );
                                            })}

                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div><span><b>Assignment Names</b></span></div>
                        <div style={{marginTop: "10px"}}>
                            <div className="mb-3" style={{position: "relative"}}>
                                <i className="fa-solid fa-magnifying-glass"
                                   style={{position: "absolute",marginTop: "10px",marginLeft: "5px"
                                       ,zIndex: "2"}}></i>
                                <div className="dropdown">
                                    <input type="search" className="form-control dropdown-toggle"
                                           data-bs-toggle="dropdown" placeholder="Search Assignments"
                                           style={{paddingLeft: "25px"}}></input>
                                    <ul className="dropdown-menu">
                                        {assignments.map((assignment) => (
                                            <li><Link className="dropdown-item" to="#">{assignment.title}</Link></li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <button type="button" className="btn btn-secondary common-button">
                    <i className="fa-solid fa-filter"></i>
                    Apply Filters
                </button>
            </div>

            <div class="table-responsive" style={{marginTop: "20px"}}>
                <table class="table table-striped table-bordered" >
                    <thead align="middle">
                        <tr valign="middle">
                            <td>Student Name</td>
                            {assignments.map((assignment) => (<th>{assignment.title}<br/>Out of 100</th>))}
                        </tr>
                    </thead>
                    <tbody align="middle">
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);})}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;

