import React from 'react';
import styled from "styled-components";
import placeholderImg from "./assets/placeholderImg.svg"

const Container = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;   
    align-items: center;  
    flex-direction: column;
    padding: 20px;
    h2 {
      color: var(--white);
      font-size: 40px;
    }
`

const ContentPlaceholder = props => {
    return (
        <Container>
            <img src={placeholderImg} alt="Sad face"/>
            <h2>No filter matches</h2>
        </Container>
    );
};

export default ContentPlaceholder;