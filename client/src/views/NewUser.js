import React, { useState } from 'react';
import axios from 'axios';

const NewUser = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [srcImage, setSrcImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            email: email,
            password: password,
            src: srcImage,
            description: description

        };
        axios.post("http://localhost:8000/api/users/new", newUser)
            .then((res) => { console.log() })
            .catch((err) => {console.log(err)});
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="First Name" onChange={e => { setFirstName(e.target.value) }}></input>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Last Name" onChange={e => { setLastName(e.target.value) }}></input>
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" placeholder="Age" onChange={e => { setAge(e.target.value) }}></input>
                </div>
                <div className="mb-3">
                    <select onChange={e => { setGender(e.target.value) }} value={gender}>
                        <option value="Male" >Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to answer, or other">Prefer not to answer, or other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Email" onChange={e => { setEmail(e.target.value) }}></input>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" onChange={e => { setPassword(e.target.value) }}></input>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Confirm password" onChange={e => { setConfirmPassword(e.target.value) }}></input>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Image url" onChange={e => { setSrcImage(e.target.value) }}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">About me:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => { setDescription(e.target.value) }}></textarea>
                </div>

                <button className="btn-sm btn-primary" type="submit">Register</button>

            </form>
        </div>
    );
}
export default NewUser;