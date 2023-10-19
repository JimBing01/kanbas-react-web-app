import './index.css';
import {Link} from "react-router-dom";
import ModuleList from "../Modules/ModuleList";

function Home() {
    return (
        <div>
            <ModuleList/>

            <div className="hidden-1300"
                 style={{
                     "display": "inline-block",
                     "vertical-align": "top",
                     "margin-left": "30px",
                     "margin-top":"40px"
                 }}>
                Course Status <br/>
                <button type="button" className="btn btn-secondary button-unpublish">
                    <i className="fa-solid fa-ban"></i>
                    Unpublish
                </button>
                <button type="button" className="btn btn-secondary button-published">
                    <i className="fa-regular fa-circle-check"></i>
                    Published
                </button>

                <div className="list-group rounded-0"
                     style={{"margin-top": "15px"}}>
                    <Link to="#"
                          className="list-group-item list-group-item-action list-group-item-secondary right-list-group">
                        Import Existing Content
                    </Link>
                    <Link to="#"
                          className="list-group-item list-group-item-action list-group-item-secondary right-list-group">
                        Import From Commons
                    </Link>
                    <Link to="#"
                          className="list-group-item list-group-item-action list-group-item-secondary right-list-group">
                        Choose Home Page
                    </Link>
                    <Link to="#"
                          className="list-group-item list-group-item-action list-group-item-secondary right-list-group">
                        View Course Stream
                    </Link>
                    <Link to="#"
                          className="list-group-item list-group-item-action list-group-item-secondary right-list-group">
                        New Announcement
                    </Link>
                    <Link to="#"
                          className="list-group-item list-group-item-action list-group-item-secondary right-list-group">
                        New Analytics
                    </Link>
                    <Link to="#"
                          className="list-group-item list-group-item-action list-group-item-secondary right-list-group">
                        View Course Notification
                    </Link>
                </div>

                <div style={{"margin-top": "10px"}}>
                    To Do
                    <hr className='hr-style'></hr>
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action"
                              style={{"border": "none", "font-size": "small"}}>
                            <div style={{"color": "red"}}>Grade A1- ENV + HTML</div>
                            <div style={{"color": "gray"}}>100 points Sep 18 at 11:59pm</div>
                        </Link>
                    </div>
                </div>

                <div style={{"margin-top": "10px"}}>
                    <span>Coming Up</span>
                    <button type="button" className="btn float-end">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span style={{"color": "red"}}>View Calendar</span>
                    </button>
                    <hr className="hr-style"></hr>

                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action"
                              style={{"border": "none", "font-size": "small"}}>
                            <div>
                                <div style={{"display": "inline-block", "vertical-align": "top"}}>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </div>
                                <div style={{"display": "inline-block", "margin-left": "5px"}}>
                                    <div style={{"color": "red"}}>Lecture</div>
                                    <div style={{"color": "gray"}}>CS4550.12631.202410</div>
                                    <div style={{"color": "gray"}}>Sep 11 at 11:45pm</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action"
                              style={{"border": "none", "font-size": "small"}}>
                            <div>
                                <div style={{"display": "inline-block", "vertical-align": "top"}}>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </div>
                                <div style={{"display": "inline-block", "margin-left": "5px"}}>
                                    <div style={{"color": "red"}}>CS5610 06 SP23 Lecture</div>
                                    <div style={{"color": "gray"}}>CS4559.12361.202410</div>
                                    <div style={{"color": "gray"}}>Sep 11 at 6pm</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action"
                              style={{"border": "none", "font-size": "small"}}>
                            <div>
                                <div style={{"display": "inline-block", "vertical-align": "top"}}>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </div>
                                <div style={{"display": "inline-block", "margin-left": "5px"}}>
                                    <div style={{"color": "red"}}>CS5610 Web Development</div>
                                    <div style={{"color": "red"}}>Summer 1 2023 - LECTURE</div>
                                    <div style={{"color": "gray"}}>CS4550.12631.202410</div>
                                    <div style={{"color": "gray"}}>Sep 11 at 7pm</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home
