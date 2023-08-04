import axios from "axios";

const EMPLOYEE_REST_API_URL="http://localhost:8080/api/v1/employees";

class EmployeeService{
getAllEmployees(){
    return axios.get(EMPLOYEE_REST_API_URL);
}

createEmployee(employee){

    return axios.post(EMPLOYEE_REST_API_URL,employee);
}

getEmployeebyId(employeeid){
    return axios.get(EMPLOYEE_REST_API_URL + '/' + employeeid );
}

updateEmployee(employeeid,employee){
    return axios.put(EMPLOYEE_REST_API_URL+ '/' + employeeid,employee);
}

}

export default new EmployeeService();
