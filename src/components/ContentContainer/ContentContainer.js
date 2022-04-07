import React, {useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import {useSelector} from "react-redux";
import Item from "../Item/Item";

const Container = styled.div`
    max-width: 1320px;
    margin: 0 auto;
`

const ContentContainer = props => {
    const itemArr = useSelector(state => state.content.itemArr)
    return (
        <Container>
            {
                itemArr.map(item =>
                    <Item
                        key={item.id}
                        title = {item.title}
                        content={item.content}
                        src={item.src}
                    />
                )
            }
        </Container>
    );
};

export default ContentContainer;