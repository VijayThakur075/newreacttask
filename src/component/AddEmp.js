import React, { useState } from 'react'
import { setEditData } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { requestAddEmp } from '../thunks/requestData';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, Modal } from 'react-bootstrap';

export const AddEmp = () => {
    const employee = useSelector(state => state.empData.empInfo)
    const [show, setShow] = useState(true);
    const dispatch = useDispatch()
    const history = useHistory()
    const { employee_name, employee_age, employee_salary, email,phoneNo } = employee
    const handleChange = (e) => {
        dispatch(setEditData({ ...employee, [e.target.name]: e.target.value }))
    }


    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(requestAddEmp(employee))
        history.push('/employe')
        window.location.reload()
    }
    return (
        <div>      
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit} >
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Modal.Header closeButton>
                                <Modal.Title>Add new employee</Modal.Title>
                            </Modal.Header>

                            <Form.Label>Name </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name='employee_name'
                                    value={employee_name} className="col-4"
                                    placeholder='enter your name here'
                                    onChange={(e) => handleChange(e)} />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Age </Form.Label>
                            <Col sm='8'>
                                <Form.Control type="text" name='employee_age'
                                    value={employee_age}
                                    placeholder='enter your age here'
                                    onChange={(e) => handleChange(e)} />
                            </Col>
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
