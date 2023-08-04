package com.project001.developertestbackend.employee;


import org.hibernate.validator.constraints.Length;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table (name="Employee")
public class Employee {

/*	 First Name
	 - Middle Name - Last name
	 - Location City - Address
	 - Date Birth
	 - Telephone
	 Position Section - Position Title
	 - Hire Date
	 - Email
	 - Salary
	 - Time in Position
*/	
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;


	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="FirstName")
	private String firstName;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="MiddleName")
	private String middleName;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="LastName")
	private String lastName;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="LocationCity")
	private String locationCity;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="Address")
	private String address;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="DateBirth")
	private String dateBirth;
	
	@NotEmpty @Length(min = 2, max = 15)
	@Column(name="Telephone")
	private String telephone;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="Status")
	private String status;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="PositionTitle")
	private String positionTitle;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="HireDate")
	private String hireDate;
	
	@NotEmpty @Length(min = 2, max = 50) @Email 
	@Column(name="Email")
	private String email;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="Salary")
	private String salary;
	
	@NotEmpty @Length(min = 2, max = 50)
	@Column(name="TimeInPosition")
	private String timeInPosition;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getMiddleName() {
		return middleName;
	}


	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getLocationCity() {
		return locationCity;
	}


	public void setLocationCity(String locationCity) {
		this.locationCity = locationCity;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getDateBirth() {
		return dateBirth;
	}


	public void setDateBirth(String dateBirth) {
		this.dateBirth = dateBirth;
	}


	public String getTelephone() {
		return telephone;
	}


	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}

	public String getPositionTitle() {
		return positionTitle;
	}

	public void setPositionTitle(String positionTitle) {
		this.positionTitle = positionTitle;
	}

	public String getHireDate() {
		return hireDate;
	}

	public void setHireDate(String hireDate) {
		this.hireDate = hireDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}

	public String getTimeInPosition() {
		return timeInPosition;
	}

	public void setTimeInPosition(String timeInPosition) {
		this.timeInPosition = timeInPosition;
	}
	
	
	
	
}
