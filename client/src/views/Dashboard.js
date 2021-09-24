import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const history = useHistory();

<<<<<<< HEAD
    const handleLogOut = (e) => {
        axios.post("http://localhost:8000/api/users/logout")
            .then(history.push("/users/login"));
=======
    const handleLogOut = () => {
        sessionStorage.setItem("usertoken", '');
        sessionStorage.clear();
        history.push("/users/login"); // whichever component you want it to route to
    }
>>>>>>> 08f44e94c44bd4b6c8a6cbb814c07d3f8617dbc8

    return (
        <div>
<<<<<<< HEAD
            <h1>Success</h1>
            <form onSubmit={handleLogOut}>
                <button type="submit">Log Out</button>
            </form>
            
=======
            <h1> Success! </h1>
            <button type="button" onClick={handleLogOut}>
                Go home
            </button>
>>>>>>> 08f44e94c44bd4b6c8a6cbb814c07d3f8617dbc8
        </div>
    );
}

export default Dashboard;