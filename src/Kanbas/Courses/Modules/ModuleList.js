import React , { useEffect, useState }from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);


    return (
        <div className="display-1300 display-1100"
             style={{"display":"inline-block","margin-top":"40px",width:"70%"}}>
            <div style={{"display": "inline-block", "vertical-align": "top", "margin-top": "10px",
                     width:"100%"}}>
                <div>
                    <button type="button" className="btn btn-secondary float-end button-ellipsis">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </button>

                    <button type="button" className="btn btn-danger float-end button-module">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Module
                    </button>

                    <div className="dropdown float-end div-publish-all">
                        <button className="btn btn-secondary dropdown-toggle button-publish-all"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-check-circle" aria-hidden="true"
                               style={{"color": "green",marginRight:"3px"}}>
                            </i>
                            Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Publish All</Link></li>
                            <li><Link className="dropdown-item" to="#">Publish Week0</Link></li>
                            <li><Link className="dropdown-item" to="#">Publish Week1</Link></li>
                        </ul>
                    </div>

                    <button type="button" className="btn btn-secondary float-end button-view-progress">
                        View Progress
                    </button>
                    <button type="button" className="btn btn-secondary float-end button-collapse">
                        Collapse
                    </button>
                </div>
                <br/><br/>

                <hr className="hr-style"></hr>

                <ul className="list-group">
                    <li className="list-group-item">

                        <span style={{marginRight:"5px"}}>Module Name:</span>
                        <input value={module.name}
                               onChange={(e) =>
                                   dispatch(setModule({ ...module, name: e.target.value }))
                               }
                        />
                        <button className="btn btn-success" style={{marginLeft:"20px"}} onClick={handleAddModule}>
                            Add</button>

                        <button className="btn btn-primary" style={{marginLeft:"20px"}} onClick={() => handleUpdateModule()}>
                            Update
                        </button>
                        <br/><br/>

                        <textarea value={module.description} cols = "50"
                                  onChange={(e) =>
                                      dispatch(setModule({ ...module, description: e.target.value }))
                                  }
                        />


                    </li>
                    <br/>
                    {
                        modules
                            .filter((module) => module.course === courseId)
                            .map((module, index) => (
                                <li key={index} className="list-group-item rounded-0"
                                    style={{marginBottom:"40px",border:"solid",
                                        borderColor:"#c7cdd1",backgroundColor:"#f5f5f5"}}>
                                    <i className="fa fa-ellipsis-v list-group-font-small" aria-hidden="true"></i>
                                    <i className="fa fa-ellipsis-v list-group-font-small" aria-hidden="true"></i>
                                    <span style={{marginLeft:"10px"}}>{module.name}</span>


                                    <button type="button" className="btn float-end">
                                        <i className="fa fa-ellipsis-v list-group-font-small" aria-hidden="true">
                                        </i>
                                    </button>
                                    <button type="button" className="btn float-end">
                                        <i className="fa fa-plus list-group-font-small" aria-hidden="true"></i>
                                    </button>
                                    <button type="button" className="btn float-end" data-bs-toggle="collapse"
                                            data-bs-target={"#"+module._id} aria-expanded="false" aria-controls={module._id}>
                                        <i className="fa-solid fa-chevron-down list-group-font-small"></i>
                                    </button>
                                    <button type="button" className="btn float-end">
                                        <i className="fa fa-check-circle list-group-check-circle" aria-hidden="true"></i>
                                    </button>

                                    <button
                                        className="btn btn-warning float-end"
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger float-end"
                                        style={{marginRight:"5px"}}
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>
                                    <div className="collapse" id={module._id}>
                                        <div style={{marginLeft:"17px",fontSize:"small"}}>{module.description}</div>
                                    </div>

                                </li>
                            ))
                    }
                </ul>
            </div>
        </div>

    );
}
export default ModuleList;

