import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const history = useHistory();

    const handleLogOut = () => {
        sessionStorage.setItem("usertoken", '');
        sessionStorage.clear();
        history.push("/users/login"); // whichever component you want it to route to
    }

    return (
        <div>
            <h1> Success! </h1>
            <button type="button" onClick={handleLogOut}>
                Go home
            </button>
        </div>
    );
}

export default Dashboard;