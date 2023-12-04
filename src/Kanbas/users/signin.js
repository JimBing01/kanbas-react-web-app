import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account");
    };
    return (
        <div>
            <h1>Signin</h1>
            <input type="text" className="form-control" placeholder="name" style={{width:"300px",marginLeft:"50px"}}
                   value={credentials.username}
                   onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <input type="text" className="form-control" placeholder="password"
                   style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                   value={credentials.password}
                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button className="btn btn-primary" onClick={signin}
                    style={{marginLeft:"50px",marginTop:"20px"}}> Signin </button>
            <br/>

            One of account for TA logging in:
            name:iron_man
            password:stark123

            name:dark_knight
            password:wayne123

            name:black_wido
            password:romanoff123
        </div>
    );
}
export default Signin;

