import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: any[] = [];  
  errorMessage: string = ''; 

  constructor(
    private departmentService: DepartmentService,  
    private router: Router  
  ) { }

  ngOnInit() {
  }

  // Load departments from the service
  loadDepartments() {
  }

  // Edit a department
  editDepartment(id: number) {
  }

  // Delete a department
  deleteDepartment(id: number) {
  }

  // View department details
  viewDepartment(id: number) {
  }

  // Add a new department
  addDepartment() {
  }
}
