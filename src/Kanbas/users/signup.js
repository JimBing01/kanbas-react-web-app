import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/kanbas/Account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <input className="form-control" placeholder="username"
                   style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })} />
            <input
                className="form-control" placeholder="password"
                style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value })} />
            <button className="btn btn-primary" style={{marginLeft:"50px",marginTop:"20px"}}
                    onClick={signup}>
                Signup
            </button>
        </div>
    );
}
export default Signup;

