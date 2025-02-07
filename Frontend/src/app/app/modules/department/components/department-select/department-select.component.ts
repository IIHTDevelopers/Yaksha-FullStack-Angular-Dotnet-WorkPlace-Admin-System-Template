import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department-select',
  templateUrl: './department-select.component.html',
  styleUrls: ['./department-select.component.css']
})
export class DepartmentSelectComponent implements OnInit {
  @Output() departmentSelected: EventEmitter<number> = new EventEmitter()
  departments: any[] = [];
  selectedDepartmentId: number | null = null;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
  }

  loadDepartments() {
  }

  onDepartmentSelect() {
  }
}
