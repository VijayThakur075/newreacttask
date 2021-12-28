import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestData,requestDeleteEmp } from '../thunks/requestData'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import '../App.css'

export const Employee = () => {
    const dispatch = useDispatch()
    const empdata = useSelector(state => state.apiData.api)
    const [popup, setPopup] = useState(false);

    const length = empdata.length
    console.log('vvv', empdata);

    useEffect(() => {
        dispatch(requestData())
    }, [])

    const handleDelete=(id)=>{
        setPopup(true);
        dispatch(requestDeleteEmp(id))
    }

    return (
        <>
        {/* <Link className="btn btn-warning" to={'/add'}>add employee</Link><br /> <br /> */}
       <h3 id="center"> total employee {length}</h3>
            <Table striped bordered hover size="sm">
                <thead className='thead-dark'>
                    <tr className='table-dark'>
                        <th>employee id</th><br />
                        <th>employee name</th> <br />
                        <th>employee salary</th><br />
                        <th>employee age</th>
                        <th>update employee </th>
                        <th> employee email</th>

                    </tr>
                </thead>
                <tbody>
                    {empdata.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td>{item.id}</td><br />
                                <td>{item.employee_name}</td> <br />
                                <td>{item.employee_salary}</td><br />
                                <td>{item.employee_age}</td>
                                <td>{item.employee_age}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNo}</td>

                                <Button variant="danger">
                                    <Link className="btn btn-warning" to={`/edit/${item.id}/:id`} >update</Link>
                                </Button>
                                <Button>
                                <Link className="btn btn-danger" varient="success" onClick={()=>handleDelete(item.id)}>Delete</Link>
                                </Button>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>
        </>
    )
}


