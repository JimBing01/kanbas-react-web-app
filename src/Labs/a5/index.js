import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays
    from "./WorkingWithArrays";
function Assignment5() {
    const API_BASE = process.env.REACT_APP_API_BASE_LAB;

    const URL = `${API_BASE}/a5/welcome`;

    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href= {URL}
                   className="list-group-item">
                    Welcome
                </a>
            </div>
            <h1>SimpleAPIExamples</h1>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
        </div>
    );
}
export default Assignment5;

