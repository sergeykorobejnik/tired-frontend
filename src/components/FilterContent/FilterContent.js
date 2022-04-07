import React from 'react';
import styled from "styled-components";


import SelectButton from "./modules/SelectButton";
import {useDispatch, useSelector} from "react-redux";
import {swapFilterSrcState} from "../../redux/actions/actions";
import Keywords from "./modules/Keywords";
import filterState from "../../redux/reducers/filterState";
import Experience from "./modules/Experience";


const Filter = styled.div`
    position: fixed;
    right: 0;
    top: 166px;
    width: 480px;
    height: 600px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 12px 0 0 12px;
    background: #fff;
    z-index: 3;
    transform: translateX(${({isActive}) => isActive ? 0 : "110%"});
    transition: .5s ease-in-out;
    h2 {
      color: var(--white);
      text-align: center;
      margin: 0;
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
      background: #000;
      padding: 8px 0;
      
    }
    .websites {
      display: flex;
      justify-content: space-between;
      padding: 0 50px;
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
        </Filter>
    );
};

export default FilterContent;