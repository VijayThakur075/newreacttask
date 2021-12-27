import { SET_DATA } from "../actions";

const initialState ={
    api: []
}

export const apiData = (state= initialState, action)=>{
    switch(action.type){
        case SET_DATA:
            return{
                ...state,
                api: action.payload
            }
            default:
                return state
    }
}