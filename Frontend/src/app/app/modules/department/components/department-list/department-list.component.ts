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

  loadDepartments() {
  }

  editDepartment(id: number) {
  }

  deleteDepartment(id: number) {
  }

  viewDepartment(id: number) {
  }

  addDepartment() {
  }
}
