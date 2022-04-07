import React from 'react';
import styled from "styled-components";
import djinni from "../assets/djinni.svg";
import dou from "../assets/dou.svg";
import workua from "../assets/workua.svg";
const Item = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    display: block;
    margin-bottom: 8px;
  }
`
const Circle = styled.div`
  display: block;
  width: ${props => props.isChecked ? "60%" : "6px"};
  height: 2px;
  border-radius: 100px;
  background: #000;
  transition: .5s ease-in-out;
  margin: 0 auto;
`

const SelectButton = ({type, handler, isChecked}) => {
    const selectIcon = type => {
        switch (type) {
            case "djinni": return djinni
            case "dou": return dou
            case "workua": return workua
        }
    }
    return (
        <Item onClick={handler}>
            <img
                src={selectIcon(type)}
                alt={type}
            />
            <Circle isChecked={isChecked}/>
        </Item>
    );
};

export default SelectButton;