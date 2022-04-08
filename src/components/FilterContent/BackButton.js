import React from 'react';
import {useDispatch} from "react-redux";
import styled from "styled-components";
import backBtn from "./modules/assets/backBtn.svg";
import {openNewPopup} from "../../redux/actions/actions";

const RedButton = styled.button` 
    border: none;
    background: #F66;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    cursor: pointer;
`


const BackButton = props => {
    const dispatch = useDispatch()

    return (
        <RedButton onClick={() => dispatch(openNewPopup('isFilter'))}>
            <img src={backBtn} alt="come back"/>
        </RedButton>
    );
};

export default BackButton;