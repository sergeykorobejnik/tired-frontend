import produce from "immer";
import {PUT_FETCHED_DATA, SET_PARSED_DATA} from "../actions/actionTypes";

const initialState = {
    itemArr: []

}

export default function content (state = initialState, action) {

    switch (action.type) {
        case SET_PARSED_DATA: {
            const nextState = produce(state, draft => {
                draft.itemArr = action.payload
            })
            return nextState
        }

    }

    return state

}