import styled from 'styled-components';

export const Container = styled.form`    
    display: flex;
    width: 100%; 
    flex-direction: column;
    align-items: center;
    overflow: hidden;    
    font-family: "Mulish";
    background:#fff;
`;

export const Title = styled.text`
    margin-top:50px;
    font-size: 24px;
    color:#707070 ;
    opacity: 1;
`;

export const ContainerDivider = styled.text`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center; 
    color: #707070;   
`;

export const Link = styled.a`
    text-align: center;
    color:#A9C5BA;
`;

export const Terms = styled.p`
    flex:1;
    justify-content: center;    
    align-items: center;
    text-align: center;
    font-size: 10px;
    color: #707070;
    font-weight: 300;
    max-width: 190px;
`;

export const Footer = styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    color: #707070;
`;

export const Forgot = styled.a`
    margin-left: 280px;
    font-family: "Mulish";
    color: #707070;
    text-decoration:none;
`;


export const Header = styled(Title)`
    margin:80px 0px 0px 300px;
    font-weight: bold;

  
`;