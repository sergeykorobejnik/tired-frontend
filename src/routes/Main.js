import React from 'react';
import ContentContainer from "../components/ContentContainer/ContentContainer";

const Main = props => {
    return (
        <div>
            <ContentContainer fetchUrl={'https://jsonplaceholder.typicode.com/posts/'}/>
        </div>
    );
};

export default Main;