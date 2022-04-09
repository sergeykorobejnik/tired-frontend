import React from 'react';
import styled from "styled-components";
import filter from "./assets/filter.svg";
import {useDispatch} from "react-redux";
import {openNewPopup} from "../../redux/actions/actions";

const Container = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: var(--white);
    transform: translateY(-4px);
    margin-bottom: 25px;
    position: fixed;
    z-index: 0;
    transition: .3s ease-in-out;
    border: none;
    right: 5%;
    bottom: 3%;
    filter: invert(80%);
    &:hover {
      transform: translateY(0);
    }
    @media only screen and (min-width: 1280px) {
      width: 80px;
      height: 80px;
    }
    img {
      max-width: 40%;
      max-height: 40%;

      @media only screen and (min-width: 1280px) {
        max-width: 100%;
        max-height: 100%;
      }
    }
`


const Filter = props => {
    const dispatch = useDispatch()

    return (
        <Container onClick={() => dispatch(openNewPopup('isFilter'))}>
            <img src={filter} alt="filter icon"/>
        </Container>
    );
};

export default Filter;