import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Router for navigation
import { DepartmentService } from '../../services/department.service'; // Import DepartmentService
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import ReactiveFormsModule

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  departmentForm!: FormGroup; // The form group to handle the department form
  errorMessage: string = ''; // Error message if the form submission fails

  constructor(
    private departmentService: DepartmentService, // Inject DepartmentService
    private router: Router, // Inject Router for navigation
    private fb: FormBuilder // Inject FormBuilder for reactive forms
  ) {
  }

  ngOnInit(): void { }

  // Getter for easy access to form fields
  get f() {
    return "";
  }

  // Method to handle form submission
  onSubmit() {
  }
}
