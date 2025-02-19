import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service'; 

@Component({
  selector: 'app-department-select',
  templateUrl: './department-select.component.html',
  styleUrls: ['./department-select.component.css']
})
export class DepartmentSelectComponent implements OnInit {
  departmentSelected: any = null;
  departments: any[] = []; 
  selectedDepartmentId: number | null = null; 

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
  }

  // Load departments from the service
  loadDepartments() {
  }

  // Emit the selected department ID when a department is selected
  onDepartmentSelect() {
  }
}
