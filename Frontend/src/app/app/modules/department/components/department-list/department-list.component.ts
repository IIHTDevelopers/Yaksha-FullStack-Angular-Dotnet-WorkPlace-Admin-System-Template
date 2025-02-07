import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service'; // Import department service
import { Router } from '@angular/router'; // Router for navigation

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: any[] = [];  // Array to hold departments
  errorMessage: string = ''; // To display errors

  constructor(
    private departmentService: DepartmentService,  // Inject DepartmentService
    private router: Router  // Inject Router for navigation
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
