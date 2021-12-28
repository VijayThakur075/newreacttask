import { combineReducers } from "redux";
import { apiData } from "./apiData";
import { empData } from "./editdata";

const reducer = combineReducers({
    apiData,
    empData


})

export default reducer