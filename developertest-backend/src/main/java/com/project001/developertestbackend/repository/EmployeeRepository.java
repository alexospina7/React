package com.project001.developertestbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project001.developertestbackend.employee.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	
	
	
	
}
