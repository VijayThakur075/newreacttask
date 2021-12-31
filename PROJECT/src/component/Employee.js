import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestData, requestDeleteEmp } from '../thunks/requestData'
import { Link } from 'react-router-dom'
import '../App.css'
import { Table } from 'antd'

export const Employee = () => {
    const dispatch = useDispatch()
    const empdata = useSelector(state => state.apiData.api)

    const length = empdata.length
    console.log('vvv', empdata);

    useEffect(() => {
        dispatch(requestData())
    }, [])

    const handleDelete = (id) => {
        var result = window.confirm("Are you sure you want to delete this id");
        if (result == true) {
            dispatch(requestDeleteEmp(id))
            alert('delete record successfully')
        }

    }
    empdata.map((item) => ({
        Name: item.employee_name,
        Salary: item.employee_salary,
        Age: item.employee_age,
        Email: item.email,
        PhoneNo: item.phoneNo,
        Gender: item.gender,
        City: item.city,
        Edit: item.id,
        Id: item.uid
    }))

    const columns = [
        {
            title: "employee name",
            dataIndex: "employee_name",

        },
        {
            title: "employee salary",
            dataIndex: "employee_salary",

        },
        {
            title: "employee age",
            dataIndex: "employee_age"
        },
        {
            title: " gender  ",
            dataIndex: "gender",

        },
        {
            title: " employee city ",
            dataIndex: "city",

        },
        {
            title: " employee email ",
            dataIndex: "email",

        },
        {
            title: " employee No. ",
            dataIndex: "phoneNo",

        },
        {
            title: " employee Id",
            dataIndex: "uid",

        },
        {
            title: " update employee ",
            dataIndex: "id",
            key: "key",
            render: (item) => 
            <>
            <Link className="btn btn-warning" to={'/edit/' + item}>update</Link>{"   "}
            <Link className="btn btn-danger" onClick={() => handleDelete(item)}>Delete</Link>
            </>
        },

    ];

    return (
        <>
            <h3 id="center"> Total Employee {length}</h3>

            <Table
                columns={columns}
                dataSource={empdata} />
        </>
    )
}


