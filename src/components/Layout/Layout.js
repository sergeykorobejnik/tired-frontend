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
      padding: 30px 45px;
      background: #000;
      border-radius: 0 0 12px 12px;
      width: 580px;
      position: relative;
      z-index: 2;

  }
    img {
      font-size: 24px;
      font-weight: 700;
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