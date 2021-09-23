import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const LoginUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginUser = {
            //shorthand can be used when the key name matches the var name
            email,
            password,

        };
        axios.get("http://localhost:8000/api/users/new", loginUser)
            .then((res) => { console.log(res.data) })
            .catch((err) => { setErrors(err.response.data.errors) });
    };

    return (
        <div className="container p-5">
            <div style={{ width: "570px", height: "auto", border: "1px solid #eee", padding: "50px", margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Email" onChange={e => { setEmail(e.target.value) }}></input>
                        {errors?.email && (
                            <span style={{ color: "red" }}> {errors?.email?.message}</span>
                        )}
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Password" onChange={e => { setPassword(e.target.value) }}></input>
                        {errors?.password && (
                            <span style={{ color: "red" }}> {errors?.password?.message}</span>
                        )}
                    </div>


                    <div className="d-flex">
                        <button className="btn-sm btn-primary me-5" type="submit">Login</button>
                        <Link to="/users/new">New user?</Link>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default LoginUser;