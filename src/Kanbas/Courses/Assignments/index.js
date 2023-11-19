import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    setAssignments,
} from "./assignmentsReducer";

import * as client from "./client";

function Assignments() {
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment)

    const handleDeleteAssignment = (assignmentId) => {
        client.deleteAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
        });
    };

    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);


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
                        <Link to ={`/Kanbas/Courses/${courseId}/Assignments/${new Date().getTime().toString()}`}
                              onClick={(e) =>
                                  dispatch(setAssignment({ ...assignment, title: "New Assignments", description: "New Assignment Description",point:"",course: {courseId}}))}
                        style={{textDecoration:"none",color: "white"}}>
                            Assignment

                        </Link>
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
                    {assignments.map((assignment) => (
                        <li className="li-style list-group-item">
                            <Link  key={assignment._id}
                                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}

                                   onClick={(e) =>
                                       dispatch(setAssignment(assignment))}
                            style={{color:"black"}}>
                                <div style={{"display": "inline-block","vertical-align": "top"}}>
                                    <i className="fa fa-ellipsis-v" aria-hidden="true" style={{"font-size": "small"}}></i>
                                    <i className="fa fa-ellipsis-v" aria-hidden="true" style={{"font-size": "small"}}></i>
                                    <i className="fa-regular fa-pen-to-square" style={{"color": "green","margin-left": "8px"}}></i>
                                </div>

                                <div style={{"display": "inline-block","margin-left": "8px"}}>
                                    <div><b>{assignment.title}</b></div>
                                </div>
                            </Link>

                            <button type="button" className="btn float-end">
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            <button type="button" className="btn float-end">
                                <i className="fa fa-check-circle" aria-hidden="true"
                                   style={{"color": "green"}}>
                                </i>
                            </button>

                            <button type="button" className="btn btn-danger btn-sm float-end"
                                    data-bs-toggle="modal" data-bs-target={'#'+assignment._id}
                                    style={{marginTop:"0px"} }
                            >
                                Delete
                            </button>

                            <div className="modal fade" id={assignment._id} data-bs-backdrop="false"
                                 data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                                 aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Delete</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            if you are sure to remove the assignment?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">No
                                            </button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                                    onClick={() => handleDeleteAssignment(assignment._id)}>Yes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Assignments;

