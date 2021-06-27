import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from "../../components/Form";
import Carousel from "../../components/Carousel";
import Base from "../../components/Base";
import Input from "../../components/Input";

import axios from 'axios';


const initialValues = {
    name: "",
    password: ""
}


const SignIn = () => {
    const [user, setUser] = useState(initialValues);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:3333/user?nome=${user.name}_&password=${user.password}`)
            .then((response) => {
                if (response.data.length === 0) {
                    alert("usuario não cadastrado!")
                    history.push('/signup');
                }
                else {
                    alert("logado!");
                    history.push('/');
                }
                setUser({ name: '', password: '' });
            });



    }

    return (

        <Base>
            <Carousel />
            <Form
                title='Welcome to Invision'
                primaryButtonTite='Sign In'
                iconButtonTitle='Sign in with Google'
                message=' New Invision?'
                link=' Create Account'
                terms={null}
                route='/signup'
                onSubmit={onSubmit}>

                <Input
                    placeholder="Full Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
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


export default SignIn;