import React from 'react';
import styled from "styled-components";

import djinni from './assets/djinni.svg'
import dou from './assets/dou.svg'
import workua from './assets/workua.svg'

const ItemWrapper = styled.a`
    padding: 20px 33px;
    background: #fff;
    border-radius: 12px;
    position: relative;
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    margin-bottom: 30px;
    transition: .5s ease-in-out;
    span {
      font-size: 24px;
      font-weight: 700;
      display: block;
      margin-bottom: 23px;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      margin: 0;  
    }
    img {
      display: block;
      padding: 17px 11px;
      position: absolute;
      right: 0;
      top: 0;
    }
`

const Item = props => {
    const svgChoice = type => {
        switch (type) {
            case 'djinni': {
                return djinni
            }
            case 'dou': {
                return dou
            }
            case 'workua': {
                return workua
            }
        }
    }
    return (
        <ItemWrapper href={props.href}>
            <img
                src={svgChoice(props.src)}
                alt={props.src}
            />
            <span className="creation-date">{props.creactionDate}</span>
            <span>{props.title.length > 90 ? props.title.slice(0, 90) + '...' : props.title}</span>
            <p>{props.content}</p>
        </ItemWrapper>
    );
};

export default Item;