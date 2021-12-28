import React from 'react'
import { setEditData } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import { requestEditData } from '../thunks/requestData';
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';

export const EditData = () => {
    const { id } = useParams()
    const employee = useSelector(state => state.empData.empInfo)
    const dispatch = useDispatch()
    const history = useHistory()
    const { employee_name, employee_age, employee_salary, email, phoneNo } = employee
    const handleChange = (e) => {
        dispatch(setEditData({ ...employee, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        dispatch(requestEditData(id))

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3008/data/${id}`, employee)
        history.push('/employe')
        alert('data has been submit')
        window.location.reload()
    }
    return (
        <div>
            <h1>Edit employee</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name </Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" name='employee_name'
                            value={employee_name} className="col-4"
                            placeholder='enter your name here'
                            onChange={(e) => handleChange(e)} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Age </Form.Label>
                    <Col sm='4'>
                        <Form.Control type="text" name='employee_age'
                            value={employee_age}
                            placeholder='enter your age here'
                            onChange={(e) => handleChange(e)} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Salary </Form.Label>
                    <Col sm='4'>
                        <Form.Control type="text" name='employee_salary'
                            value={employee_salary}
                            placeholder='enter your salary here'
                            onChange={(e) => handleChange(e)} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>email </Form.Label>
                    <Col sm='8'>
                        <Form.Control type="text" name='email'
                            value={email}
                            placeholder='enter your email here'
                            onChange={(e) => handleChange(e)} />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>phone number </Form.Label>
                    <Col sm='8'>
                        <Form.Control type="text" name='phoneNo'
                            value={phoneNo}
                            placeholder='enter your phoneNo here'
                            onChange={(e) => handleChange(e)} />
                    </Col>
                </Form.Group>

                <Button type='submit' variant="warning" onaClick={handleSubmit}>submit</Button>
            </Form>

        </div>
    )
}
