import styled from 'styled-components';

export const Button = styled.button`  
    width: 50px;
    height: 40px;
    top: 591px;
    max-width: 350px;
    min-width: 150px;
    border: none;
    margin: 1rem 0;
    border-radius: 100px;
    background-color: #707070;
    color: #fff;    
    cursor: pointer;
    transition: all 0.2s ease-in;
    font-family: "Mulish";
    font-weight: 200;
    &:hover {
      transform: translateY(-3px);
    }
  
`;
export const SecondButton = styled(Button)`  
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 100px;
    color:#000;
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: "Mulish";
    font-weight: 500;
    padding-right: 20px;
    min-width: 250px;

`;
