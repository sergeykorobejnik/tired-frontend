import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {isFilterMenu} from "../../redux/actions/actions";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    z-index: ${
        ({isOverlay}) => isOverlay ? 2 : -99
    };
    opacity: ${
        ({isOverlay}) => isOverlay ? "0.2" : "0"
    };
    transition: .5s ease-in-out;
    background: #000;
`

const Overlay = props => {
    const isOverlay = useSelector(({stateManager}) => stateManager.isOverlay)
    const dispatch = useDispatch()




    return (
        <Container isOverlay={isOverlay} onClick={() => dispatch(isFilterMenu())}/>
    );
};

export default Overlay;