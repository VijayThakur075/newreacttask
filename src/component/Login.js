import React, { useState } from 'react'
import { Form, Input, Select, Button, Divider } from 'antd'
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd';



export const Login = () => {
    const [state, setState] = useState({
        username: '',
        userId: '',
    });
    const history=useHistory()
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/employe')
        window.location.reload()
    };
    const { username, userId } = state
    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    console.log('qqq',state)

    const onFinish=(e)=>{
        e.preventDefault()
        history.push('/employe')
    }

    const onFinishFailed = () => {
        console.log('Failed:');
      };
    return (
        <div>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Divider/>
            <Form
                name="basic"
              
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        name="username"
                        value={username}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Item>

                <Form.Item
                    label="userId"
                   
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                         name="userId"
                         value={userId}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Item>
                <Form.Item >
                        <Button type="primary" htmlType='submit' onClick={onFinish}>Submit</Button>
                    </Form.Item>

            </Form>
            </Modal>
        </div>
    )
}
