import React from 'react';
import {Outlet} from 'react-router-dom'
import styled from "styled-components";
import logo from './assets/logo.svg'
import github from './assets/github.svg'
import Filter from "../Filter/Filter";
import FilterContent from "../FilterContent/FilterContent";
import Overlay from "../Overlay/Overlay";
import Github from "../Github/Github";
import {useDispatch} from "react-redux";
import {openNewPopup} from "../../redux/actions/actions"


const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  .logo {
    width: 100%;
    position: relative;
    z-index: 2;
    background: var(--secondary);
    padding: 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 1280px) {
      padding: 12px 5px;
    }
    img {
      display: block;
      width: 50%;
      font-weight: 700;
      @media only screen and (min-width: 1280px) {
        width: 270px;
      }
    }
  }
  .github {
    background: transparent;
    border: none;
    border-radius: 12px;
    width: 70px;
    display: block;
    flex-shrink: 0;
    position: absolute;
    right: 5px;
    cursor: pointer;
    @media only screen and (min-width: 1280px) {
      width: 90px;
      right: 30px;
    }
    
    img {
      width: 100%;
    }
  }
    
`


const Layout = props => {
    const dispatch = useDispatch()


    return (
        <>
            <Header>
                <div className="logo">
                    <img src={logo} alt="Tired front-end"/>
                    <button className="github" onClick={() => dispatch(openNewPopup('isGithub'))}>
                        <img src={github} alt="github"/>
                    </button>
                </div>
                <Filter/>
            </Header>
            <Outlet/>
            <FilterContent/>
            <Github/>
            <Overlay/>
        </>
    );
};

export default Layout;