import React from 'react';
import styled from "styled-components";
import github from "./assets/github.svg"
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
    position: fixed;
    background: var(--white);
    top: ${({isGithub}) => {
        return isGithub ? 
                "50%" : 
                "-50%"
    }};
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 80vw;
    z-index: 10;
    border-radius: 12px;
    overflow: hidden;
    transition: .5s ease-in-out;
    @media only screen and (min-width: 1280px) {
      width: 920px;
    }
    .github-header {
      background: var(--secondary);
      padding: 13px 5px;
      margin-bottom: 46px;
      
      img {
        display: block;
        width: 40px;
        margin: 0 auto;
        @media only screen and (min-width: 1280px) {
          width: 64px;
        }
      }
      
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        margin: 0;
        font-size: 36px;
        @media only screen and (min-width: 1280px) {
          font-size: 48px;
        }
      }
      a {
        text-decoration: none;
        color: var(--secondary);
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        @media only screen and (min-width: 1280px) {
          font-size: 24px;
        }
      }
      & > :nth-child(n) {
        margin-bottom: 80px;
      }
    }
`

const Github = props => {
    const isGithub = useSelector(({stateManager}) => stateManager.isGithub)

    return (
        <Container isGithub={isGithub}>
            <div className="github-header">
                <img src={github} alt="github"/>
            </div>
            <div className={"content"}>
                <h2>FRONTEND</h2>
                <a href="https://github.com/sergeykorobejnik/tired-frontend">https://github.com/sergeykorobejnik/tired-frontend</a>
                <h2>BACKEND</h2>
                <a href="https://github.com/sergeykorobejnik/tired-frontend-backend">https://github.com/sergeykorobejnik/tired-frontend-backend</a>
            </div>
        </Container>
    );
};

export default Github;