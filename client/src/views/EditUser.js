import React, {useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = (props) => {
    const { id } = useParams();

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [src, setSrc] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState(null);

    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/" + id)
            .then((res) => {
                console.log(res.data);
                setfirstName(res.data.firstName);
                setlastName(res.data.lastName);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setGender(res.data.gender);
                setAge(res.data.age);
                setSrc(res.data.src);
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
}

export default EditUser;