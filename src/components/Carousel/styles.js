import styled from 'styled-components';

export const Container = styled.div`  
    width: 100%; 
    height:657px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Content = styled.div`
    width: 100%;   
    justify-content: center;
    align-items: center;
    text-align: center;
    object-fit: cover;
`;

export const Div = styled(Content)`
    max-width: 500px;
`;

export const Text = styled.text`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.text`
    font-size: 24px;   
    font-family: "Mulish";
    font-weight: 200;
    color: white;
`;
export const SubTitle = styled(Title)`
   margin-top: 20px;
    font-size: 16px; 

`;

export const Image = styled.img`
    height: 100%;
    width: 100%;  
    margin-top:100px; 
    margin-bottom:20px; 

`;