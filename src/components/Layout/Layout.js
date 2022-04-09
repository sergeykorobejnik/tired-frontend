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
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 50px;
  background: var(--white);
  padding: 10px 40px;
  box-shadow: inset 0 -5px 0 0 rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1280px) {
    padding: 15px 40px;
    justify-content: flex-start;
  }
  
  .logo {
    width: 200px;
    position: relative;
    z-index: 2;
    background: var(--secondary);
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    @media only screen and (min-width: 1280px) {
      
    }
    img {
      display: block;
      width: 100%;
      font-weight: 700;
      object-fit: contain;
    }
  }
  .github {
    filter: invert(100%);
    background: transparent;
    border: none;
    border-radius: 12px;
    width: 70px;
    display: block;
    flex-shrink: 0;
    position: absolute; 
    top: 12px;
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
                </div>
                <button className="github" onClick={() => dispatch(openNewPopup('isGithub'))}>
                    <img src={github} alt="github"/>
                </button>
            </Header>
            <Outlet/>
            <Filter/>
            <FilterContent/>
            <Github/>
            <Overlay/>
        </>
    );
};

export default Layout;