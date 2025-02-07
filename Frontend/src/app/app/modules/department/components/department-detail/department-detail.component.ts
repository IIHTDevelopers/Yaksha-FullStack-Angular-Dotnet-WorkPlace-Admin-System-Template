import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId!: number;
  department: any = {};
  isEditMode: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
  }

  cancel() {
  }
}
