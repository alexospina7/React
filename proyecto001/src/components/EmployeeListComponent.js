import React, { useEffect, useState } from "react"
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

export const EmployeeListComponent = () =>{

    const [employees,setEmployees]=useState([]);
    
    useEffect(()=>{
        EmployeeService.getAllEmployees().then(response => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])

    return(
        <div className='container'>
            <h2 className='text-center'> Employees List </h2>
            <Link to='/add-employee' className='btn btn-primary'> Add Employee</Link>
            <table className='table table-striped-columns'>
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Position Title</th>
                    <th>Time in position</th>
                    <th>Status </th>
                    <th>Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(employee => <tr 
                            key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.positionTitle}</td>
                                <td>{employee.timeInPosition}</td>
                                <td>{employee.status}</td>
                                <td>
                                    <Link to={`/edit-employee/${employee.id}`} className="btn btn-info" >Update</Link>
                                </td>

                            </tr> 
                            
                            )
                    }



                </tbody>
            </table>
        </div>
    )
}

export default EmployeeListComponent;