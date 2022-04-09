import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addNewFilterLabel, removeFilterLabel} from "../../../redux/actions/actions";
import Label from "./Label";




const Container = styled.div`
    .filter-title {
      color: #000;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 22px;
    }
    input {
      width: 100%;
      display: block;
      border: none;
      background: var(--secondary);
      height: 40px;
      padding: 7px 10px;
      color: var(--white);
      font-size: 20px;
      font-weight: 700;
      ::placeholder {
        color: white;
      }
    }
    .keyword-container {
      padding: 20px 10px;
      height: calc(34.5px + 20px *2);
      display: flex;
      div + div {
        margin-left: 10px;
      }
      border-bottom: 2px solid var(--gray);
  }
`




const Keywords = props => {
    const dispatch = useDispatch()
    const labelArr = useSelector(({filterState}) => filterState.keywords)


    const keyHandler = ({key, target}) => {
        //const template = new RegExp("[^_!@#$%^&*()_+= ](\\w+)", "g")
        const template = new RegExp("[A-Za-z0-9ЁёА-я]+", "g")
        const result = target.value.match(template)
        let isLabelExisting = false;
        labelArr.forEach(element => {if(element.text == result) isLabelExisting = !isLabelExisting})
        if(key === "Enter" && result?.length === 1 && !isLabelExisting) {
            target.value = ''
            dispatch(addNewFilterLabel(result[0]))
        }
    }


    return (
        <Container>
            <h2 className="filter-title">Keywords</h2>
            <input type="text" onKeyDown={keyHandler} placeholder={"Enter keyword..."}/>
            <div className="keyword-container">
                {
                    labelArr.map(({id, text}) =>
                        <Label
                        key={id}
                        text={text}
                        handler={() => dispatch(removeFilterLabel(id))}
                    />)
                }
            </div>
        </Container>
    );
};

export default Keywords;