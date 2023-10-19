import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css'


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div style={{"display": "inline-block","vertical-align": "top",marginTop:"50px",width: "90%"}}>
            <div>
                <input type="text" className="form-control w-25" style={{"display": "inline-block"}}
                       placeholder="Search for Assignment"></input>

                    <button type="button" className="btn btn-secondary float-end"
                    style={{ backgroundColor: "#f5f5f5",color: "#2d3b45",borderColor: "#c7cdd1"}}>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </button>

                    <button type="button" className="btn btn-danger float-end" style={{"margin-right": "3px"}}>
                        <i className="fa fa-plus" aria-hidden="true"
                           style={{"margin-right": "3px","font-size": "small"}}></i>
                        Assignment
                    </button>

                    <button type="button" className="btn btn-secondary float-end"
                            style={{ backgroundColor: "#f5f5f5",color: "#2d3b45",borderColor: "#c7cdd1",
                            marginRight:"3px"}}>
                        <i className="fa fa-plus" aria-hidden="true"
                           style={{"margin-right": "3px","font-size": "small"}}></i>
                        Group
                    </button>
                    <hr className="hr-style"></hr>
            </div>

            <div className="list-group rounded-0" style={{marginTop:"10px"}}>
                <Link to="#"
                   className="list-group-item list-group-item-action list-group-item-secondary">
                    <i className="fa fa-ellipsis-v" aria-hidden="true" style={{"font-size": "small"}}></i>
                    <i className="fa fa-ellipsis-v" aria-hidden="true" style={{"font-size": "small"}}></i>
                    <span style={{"display": "inline-block",marginLeft:"10px"}}>Assignments</span>
                    <button type="button" className="btn float-end" style={{"margin-top": "0px"}}>
                        <i className="fa fa-ellipsis-v" aria-hidden="true"
                           style={{"font-size": "small"}}>
                        </i>
                    </button>
                    <button type="button" className="btn float-end" style={{"margin-top": "0px"}}>
                        <i className="fa fa-plus" aria-hidden="true"
                           style={{"font-size": "small"}}></i>
                    </button>


                    <label className="float-end rounded-pill"
                           style={{"display": "inline-block","border-color": "black",
                               "border-style": "solid","margin-right": "5px"}}>
                        <span style={{"font-size": "small"}}>&nbsp;40% of Total&nbsp;</span>
                    </label>
                </Link>

                <div style={{"border-left": "3px solid green"}}>
                    {courseAssignments.map((assignment) => (
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item">
                            <div style={{"display": "inline-block","vertical-align": "top"}}>
                                <i className="fa fa-ellipsis-v" aria-hidden="true" style={{"font-size": "small"}}></i>
                                <i className="fa fa-ellipsis-v" aria-hidden="true" style={{"font-size": "small"}}></i>
                                <i className="fa-regular fa-pen-to-square" style={{"color": "green","margin-left": "8px"}}></i>
                            </div>

                            <div style={{"display": "inline-block","margin-left": "8px"}}>
                                <div><b>{assignment.title}</b></div>
                            </div>

                            <button type="button" className="btn float-end">
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            <button type="button" className="btn float-end">
                                <i className="fa fa-check-circle" aria-hidden="true"
                                   style={{"color": "green"}}>
                                </i>
                            </button>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Assignments;

