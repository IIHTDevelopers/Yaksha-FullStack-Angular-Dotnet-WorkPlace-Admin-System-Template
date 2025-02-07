import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ActivatedRoute to get route params
import { EmployeeService } from '../../services/employee.service'; // Import EmployeeService

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId!: number; // The employee ID from the route
  employee: any = {}; // The employee data (either view or edit)
  isEditMode: boolean = false; // Flag to toggle between view and edit mode
  errorMessage: string = ''; // Error message if any

  constructor(
    private route: ActivatedRoute, // ActivatedRoute to get route parameters
    private employeeService: EmployeeService, // Inject EmployeeService
    private router: Router // Router for navigation
  ) { }

  ngOnInit(): void {
  }

  // Save updated employee details (for edit mode)
  save() {
  }

  // Cancel and go back to the employee list
  cancel() {
  }
}
