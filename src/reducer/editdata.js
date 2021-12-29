import { SET_EDIT_DATA } from "../actions";

const initialState = {
    empInfo: {
        employee_name: '',
        employee_age: '',
        employee_salary: '',
        email:'',
        phoneNo: '',
        gender:'',
        error:'',
        city:''
    }
}

export const empData = (state = initialState, action) => {
    switch (action.type) {
        case SET_EDIT_DATA:
            return {
                ...state,
                empInfo: action.payload
            }
        default:
            return state
    }
}