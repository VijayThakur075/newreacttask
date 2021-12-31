import React, { useState } from 'react'
import { setEditData } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import { requestEditData } from '../thunks/requestData';
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Select, Button, Divider } from 'antd'
import { Modal } from 'antd';

const { Option } = Select

export const EditData = () => {
    const { id } = useParams()
    const employee = useSelector(state => state.empData.empInfo)
    const dispatch = useDispatch();
    const history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/employe')
        window.location.reload()
    };
    const [form] = Form.useForm();
    const empcity = [{
        value: "india",
        label: "India",
    },
    {
        value: "japan",
        label: "Japan"
    }, {        
        value: "usa",        
        label: "USA"        
    }];        
        
    const layout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8
            }
        },
        wrapperCol: {
            xs: {
                span: 16,
            },
            sm: {
                span: 16
            }
        },
    };
    const tailLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        }
    };

    const { employee_name,
        employee_age,
        employee_salary,
        email, phoneNo,
        gender,
        city,
        uid } = employee
    const handleChange = (e) => {
        dispatch(setEditData({ ...employee, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        dispatch(requestEditData(id))
    }, [])
    console.log("employee", employee);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3008/data/${id}`, employee)
        history.push('/employe')
        window.location.reload()
    }

    return (
        <div>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h1 id="center">Edit employee</h1>
                <Divider />
                <Form
                    {...layout}
                    form={form}
                    name="editemp"
                    onFinish={handleSubmit}
                    scrollToFirstError>
                    <Form.Item
                        // name="employee_name"
                        label="Employee Name"
                        style={{ width: "400px" }}
                        rules={[
                            {
                                required: true,
                                message: "please input your employee name",
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input
                            name="employee_name"
                            value={employee_name}
                            onChange={(e) => handleChange(e)} />
                    </Form.Item>
                    <Form.Item
                        //  name="employee_age"
                        label="Employee  Age  "
                        style={{ width: "400px" }}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            name="employee_age"
                            value={employee_age}
                            onChange={(e) => handleChange(e)} />
                    </Form.Item>
                    <Form.Item
                        //name="employee_salary"
                        label="Employee salary "
                        style={{ width: "400px" }}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            name="employee_salary"
                            value={employee_salary}
                            onChange={(e) => handleChange(e)} />
                    </Form.Item>
                    <Form.Item
                        // name="email" 
                        label="Employee E-mail "
                        style={{ width: "400px" }}
                        rules={[
                            {
                                type: "email",
                                message: "The input is not valid E-mail"
                            },
                            {
                                required: true,
                                message: "please input your E-mail"
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            name="email"
                            value={email}
                            onChange={(e) => handleChange(e)} />
                    </Form.Item>
                    {/* <Form.Item
                    name="city"
                    label="Employee City "
                    style={{ width: "250px", marginLeft: "45px" }}
                    value={city}
                    onChange={(e) => handleChange(e)}>
                    <Cascader options={empcity} style={{ marginLeft: "5px" }} />
                </Form.Item> */}
                    <Form.Item
                        name="phoneNo"
                        label="Employee Number "
                        style={{ width: "400px" }}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            name="phoneNo"
                            value={phoneNo}
                            onChange={(e) => handleChange(e)}
                            style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                        name="uid"
                        label="Employee uid "
                        style={{ width: "400px" }}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            name="uid"
                            value={uid}
                            onChange={(e) => handleChange(e)}
                            style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                        label="Employee City" name="city" value={city}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        hasFeedback
                    >
                        <Select defaultValue="Indore" name="city" value={city} style={{ width: 120 }} allowClear onChange={(e) => handleChange(e)} >
                            <Option value="Indore">Indore</Option>
                            <Option value="Ujjain">Ujjain</Option>
                            <Option value="Dhar">Dhar</Option>
                            <Option value="Bhopal">bhopal</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Employee Gender"
                        rules={[
                            {
                                required: true,
                                type: 'number',
                            },
                        ]}
                    >
                        <Select defaultValue="Gender" name="gender"
                            value={gender} style={{ width: 120 }} allowClear
                            onChange={(e) => handleChange(e)} >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType='submit'
                         onClick={handleSubmit}>Submit</Button>

                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType='submit' onClick={handleSubmit}>Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}
