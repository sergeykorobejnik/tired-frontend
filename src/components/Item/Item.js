import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import djinni from './assets/djinni.svg'
import dou from './assets/dou.svg'
import workua from './assets/workua.svg'

const ItemWrapper = styled.a`
    padding: 15px 20px;
    background: var(--white);
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    margin-bottom: 30px;
    transition: .5s ease-in-out;
    display: flex;
    flex-direction: column;
    opacity: ${({isMounted}) => isMounted ? "1" : "0"};
    @media only screen and (min-width: 1280px) {
      padding: 20px 30px;
    }
    span {
      font-size: 16px;
      font-weight: 700;
      display: block;
      margin-bottom: 15px;
      @media only screen and (min-width: 1280px) {
        font-size: 20px;
        font-weight: 700;

      }
    }
    p {
      font-size: 14px;
      font-weight: 400;
      margin: 0;  
      @media only screen and (min-width: 1280px) {
        font-size: 16px;
        font-weight: 400;
      }
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

    const cutItemText = ({title, content}) => {

        if(window.matchMedia("only screen and (min-width: 1280px)").matches) {
            return {
                title: title.slice(0, 90) + "...",
                content: content.slice(0, 266) + "..."
            }
        } else {
            return {
                title: title.slice(0, 25) + "...",
                content: content.slice(0, 100) + "..."
            }
        }

    }


    const[isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true)
        }, 500)
    }, [isMounted])


    return (
        <ItemWrapper href={props.href} isMounted={isMounted}>
            <img
                src={svgChoice(props.src)}
                alt={props.src}
            />
            <span>{cutItemText(props).title}</span>
            <p>{cutItemText(props).content}</p>
        </ItemWrapper>
    );
};

export default Item;