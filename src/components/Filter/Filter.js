import React from 'react';
import styled from "styled-components";
import filter from "./assets/filter.svg";
import {useDispatch} from "react-redux";
import {isFilterMenu} from "../../redux/actions/actions";

const Container = styled.button`
    border: none;
    width: 80px;
    height: 30px;
    border-radius: 0 0 12px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: var(--white);
    transform: translateY(-4px);
    margin-bottom: 25px;
    position: relative;
    z-index: 0;
    transition: .3s ease-in-out;
    &:hover {
      transform: translateY(0);
    }
    @media only screen and (min-width: 1280px) {
      width: 200px;
      height: 50px;
      margin-bottom: 50px;
    }
    img {
      max-width: 20px;
      @media only screen and (min-width: 1280px) {
        max-width: 100%;
        max-height: 100%;

      }
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