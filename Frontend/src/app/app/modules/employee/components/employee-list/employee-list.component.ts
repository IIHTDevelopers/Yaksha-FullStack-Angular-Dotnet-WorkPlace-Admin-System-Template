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

  ngOnInit() { }


  loadEmployees() { }


  editEmployee(id: number) { }


  deleteEmployee(id: number) { }

  viewEmployee(id: number) { }

  onDepartmentSelected(departmentId: number) { }

  addEmployee() { }
}
