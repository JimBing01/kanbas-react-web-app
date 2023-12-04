import * as client from "./client";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
function Account() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/kanbas/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input type="text" className="form-control" placeholder="password"
                           style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                        value={account.password}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                    <input type="text" className="form-control" placeholder="firstName"
                           style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                        value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                    <input type="text" className="form-control" placeholder="lastName"
                           style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                        value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                    <input  type="date" className="form-control" placeholder="dob"
                           style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                        value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                    <input type="text" className="form-control" placeholder="email"
                           style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                        value={account.email}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                    <select className="form-control" style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}
                        value={account.role} onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save} className="btn btn-primary"
                            style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}>
                        Save
                    </button><br/>
                    <button onClick={signout} className="btn btn-danger"
                            style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}>
                        Signout
                    </button><br/>

                    <Link to="/kanbas/admin/users" className="btn btn-warning"
                          style={{width:"300px",marginLeft:"50px",marginTop:"20px"}}>
                        Users
                    </Link>

                </div>
            )}
        </div>
    );
}
export default Account;