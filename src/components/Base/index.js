import React from "react";
import { Container } from "./styles";

function Base({ children }) {
    return (
        <Container>
            <main>
                {children}
            </main>

        </Container>
    );
};


export default Base;