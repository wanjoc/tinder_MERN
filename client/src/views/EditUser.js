import React, {useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = (props) => {
    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [src, setSrcImage] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState(null);

    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/" + id)
            .then((res) => {
                console.log(res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setGender(res.data.gender);
                setAge(res.data.age);
                setSrcImage(res.data.src);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [id]);

    const handleEditUserSubmit = (e) => {
        e.preventDefault();

        const editedUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            gender: gender,
            age: age,
            src: src,
            description: description,
        };

        axios
            .put("http://localhost:8000/api/users" + id, editedUser)
            .then((res) => {
                console.log(res.data);
                history.push(`users`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            });
    };
    return (
        <div className="container p-5">
            <div style={{ width: "570px", height: "auto", border: "1px solid #eee", padding: "50px", margin: "0 auto" }}>
                <form onSubmit={handleEditUserSubmit}>
                    <h1 style = {{ textAlign: "center", marginBottom: "15px"}}>Edit User</h1>

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
                            <input type="password" className="form-control" placeholder="Password" onChange={e => { setPassword(e.target.value) }}></input>
                            {errors?.password && (
                                <span style={{ color: "red" }}> {errors?.password?.message}</span>
                            )}
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
                        <button className="btn-sm btn-primary me-5" type="submit">Submit!</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditUser;