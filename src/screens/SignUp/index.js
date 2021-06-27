import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from "../../components/Form";
import Carousel from "../../components/Carousel";
import Base from "../../components/Base";
import Input from "../../components/Input";


import axios from 'axios';


const initialValues = {
    name: "",
    email: "",
    password: ""
}


const SignUp = () => {
    const [user, setUser] = useState(initialValues);
    const history = useHistory();


    const onSubmit = (e) => {
        e.preventDefault();
        if (!user.name) {
            return alert("preencha todos os dados!")
        }
        axios.post('http://localhost:3333/user', user)
            .then((response) => {
                history.push('/signin');
            });

    }

    return (
        <Base>

            <Carousel />

            <Form
                title='Getting Started'
                primaryButtonTite='Sign Up'
                iconButtonTitle='Sign up with Google'
                message=' Already on Invision?'
                link='Log in'
                terms={true}
                route='/signin'
                onSubmit={onSubmit} >

                <Input
                    placeholder="Full Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <Input
                    type="email"
                    placeholder="Users name or Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <Input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />



            </Form>
        </Base>
    );
};


export default SignUp;