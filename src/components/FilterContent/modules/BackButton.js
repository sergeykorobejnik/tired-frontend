import React from 'react';
import {useDispatch} from "react-redux";
import styled from "styled-components";
import submitIcon from "./assets/submitIcon.svg";
import {closeAllPopups} from "../../../redux/actions/actions";

const RedButton = styled.button` 
    border: none;
    background: var(--secondary);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    cursor: pointer;
    transition: .5s ease-in-out;
`


const BackButton = props => {
    const dispatch = useDispatch()

    return (
        <RedButton onClick={() => dispatch(closeAllPopups())}>
            <img src={submitIcon} alt="submit filters"/>
        </RedButton>
    );
};

export default BackButton;