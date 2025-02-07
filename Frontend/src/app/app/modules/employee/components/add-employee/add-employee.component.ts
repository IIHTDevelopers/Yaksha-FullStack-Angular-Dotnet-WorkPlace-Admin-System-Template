import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service'; // Import EmployeeService
import { DepartmentService } from '../../../department/services/department.service'; // Import DepartmentService
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup; // The form group to handle the employee form
  errorMessage: string = ''; // Error message if the form submission fails
  departments: any[] = []; // Array to hold department data

  constructor(
    private employeeService: EmployeeService, // Inject EmployeeService
    private departmentService: DepartmentService, // Inject DepartmentService
    private router: Router, // Inject Router for navigation
    private fb: FormBuilder // Inject FormBuilder for reactive forms
  ) {
  }

  ngOnInit(): void {
  }

  // Getter for easy access to form fields
  get f() {
    return "";
  }

  // Method to handle form submission
  onSubmit() {
  }
}
