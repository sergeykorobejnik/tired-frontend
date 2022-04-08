import React from 'react';
import styled from "styled-components";


import SelectButton from "./modules/SelectButton";
import {useDispatch, useSelector} from "react-redux";
import {swapFilterSrcState} from "../../redux/actions/actions";
import Keywords from "./modules/Keywords";
import filterState from "../../redux/reducers/filterState";
import Experience from "./modules/Experience";
import BackButton from "./BackButton";


const Filter = styled.div`
    position: fixed;
    right: 0;
    top: 0px;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background: #fff;
    z-index: 20;
    transform: translateX(${({isActive}) => isActive ? 0 : "110%"});
    transition: .5s ease-in-out;
    @media only screen and (min-width: 1280px) {
      width: 480px;
      height: 100vh;
    }
    h2 {
      color: var(--white);
      text-align: center;
      margin: 0;
      font-size: 24px;
    }
    .src {
      h2 {
        color: #000;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 22px;
      }
    }
    .title-container {
      background: var(--secondary);
      padding: 10px 0;
      font-size: 16px;
      @media only screen and (min-width: 1280px) {
        padding: 16px 0;
      }
      
    }
    .websites {
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      @media only screen and (min-width: 1280px) {
        padding: 0 50px;
      }
    }   
    
`
const FilterContent = props => {
    const state = useSelector(({filterState}) => filterState.srcState)
    const isFilter = useSelector(({stateManager}) => stateManager.isFilter)
    const dispatch = useDispatch()
    const log = () => {
        console.log('clicked')

    }
    return (
        <Filter isActive={isFilter}>
            <div className="title-container">
                <h2>Filter</h2>
            </div>
            <div className="src">
                <h2>Parsing src</h2>
                <div className="websites">
                    <SelectButton
                        type={"djinni"}
                        isChecked={state.djinni}
                        handler={() => dispatch(swapFilterSrcState("djinni"))}
                    />
                    <SelectButton
                        onClick={log}
                        type={"dou"}
                        isChecked={state.dou}
                        handler={() => dispatch(swapFilterSrcState("dou"))}
                    />
                    <SelectButton
                        type={"workua"}
                        isChecked={state.workua}
                        handler={() => dispatch(swapFilterSrcState("workua"))}
                    />
                </div>
            </div>
            <Keywords/>
            <Experience/>
            <BackButton/>
        </Filter>
    );
};

export default FilterContent;