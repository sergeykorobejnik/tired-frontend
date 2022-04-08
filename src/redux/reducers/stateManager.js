import produce from "immer";
import {CLOSE_ALL_POPUPS, IS_FILTER_MENU, OPEN_NEW_POPUP} from "../actions/actionTypes";

const initialState = {
    isFilter: false,
    isOverlay: false,
    isGithub: false,
}

export default function stateManager (state = initialState, action) {

    switch (action.type) {
        case OPEN_NEW_POPUP: {
            const nextState = produce(state, draft => {
                draft[action.payload] = true
                draft.isOverlay = true
            })
            return nextState
        }
        case CLOSE_ALL_POPUPS: {
            const nextState = produce(state, draft => {
                for (const draftKey in draft) {
                    draft[draftKey] = false
                }
            })
            return nextState
        }
        return state
    }

    return state
}
