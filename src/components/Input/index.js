import React from "react";
import { Container, StyledInput, } from "./styles";

const Input = ({ type, title, placeholder, onChange }) => {

  return (
    <Container>

      <StyledInput
        name={title}
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
        onChange={onChange}
        minLength={type === 'password' ? 6 : null}
      />
    </Container>
  );
};

export default Input;