import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service'; 
import { DepartmentService } from '../../../department/services/department.service'; 
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup; 
  errorMessage: string = ''; 
  departments: any[] = []; 

  constructor(
    private employeeService: EmployeeService, 
    private departmentService: DepartmentService, 
    private router: Router, 
    private fb: FormBuilder 
  ) {
    // Initialize the form with validation
  }

  ngOnInit(): void {
    // Fetch the departments from the DepartmentService
  }

  // Getter for easy access to form fields
  get f() {
    return null;
  }

  // Method to handle form submission
  onSubmit() {
  }
}
