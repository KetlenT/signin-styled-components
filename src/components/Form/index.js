import React from "react";

import { PrimaryButton } from "../Button/";
import { IconButton } from "../Button";
import Divider from "../Divider";

import {
    Container,
    ContainerDivider,
    Title,
    Link,
    Footer,
    Forgot,
    Terms
} from "./styles";

import { Header } from './styles';

const Form = ({
    title,
    children,
    primaryButtonTite,
    iconButtonTitle,
    message,
    route,
    link,
    terms,
    onSubmit,
}) => {


    return (
        <Container
            onSubmit={onSubmit} >

            <Header>Invision</Header>

            <Title>{title}</Title>

            {children}

            {title === 'Welcome to Invision' ?
                <Forgot href="#"> Forgot password? </Forgot>
                : <></>}

            <PrimaryButton title={primaryButtonTite} />


            <ContainerDivider>
                <Divider /> Or <Divider />
            </ContainerDivider>

            <IconButton title={iconButtonTitle} />

            {terms !== null ?
                <Terms>
                    By signing up, you agree to Invision
                    <Link href="#">  Terms of Conditions </Link>  and  <Link href="#">  Privacy Policy</Link>
                </Terms>
                : <></>
            }

            <Footer>
                {message}
                <Link href={route}> {link} </Link>
            </Footer>

        </Container>

    );
};


export default Form;