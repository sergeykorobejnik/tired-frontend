import produce from "immer";
import {IS_FILTER_MENU} from "../actions/actionTypes";

const initialState = {
    isFilter: false,
    isOverlay: false
}

export default function stateManager (state = initialState, action) {

    switch (action.type) {
        case IS_FILTER_MENU: {
            const nextState = produce(state, draft => {
                draft.isFilter = !draft.isFilter
                draft.isOverlay = !draft.isOverlay
            })
            return nextState
        }
        return state
    }

    return state
}
