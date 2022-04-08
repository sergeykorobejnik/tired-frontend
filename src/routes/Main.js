import React from 'react';
import ContentContainer from "../components/ContentContainer/ContentContainer";


const settings = {
    root: 'https://tired-frontend-backend.herokuapp.com',
    get: '/parsed-data',
    post: '/filter-state'
}
const Main = props => {
    return (
        <main>
            <ContentContainer settings={settings}/>
        </main>
    );
};

export default Main;