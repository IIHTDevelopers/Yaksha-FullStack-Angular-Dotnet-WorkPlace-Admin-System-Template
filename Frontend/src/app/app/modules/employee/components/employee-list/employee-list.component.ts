import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = []; 
  errorMessage: string = '';
  departmentId: number | null = null;

  constructor(
    private employeeService: EmployeeService, 
    private router: Router 
  ) { }

  ngOnInit() {
    // We do not load employees here anymore, employees will be loaded when a department is selected.
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
