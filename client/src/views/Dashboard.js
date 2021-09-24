import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = (props) => {
    const history = useHistory();

    const handleLogOut = (e) => {
        axios.post("http://localhost:8000/api/users/logout")
            .then(history.push("/users/login"));

    };
    return (
        <div>
            <h1>Success</h1>
            <form onSubmit={handleLogOut}>
                <button type="submit">Log Out</button>
            </form>
            
        </div>
    );
}

export default Dashboard;