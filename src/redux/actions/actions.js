import {
    ADD_NEW_FILTER_LABEL,
    FILTER_SRC_STATE_SWAP,
    IS_FILTER_MENU, PARSE_DATA,
    PUT_FETCHED_DATA,
    REMOVE_FILTER_LABEL, SET_EXP_LEVEL, SET_PARSED_DATA
} from "./actionTypes";
import parser from "../../uttils/parser/parser";

export const putFetchedData = payload => {
    return {
        type: PUT_FETCHED_DATA,
        payload: payload
    }
}

export const swapFilterSrcState = payload => {
    return  {
        type: FILTER_SRC_STATE_SWAP,
        payload: payload
    }

}
export const addNewFilterLabel = payload => {
    return  {
        type: ADD_NEW_FILTER_LABEL,
        payload: payload
    }

}

export const removeFilterLabel = payload => {
    return  {
        type: REMOVE_FILTER_LABEL,
        payload: payload
    }
}
export const isFilterMenu = payload => {
    return  {
        type: IS_FILTER_MENU,
    }
}
export const setExpLevel = payload => {
    return  {
        type: SET_EXP_LEVEL,
        payload: payload
    }
}

export const setParsedData = payload => {
    return  {
        type: SET_PARSED_DATA,
        payload: payload
    }
}

