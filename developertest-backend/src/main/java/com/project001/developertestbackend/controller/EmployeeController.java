package com.project001.developertestbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project001.developertestbackend.employee.Employee;
import com.project001.developertestbackend.exception.ResourceNotFoundException;
import com.project001.developertestbackend.repository.EmployeeRepository;

import jakarta.validation.Valid;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@GetMapping("/employees")
	public List<Employee> employeeList(){
		
		return employeeRepository.findAll();
	}
	
	
	@PostMapping("/employees")
	public Employee saveEmployee( @RequestBody @Valid  Employee employee) {
		
		return  employeeRepository.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity <Employee> EmployeeListById( @PathVariable Long id){
		 
		
		Employee employee=employeeRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("employee with this id not found "+id));
		
		  return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody @Valid  Employee requestEmployee){
		Employee employee=employeeRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("employee with this id not found "+id));
	
		employee.setFirstName(requestEmployee.getFirstName());
        employee.setMiddleName(requestEmployee.getMiddleName());
		employee.setLastName(requestEmployee.getLastName());
		employee.setLocationCity(requestEmployee.getLocationCity());
		employee.setAddress(requestEmployee.getAddress());
		employee.setDateBirth(requestEmployee.getDateBirth());
		employee.setTelephone(requestEmployee.getTelephone());
		employee.setStatus(requestEmployee.getStatus());
		employee.setPositionTitle(requestEmployee.getPositionTitle());
		employee.setHireDate(requestEmployee.getHireDate());
		employee.setEmail(requestEmployee.getEmail());
		employee.setSalary(requestEmployee.getSalary());
		employee.setTimeInPosition(requestEmployee.getTimeInPosition());
        Employee employeeUpdated=employeeRepository.save(employee);
		return ResponseEntity.ok(employeeUpdated);
	}
	
	@DeleteMapping("employees/{id}")
	public ResponseEntity <Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
		
		Employee employee=employeeRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("employee with this id not found "+id));
		employeeRepository.delete(employee);
        Map<String,Boolean> response= new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
		
		
		
		
		
		
	}
}
