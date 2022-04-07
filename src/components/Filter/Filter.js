import React from 'react';
import styled from "styled-components";
import filter from "./assets/filter.svg";
import {useDispatch} from "react-redux";
import {isFilterMenu} from "../../redux/actions/actions";

const Container = styled.button`
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 0 0 12px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: var(--white);
    transform: translateY(-4px);
    margin-bottom: 50px;
    position: relative;
    z-index: 0;
    transition: .3s ease-in-out;
    &:hover {
      transform: translateY(0);
    }
`


const Filter = props => {
    const dispatch = useDispatch()

    return (
        <Container onClick={() => dispatch(isFilterMenu())}>
            <img src={filter} alt="filter icon"/>
        </Container>
    );
};

export default Filter;