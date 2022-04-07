
import produce from "immer";
import {ADD_NEW_FILTER_LABEL, FILTER_SRC_STATE_SWAP, REMOVE_FILTER_LABEL, SET_EXP_LEVEL} from "../actions/actionTypes";
import {IdGenerator} from "../../uttils/IdGenerator";

const setLocalStorage = state => {
    window.localStorage.setItem("filterState", JSON.stringify(state, null))
}

const initialState = window?.localStorage["filterState"] ?
    JSON.parse(window.localStorage["filterState"]) :
    {
    srcState: {
        djinni: false,
        dou: false,
        workua: false,
    },
    keywords: [],
    expLevel: 1
}

export default function filterState (state = initialState, action) {

    switch (action.type) {
        case ADD_NEW_FILTER_LABEL: {
            const nextState = produce(state, ({keywords}) => {
                keywords.push({
                    id: IdGenerator(action.payload),
                    text: action.payload
                })
            })
            setLocalStorage(nextState)
            return nextState
        }
        case FILTER_SRC_STATE_SWAP: {
            const nextState = produce(state, ({srcState}) => {
                srcState[action.payload] = !srcState[action.payload]
                console.log('action-captured')
            })
            setLocalStorage(nextState)
            return nextState
        }
        case REMOVE_FILTER_LABEL: {
            const nextState = produce(state, draft => {
                draft.keywords = draft.keywords.filter(item => item.id !== action.payload)
            })
            setLocalStorage(nextState)
            return nextState
        }
        case SET_EXP_LEVEL: {
            const nextState = produce(state, draft => {
                draft.expLevel = action.payload
            })
            setLocalStorage(nextState)
            return nextState
        }
    }

    return state
}

