import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = (props) => {
const Dashboard = () => {
    const history = useHistory();

    const handleLogOut = () => {
        sessionStorage.setItem("usertoken", '');
        sessionStorage.clear();
        history.push("/users/login"); // whichever component you want it to route to
    }
<<<<<<< HEAD
//hel
=======

    };
>>>>>>> d743ae4f646f56de35a3ee8754df90cd6d21586b
    return (
        <div>
            <h1> Success! </h1>
            <button type="button" onClick={handleLogOut}>
                Go home
            </button>
        </div>
    );
}