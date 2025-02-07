import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ActivatedRoute to get route params
import { DepartmentService } from '../../services/department.service'; // Import DepartmentService

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId!: number; // The department ID from the route
  department: any = {}; // The department data (either view or edit)
  isEditMode: boolean = false; // Flag to toggle between view and edit mode
  errorMessage: string = ''; // Error message if any

  constructor(
    private route: ActivatedRoute, // ActivatedRoute to get route parameters
    private departmentService: DepartmentService, // Inject DepartmentService
    private router: Router // Router for navigation
  ) { }

  ngOnInit(): void {
  }

  // Save updated department details (for edit mode)
  save() {
  }

  // Cancel and go back to the department list
  cancel() {
  }
}
