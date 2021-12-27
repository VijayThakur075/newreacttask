import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestData } from '../thunks/requestData'

export const Employee=() =>{
 const dispatch = useDispatch()
 const empdata = useSelector(state => state.apiData.api)
 console.log('vvv', empdata);
    
useEffect(() => {
   dispatch(requestData())
},[])

    return (
        <div>
            {empdata.map((emp)=>(
                {emp.[0].map(item=>(
                <ul key={item.id}>
                   
                    <li>{item.employee_salary}</li>

                    <li>{item.employee_name}</li>
                </ul>
                ))}
            ))}
        </div>
    )
}
