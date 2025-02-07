import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { DepartmentService } from '../../services/department.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  departmentForm!: FormGroup; 
  errorMessage: string = ''; 

  constructor(
    private departmentService: DepartmentService, 
    private router: Router, 
    private fb: FormBuilder 
  ) {
  }

  ngOnInit(): void { }

  onSubmit() {
  }
}
