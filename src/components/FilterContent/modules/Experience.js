import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setExpLevel} from "../../../redux/actions/actions";

const Container = styled.div`

    .exp-title {
      color: var(--secondary);
      text-align: center;
      margin-top: 10px;
      margin-bottom: 22px;
    }
    .exp-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    input {
      appearance: none;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      z-index: -99;
    }
    input:checked + label {
      background: var(--secondary);
      color: white;
    }
    label {
    }
`
const ExpLevel = styled.button`
  padding: 5px 0;
  background: ${
    ({isChecked}) => isChecked ? "var(--secondary)" : "var(--gray)"
    };
  text-align: center;
  color: ${
          ({isChecked}) => isChecked ? "var(--white)" : "var(--secondary)"
  };
  font-size: 16px;
  font-weight: 700;
  transition: .5s ease-in-out;
  cursor: pointer;
  display: block;
  border: none;
`

const Experience = props => {

    const [state, setState] = useState([false, true, false])
    const dispatch = useDispatch()




    const handleChanges = currentIndex => {
        const nextState = state.map(
            (item, index) => {
                if (index === currentIndex) return item = true
                if (index === currentIndex) return item = true
                    else return item = false
            }
        )
        setState(nextState)
        dispatch(setExpLevel(currentIndex + 1))
    }

    return (
        <Container>
            <h2 className="exp-title">Experience</h2>
            <div className="exp-container">
                {
                    state.map(
                        (item, index) => {
                            return <ExpLevel
                                className={index === 1 ? "checked" : ""}
                                key={index}
                                onClick={() => handleChanges(index)}
                                isChecked={state[index]}
                            >
                                {index + 1} year</ExpLevel>
                        }
                    )
                }
            </div>
        </Container>
    );
};

export default Experience;