import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
    const [errors, setErrors] = useState(null);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            src: srcImage,
            description: description

        };
        axios.post("http://localhost:8000/api/users/new", newUser)
            .then((res) => { console.log(res.data); history.push('/users'); })
            .catch((err) => { console.log(err.response); setErrors(err.response.data.errors) });
    };
    // console.log(err.response.data.errors);

    return (
        <div className="container p-5">
            <div style={{ width: "570px", height: "auto", border: "1px solid #eee", padding: "50px", margin: "0 auto" }}>
                <form onSubmit={handleSubmit}>
                    <h1>Create an account</h1>

                    <div className="d-flex justify-content-between">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="First Name" onChange={e => { setFirstName(e.target.value) }}></input>
                            {errors?.firstName && (
                                <span style={{ color: "red" }}> {errors?.firstName?.message}</span>
                            )}
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Last Name" onChange={e => { setLastName(e.target.value) }}></input>
                            {errors?.lastName && (
                                <span style={{ color: "red" }}> {errors?.lastName?.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="mb-3 me-5">
                            <input type="number" className="form-control" placeholder="Age" onChange={e => { setAge(e.target.value) }}></input>
                            {errors?.age && (
                                <span style={{ color: "red" }}> {errors?.age?.message}</span>
                            )}
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Email" onChange={e => { setEmail(e.target.value) }}></input>
                            {errors?.email && (
                                <span style={{ color: "red" }}> {errors?.email?.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="me-2">Gender: </label>
                        <select onChange={e => { setGender(e.target.value) }} value={gender}>
                            <option value="Male" >Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to answer, or other">Prefer not to answer, or other</option>
                        </select>
                        {errors?.gender && (
                            <span style={{ color: "red" }}> {errors?.gender?.message}</span>
                        )}
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Password" onChange={e => { setPassword(e.target.value) }}></input>
                            {errors?.password && (
                                <span style={{ color: "red" }}> {errors?.password?.message}</span>
                            )}
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Confirm password" onChange={e => { setConfirmPassword(e.target.value) }}></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Image url" onChange={e => { setSrcImage(e.target.value) }}></input>
                        {errors?.src && (
                            <span style={{ color: "red" }}> {errors?.src?.message}</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">About me: </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => { setDescription(e.target.value) }}></textarea>
                        {errors?.description && (
                            <span style={{ color: "red" }}> {errors?.description?.message}</span>
                        )}
                    </div>

                    <div className="d-flex">
                        <button className="btn-sm btn-primary me-5" type="submit">Register</button>
                        <Link to="/users/login">Already registered?</Link>
                    </div>

                </form>
            </div>
        </div>
    );
}
export default NewUser;