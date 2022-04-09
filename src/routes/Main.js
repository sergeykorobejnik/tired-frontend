import React from 'react';
import ContentContainer from "../components/ContentContainer/ContentContainer";
import FilterContent from "../components/FilterContent/FilterContent";
import styled from "styled-components";


const Container = styled.main`
`


const settings = {
    root: 'https://tired-frontend-backend.herokuapp.com',
    get: '/parsed-data',
    post: '/filter-state'
}
const Main = props => {
    return (
        <Container>
            <ContentContainer settings={settings}/>
        </Container>
    );
};

export default Main;