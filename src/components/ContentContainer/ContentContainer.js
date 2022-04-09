import React, {useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Item from "../Item/Item";
import {setParsedData} from "../../redux/actions/actions";
import ContentPlaceholder from "./modules/ContentPlaceholder";

const Container = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 10px;
    height: ${props => props.cintainerHeight};
    @media only screen and (min-width: 1280px) {
      padding: 15px;
    }
`

const Placeholder = styled.p` 
    
`

const ContentContainer = ({settings}) => {
    const itemArr = useSelector(state => state.content.itemArr)
    const filterState = useSelector(({filterState}) => filterState)
    const dispatch = useDispatch()


    const {root, get, post} = settings

    useEffect( () => {
        async function test () {
            try {
                const req = await axios(root + post,{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: filterState
                })
                const res = await axios(root + get,{
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                dispatch(setParsedData(res.data))
            } catch (e) {
                console.log(e)
            }
        }
        test()
    }, [filterState])

    return (
        <Container>
            { itemArr.length > 0 ?
                itemArr.map(item =>
                    <Item
                        key={item.id}
                        title = {item.title}
                        content={item.text}
                        href={item.link}
                        src={item.src}
                    />) :
                <ContentPlaceholder />
            }
        </Container>
    );
};

export default ContentContainer;