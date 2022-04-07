import React from 'react';
import styled from "styled-components";
import icon from "./assets/closeIcon.svg";

const FilterLabel = styled.div`
  
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    padding: 4px 10px;
    color: var(--white);
    background: var(--secondary);
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
   
  
  button {
    position: absolute;
    flex-shrink: 0;
    display: flex;
    padding: 0;
    background: transparent;
    border-radius: 50%;
    border: none;
    right: -10px;
    width: 15px;
    height: 15px;
    transform: translateX(50%);
    cursor: pointer;
  }
  img {
    width: 100%;
  }
`


const Label = ({id, text, handler}) => {
    console.log(id)
    return (
        <FilterLabel>
            <FilterLabel>
                <span>{text}</span>
                <button onClick={handler}><img src={icon} alt="close"/></button>
            </FilterLabel>
        </FilterLabel>
    );
};

export default Label;