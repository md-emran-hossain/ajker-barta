import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListToolbar } from './CustomerListToolbar';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import Swal from 'sweetalert2'

const Customers = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [employees])
    const handleDesignation = (e, id) => {
        const designationObj = { designation: e.target.value }
        fetch(`/api/users/updaterole?id=${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(designationObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const handleDelete = (id) => {
        fetch(`/api/users?id=${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    const newEmployee = employees.filter(employee => employee._id !== id)
                    setEmployees(newEmployee)
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `Employee Deleted`,
                    })
                }
            })
    }
    return (
        <>
            <Head>
                <title>
                    Employee
                </title>
            </Head>
            <Box component="main" sx={{ flexGrow: 1, }}>
                <Container maxWidth={"lg"}>
                    <CustomerListToolbar employees={employees} />
                    <Box sx={{ mt: 3 }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead >
                                    <TableRow >
                                        <TableCell style={{ fontWeight: "500", fontSize: "18px" }} className=''>Name</TableCell >
                                        <TableCell style={{ fontWeight: "500", fontSize: "18px" }}>Email</TableCell>
                                        <TableCell style={{ fontWeight: "500", fontSize: "18px" }}>Country</TableCell>
                                        <TableCell style={{ fontWeight: "500", fontSize: "18px" }}>State</TableCell>
                                        <TableCell style={{ fontWeight: "500", fontSize: "18px" }}>Designation</TableCell>
                                        <TableCell style={{ fontWeight: "500", fontSize: "18px" }} align='right'>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {employees.map((employee) => (
                                        <TableRow
                                            key={employee._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {employee.name}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {employee.email}
                                            </TableCell>
                                            <TableCell>{employee?.country}</TableCell>
                                            <TableCell>{employee?.state}</TableCell>
                                            <TableCell>
                                                <select onChange={(e) => handleDesignation(e, employee._id)} className='border py-1 px-2'>
                                                    <option value={employee.role}>{employee.role}</option>
                                                    <option value="Sr. Reporter">Jr. Reporter</option>
                                                    <option value="Sr. Reporter">Jr. Reporter</option>
                                                    <option value="Editor">Editor</option>
                                                    <option value="Publisher">Publisher</option>
                                                    <option value="Chief Analyst">Chief Analyst</option>
                                                    <option value="Production Manager">Production Manager</option>
                                                </select>
                                            </TableCell>
                                            <TableCell align='right'>
                                                <ClearIcon
                                                    onClick={() => handleDelete(employee._id)}
                                                    className='bg-red-500 rounded-full text-white cursor-pointer' />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </Box>
        </>
    )
};

export default Customers;
