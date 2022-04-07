import './App.css';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./routes/Main";

const GlobalStyles = styled.div`
`


function App() {
  return (
    <GlobalStyles>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Main/>}/>
            </Route>
        </Routes>
    </GlobalStyles>
  );
}

export default App;
