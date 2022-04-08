import './App.css';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./routes/Main";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import asyncParseData from "./redux/actions/actions";

import parser from "./uttils/parser/parser";
import {settings} from "./uttils/parser/settings";
import axios from "axios";


const GlobalStyles = styled.div`
    
`


function App() {
  return (
    <GlobalStyles>
        <Routes>
            <Route path='/tired-frontend' element={<Layout/>}>
                <Route index element={<Main/>}/>
            </Route>
        </Routes>
    </GlobalStyles>
  );
}

export default App;
