import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 65%;
    justify-content: center;
    align-items: center;
`;

export const StyledInput = styled.input` 
    width: 90%;
    max-width: 900px;
    height: 40px;    
    outline:0 ;    
    border-top:none ;
    border-bottom-width: 1px;
    border-left: none;
    border-right: none;
    margin: 0.5rem 0;
    transition: all 0.2s ease-in;
    font-family: "Mulish";
    font-weight: 400;
    border-color: #707070;

    &:required:invalid{
        border-color:red;
    }
    &:hover {
        transform: translateY(-3px);
    }
`;


