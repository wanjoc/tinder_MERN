import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = (props) => {
    const history = useHistory();

    const handleLogOut = (e) => {
        axios.get("http://localhost:8000/api/users/logout")
            .then((res) => { console.log(res.data); history.push('/users/login'); })
            .catch((err) => { console.log(err.response.data.errors); });

    };
    return (
        <div>
            <h1>Success</h1>
            <button type="button" onClick={handleLogOut}>Log Out</button>
        </div>
    );
}

export default Dashboard;