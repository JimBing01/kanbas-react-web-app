import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "../assignmentsReducer";
import {addModule, setModule, updateModule} from "../../Modules/modulesReducer";
import * as client from "../client";


function AssignmentEditor() {
    const dispatch = useDispatch();
    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments)
    const assignment = useSelector((state) => state.assignmentsReducer.assignment)

    const navigate = useNavigate();
    const handleSave = async () => {
        console.log("Actually saving assignment TBD in later assignments");
        if(assignments.find(
            (assignment) => assignment._id === assignmentId) == null){
            client.createAssignment(courseId, assignment).then((assignment) => {
                dispatch(addAssignment(assignment));
            });

        }else{
            const status = await client.updateAssignment(assignment);
            dispatch(updateAssignment(assignment));

        }

        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="total" style={{display: "inline-block",verticalAlign: "top",marginTop:"50px",width: "60%"}}>
            <div>
                <button type="button" className="btn btn-secondary float-end common-button"
                        style={{"margin-right": "3px"}}>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>


                <button type="button" className="btn float-end" style={{"margin-right": "3px"}}>
                    <i className="fa fa-check-circle" aria-hidden="true"
                       style={{"color": "green","margin-right": "2px"}}>
                    </i>
                    Published
                </button><br/><br/>
                <hr className="hr-style"></hr>
            </div>

            <div className="list-group" style={{"margin-top": "10px"}}>
                <div className="mb-3">
                    <label for="assignment-name" className="form-label">Assignment Name</label>
                    <input className="form-control" id="assignment-name" value={assignment.title}
                           onChange={(e) =>
                               dispatch(setAssignment({ ...assignment, title: e.target.value }))
                            }
                    />
                </div>
                <div className="mb-3">
                  <textarea className="form-control"  rows="3" value={assignment.description}
                            onChange={(e) =>
                                dispatch(setAssignment({ ...assignment, description: e.target.value }))}/>
                </div>

                <div className="container text-center">
                    <div className="row">
                        <div className="col col-4">
                            Points
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <input type="text" className="form-control" value={assignment.point}
                                       onChange={(e) =>
                                           dispatch(setAssignment({ ...assignment, point: e.target.value }))}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-4">
                            Assignment Group
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Assignments</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-4">
                            Display Grade as
                        </div>
                        <div className="col" style={{"text-align": "left"}}>
                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Percentage</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkbox-display-grade-as"></input>
                                    <label className="form-check-label" for="checkbox-display-grade-as">
                                        Do not count this assignment towards the final grade
                                    </label>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{"margin-top": "20px"}}>
                        <div className="col col-4">
                            Submission Type
                        </div>
                        <div className="col rounded" style={{"border-style": "solid","border-color": "#c7cdd1"}}>
                            <div className="mb-3" style={{"margin-top": "10px"}}>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Online</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div style={{"text-align": "left"}}>
                                <span><b>Online Entry Options</b></span>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="checkbox-text-entry" checked></input>
                                        <label className="form-check-label" for="checkbox-text-entry">
                                            Text Entry
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="checkbox-website-url" checked></input>
                                        <label className="form-check-label" for="checkbox-website-url">
                                            Website URL
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="checkbox-media-recordings" checked></input>
                                        <label className="form-check-label" for="checkbox-media-recordings">
                                            Media Recordings
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="checkbox-student-annotation"></input>
                                        <label className="form-check-label" for="checkbox-student-annotation">
                                            Student Annotation
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="checkbox-file-uploads"></input>
                                        <label className="form-check-label" for="checkbox-file-uploads">
                                            File Uploads
                                        </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{"margin-top": "20px"}}>
                        <div className="col col-4">
                            Submission Attempts
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Unlimited</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-4">
                            Plaglarism Attempts
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>None</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-4">
                            Group Assignment
                        </div>
                        <div className="col" style={{"text-align": "left"}}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox-group-assignment"></input>
                                    <label className="form-check-label" for="checkbox-group-assignment">
                                        This is a Group Assignment
                                    </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-4">
                            Peer Reviews
                        </div>
                        <div className="col" style={{"text-align": "left"}}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="checkbox-peer-reviews"></input>
                                    <label className="form-check-label" for="checkbox-peer-reviews">
                                        Require Peer Reviews
                                    </label>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{"margin-top": "20px"}}>
                        <div className="col col-4">
                            Assign
                        </div>
                        <div className="col rounded"
                             style={{"border-style": "solid","border-color": "#c7cdd1",
                                 "text-align": "left","padding": "0px"}}>
                            <div style={{"margin": "10px"}}><span><b>Assign to</b></span></div>
                            <div className="mb-3" style={{"margin": "10px",position: "relative"}}>
                                <input type="text" className="form-control" style={{"display": "inline-block"}}></input>
                                <span id="everyone-badge" className="badge"
                                      style={{
                                              "left":"20px","top":"5px","background-color": "#f5f5f5",
                                          color: "#2d3b45",position: "absolute",height: "28px"}}>
                                    Everyone
                              <button id="everyone-close" className="btn "
                                      style={{padding: "0px",marginLeft: "10px"}}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                              </button>

                                </span>
                            </div>

                            <div style={{margin: "10px"}}><span><b>Due</b></span></div>
                            <div className="mb-3" style={{margin: "10px"}}>
                                <input type="date" className="form-control"  value={assignment.dueDate}
                                       onChange={(e) =>
                                           dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}></input>
                            </div>
                            <div className="row" style={{margin: "1px"}}>
                                <div className="col">
                                    <div><span><b>Available from</b></span></div>
                                    <div className="mb-3" style={{marginTop: "2px"}}>
                                        <input type="date" className="form-control"  value={assignment.availableFromDate}
                                               onChange={(e) =>
                                                   dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))}></input>
                                    </div>
                                </div>
                                <div className="col">
                                    <div><span><b>Until</b></span></div>
                                    <div className="mb-3" style={{marginTop: "2px"}}>
                                        <input type="date" className="form-control"  value={assignment.availableUntilDate}
                                               onChange={(e) =>
                                                   dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}></input>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-outline-secondary common-button" type="button"
                                    style={{
                                        width: "100%",borderLeft: "none",borderRight: "none",borderBottom: "none"}}>
                                <i className="fa-solid fa-plus"></i>
                                Add
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="hr-style"></hr>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="notify-users"></input>
                        <label className="form-check-label" for="notify-users">
                            Notify users that this content has changed
                        </label>

                        <button type="button" className="btn btn-danger float-end" onClick={handleSave}>
                            Save
                        </button>
                        <button type="button" className="btn btn-secondary float-end common-button"
                                style={{marginRight: "5px"}} onClick={()=>{navigate(`/Kanbas/Courses/${courseId}/Assignments`)}}>
                           Cancel
                        </button>
                </div><br/>

                <hr className="hr-style"></hr>
            </div>
        </div>
    );
}


export default AssignmentEditor;

