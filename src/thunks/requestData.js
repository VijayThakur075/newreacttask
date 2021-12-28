import axios from "axios";
import { setData, setEditData } from "../actions";


export const requestData = () => async (dispatch) => {
    try {
        await axios.get('http://localhost:3008/data')
            .then((response) => {
                dispatch(setData(response.data))
                console.log(response.data)
            })
    } catch (err) {
        console.log(err);
    } 

}

export const requestEditData=(id)=> async(dispatch)=>{
    try{
        const result = await axios.get(`http://localhost:3008/data/${id}`)
        dispatch(setEditData(result.data)) 
        console.log('vvvv',result.data);
    }catch(err){
        console.log(err);
    }
}
export const requestDeleteEmp=(id)=> async()=>{
    try{
        await axios.delete(`http://localhost:3008/data/${id}`)
        window.location.reload()
       
    }catch(err){
        console.log(err);
    }
}

export const requestAddEmp=(employee)=> async(dispatch)=>{
    try{
        const result = await axios.post('http://localhost:3008/data/',employee)
        dispatch(setEditData(result.data)) 
        console.log('vvvv',result.data);
    }catch(err){
        console.log(err);
    }
}