import React, {useEffect, useState } from 'react';
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

}