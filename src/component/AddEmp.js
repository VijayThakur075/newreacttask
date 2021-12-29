import React, { useEffect, useState } from 'react'
import { setEditData } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { requestAddEmp } from '../thunks/requestData';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, Modal } from 'react-bootstrap';

export const AddEmp = () => {
    const employee = useSelector(state => state.empData.empInfo)
    const [show, setShow] = useState(true);
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const { employee_name, employee_age, employee_salary, email, phoneNo, gender, city } = employee
    const handleChange = (e) => {
        if (
            !new RegExp(/^[a-zA-Z ]{2,40}$/).test(employee_name)
        ) {
            alert(' wrong employee_name')
        } else {
            dispatch(setEditData({ ...employee, [e.target.name]: e.target.value }))
        }
    }


    const handleClose = () => setShow(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNo.length < 10 || phoneNo.length > 10) (
            alert("wrong number")
        )
        else if (
            !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)
        ) {
            alert("wrong email")
        } else if (
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
        } else if (
            !new RegExp(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/).test(city)
        ) {
            alert('please select city')
        } else {
            dispatch(requestAddEmp(employee))
            history.push('/employe')
            window.location.reload()
        }

    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Modal.Header closeButton>
                                <Modal.Title>Add new employee</Modal.Title>
                            </Modal.Header>
                            <p>{employee.employee_name}</p>
                            <Form.Label>Name </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name='employee_name'
                                    value={employee_name} className="col-4"
                                    placeholder='enter your name here'
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Age </Form.Label>
                            <Col sm='8'>
                                <Form.Control type="text" name='employee_age'
                                    value={employee_age}
                                    placeholder='enter your age here'
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Salary </Form.Label>
                            <Col sm='8'>
                                <Form.Control type="text" name='employee_salary'
                                    value={employee_salary}
                                    placeholder='enter your salary here'
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>email </Form.Label>
                            <Col sm='8'>
                                <Form.Control type="email" name='email'
                                    required
                                    value={email}
                                    placeholder='enter your email here'
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>phone number </Form.Label>
                            <Col sm='8'>
                                <Form.Control type="text" name='phoneNo'
                                    required
                                    value={phoneNo}
                                    placeholder='enter your phoneNo here'
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <select aria-required name="gender" value={gender} onChange={(e) => handleChange(e)} >
                            {/* <option value="male">male</option> */}
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>

                        </select>
                        <select aria-required name="city" value={city} onChange={(e) => handleChange(e)} >
                            <option value="bombay">bombay</option>
                            <option value="agara">agra</option>
                            <option value="khargone">khargone</option>
                            <option value="indore">indore</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>close </Button>
                        <Button type='submit' variant="warning" onaClick={handleSubmit}>submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </div>
    )
}
