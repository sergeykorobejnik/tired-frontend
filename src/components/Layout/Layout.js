import React from 'react';
import {Outlet} from 'react-router-dom'
import styled from "styled-components";
import logo from './assets/logo.svg'
import Filter from "../Filter/Filter";
import FilterContent from "../FilterContent/FilterContent";
import Overlay from "../Overlay/Overlay";
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 100%;
    position: relative;
    z-index: 2;
    background: var(--secondary);
    padding: 10px 5px;
    @media only screen and (min-width: 1280px) {
      padding: 12px 5px;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 50%;
      font-weight: 700;
      @media only screen and (min-width: 1280px) {
        width: 270px;
      }
    }
  }
    
`


const Layout = props => {
    return (
        <>
            <Header>
                <div className="logo">
                    <img src={logo} alt="Tired front-end"/>
                </div>
                <Filter/>
            </Header>
            <Outlet/>
            <FilterContent/>
            <Overlay/>
        </>
    );
};

export default Layout;