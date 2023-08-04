import React, { useEffect, useState } from "react"
import EmployeeService from "../services/EmployeeService";
import { Link, useNavigate, useParams } from "react-router-dom";

export const AddEmployeeComponent= () =>{

    const [firstName,setFirstName]=useState('');
    const [middleName,setMiddleName]=useState('');
    const [lastName,setLastName]=useState('');
    const [locationCity,setLocationCity]=useState('');
    const [address,setAddress]=useState('');
    const [dateBirth,setDateBirth]=useState('');
    const [telephone,setTelephone]=useState('');
    const [status,setStatus]=useState('');
    const [positionTitle,setPositionTitle]=useState('');
    const [hireDate,setHireDate]=useState('');
    const [email,setEmail]=useState('');
    const [salary,setSalary]=useState('');
    const [timeInPosition,setTimeInPostion]=useState('');

    const  navigate=useNavigate();
    const {id}=useParams();


    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName,middleName,
            lastName,locationCity,address,dateBirth,
            telephone,status,positionTitle,hireDate,email,
            salary,timeInPosition
        };

        if(id){
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                navigate('/employees');
            }).catch(error =>{
                console.log(error)
            
    
            })
        }
        else{
            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response.data);
                navigate('/employees');
            }).catch(error =>{
                console.log(error)
            
    
            })
        }
        

        }


 

    useEffect(()=>{
        EmployeeService.getEmployeebyId(id).then((response)=>{
        setFirstName(response.data.firstName);
        setMiddleName(response.data.middleName);
        setLastName(response.data.lastName);
        setLocationCity(response.data.locationCity);
        setAddress(response.data.address);
        setDateBirth(response.data.dateBirth);
        setTelephone(response.data.telephone);
        setStatus(response.data.status);
        setPositionTitle(response.data.positionTitle);
        setHireDate(response.data.hireDate);
        setEmail(response.data.email);
        setSalary(response.data.salary);
        setTimeInPostion(response.data.timeInPosition);

        }).catch(error=>{
            console.log(error);
        })
    },[])
const title = () =>{
    if (id){
        return <h2 className="text-center">Update employee</h2>
    }else{
        return <h2 className="text-center">Add employee</h2>
    }
}

    return (
        <div> 
            <div className='container'>
              <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center"> {
                        title()
                    }
                    
                    </h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your First Name"
                                    name="firstName" className="form-control"
                                    value={firstName}
                                    onChange={(e) =>setFirstName(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your Middle Name"
                                    name="middleName" className="form-control"
                                    value={middleName}
                                    onChange={(e) =>setMiddleName(e.target.value)}
                                    ></input>
                            </div>


                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your Last Name"
                                    name="lastName" className="form-control"
                                    value={lastName}
                                    onChange={(e) =>setLastName(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your Location city"
                                    name="locationCity" className="form-control"
                                    value={locationCity}
                                    onChange={(e) =>setLocationCity(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your Address"
                                    name="address" className="form-control"
                                    value={address}
                                    onChange={(e) =>setAddress(e.target.value)}
                                    ></input>
                            </div>


                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your date birth format YYYY-MM-DD"
                                    name="dateBirth" className="form-control"
                                    value={dateBirth}
                                    onChange={(e) =>setDateBirth(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your telephone"
                                    name="telephone" className="form-control"
                                    value={telephone}
                                    onChange={(e) =>setTelephone(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your status"
                                    name="status" className="form-control"
                                    value={status}
                                    onChange={(e) =>setStatus(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your type your position title"
                                    name="positionTitle" className="form-control"
                                    value={positionTitle}
                                    onChange={(e) =>setPositionTitle(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your type your hire date YYYY-MM-DD"
                                    name="hireDate" className="form-control"
                                    value={hireDate}
                                    onChange={(e) =>setHireDate(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your type your email"
                                    name="email" className="form-control"
                                    value={email}
                                    onChange={(e) =>setEmail(e.target.value)}
                                    ></input>
                            </div>


                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your type your salary"
                                    name="salary" className="form-control"
                                    value={salary}
                                    onChange={(e) =>setSalary(e.target.value)}
                                    ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="'form-label"></label>
                                    <input type="text" placeholder="Type your type your time in position YYYY-MM-DD"
                                    name="timeInPosition" className="form-control"
                                    value={timeInPosition}
                                    onChange={(e) =>setTimeInPostion(e.target.value)}
                                    ></input>
                            </div>

                            <button className="btn btn-success" 
                              onClick={(e) => saveOrUpdateEmployee(e)}
                            > Save </button>
                            &nbsp;&nbsp;
                            <Link to='/employees' 
                            className="btn btn-danger">Cancel</Link>



                        </form>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent;