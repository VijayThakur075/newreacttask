import axios from "axios";
import { setData } from "../actions";


export const requestData = () => async (dispatch) => {
    try {
        await axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((response) => {
                dispatch(setData([response.data]))
                console.log(response.data)
            })
    } catch (err) {
        console.log(err);
    }

}