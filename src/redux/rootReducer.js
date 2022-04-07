import {combineReducers} from "redux";
import content from "./reducers/content"
import filterState from "./reducers/filterState";
import stateManager from "./reducers/stateManager";

export default combineReducers({
    content,
    filterState,
    stateManager
})