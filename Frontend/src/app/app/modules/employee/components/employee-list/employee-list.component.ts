import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'; // Import employee service
import { Router } from '@angular/router'; // Router for navigation

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];  // Array to hold employee data
  errorMessage: string = ''; // To display errors
  departmentId: number | null = null; // To store selected department ID for filtering

  constructor(
    private employeeService: EmployeeService,  // Inject EmployeeService
    private router: Router  // Inject Router for navigation
  ) { }

  ngOnInit() {
  }

  // Load employees from the service (filtered by department if selected)
  loadEmployees() {
  }

  // Edit an employee
  editEmployee(id: number) {
  }

  // Delete an employee
  deleteEmployee(id: number) {
  }

  // View employee details
  viewEmployee(id: number) {
  }

  // Filter employees by department
  onDepartmentSelected(departmentId: number) {
  }

  // Navigate to the Add Employee page
  addEmployee() {
  }
}
