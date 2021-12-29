import React, { useState } from 'react'
import { setEditData } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import { requestEditData } from '../thunks/requestData';
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import { InputGroup, Row } from 'react-bootstrap';

export const EditData = () => {
    const { id } = useParams()
    const employee = useSelector(state => state.empData.empInfo)
    const dispatch = useDispatch()
    const history = useHistory()
    const [employeeError, setEmploeeError] = useState('')
    const { employee_name, employee_age, employee_salary, email, phoneNo, gender, city } = employee
    const handleChange = (e) => {
        dispatch(setEditData({ ...employee, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        dispatch(requestEditData(id))

    }, [])

    const valid=()=>{
        if(!employee_name.includes("a-z||A-z")){

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (JSON.parse(phoneNo.length < 10 || phoneNo.length > 10)) (
            alert("wrong number")
        )
        else if (
            !new RegExp(/^[a-zA-Z ]{2,40}$/).test(employee_name)
        ) {
            alert(' wrong employee_name')
        }
        else if (
            !new RegExp(/^\S[0-9]{0,2}$/).test(employee_age)
        ) {
            alert('wrong employee_age')
        }
        else if (
            !new RegExp(/^(?:m|M|male|Male|f|F|female|Female)$/).test(gender)
        ) {
            alert('this field is mandatory please select your gender')
        }
        else if (
            !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)
        ) {
            alert("wrong email")
        }
        else if (
            !new RegExp(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/).test(city)
        ) {
            alert('please select city')
        } else {
            await axios.put(`http://localhost:3008/data/${id}`, employee)

            history.push('/employe')
            window.location.reload()
        }

    }

    return (
        <div>
            <h1>Edit employee</h1>
            <Form onSubmit={handleSubmit} >
                <Row className="mb-3">
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
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> <br /> <br />
                            <Col sm='4'>
                                <Form.Control type="email" name='email'
                                    required
                                    value={email}
                                    placeholder='enter your email here'
                                    onChange={(e) => handleChange(e)} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a email.
                                </Form.Control.Feedback>
                            </Col>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>phone number </Form.Label>
                        <Col sm='4'>
                            <Form.Control type="text" name='phoneNo'
                                required
                                value={phoneNo}
                                placeholder='enter your phoneNo here'
                                onChange={(e) => handleChange(e)} />
                        </Col>
                    </Form.Group>
                    <Col sm='2'>
                        <select aria-required name="gender" value={gender} onChange={(e) => handleChange(e)} >
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </Col>
                    <Col sm='2'>
                        <select aria-required name="city" value={city} onChange={(e) => handleChange(e)} >
                            <option value="bombay">bombay</option>
                            <option value="agara">agra</option>
                            <option value="khargone">khargone</option>
                            <option value="indore">indore</option>
                        </select>
                    </Col>
                    <Col sm='2'>
                        <Button type='submit' variant="warning" onaClick={handleSubmit}>submit</Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}
