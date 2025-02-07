import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = '';

  constructor(private httpService: HttpService) { }

  // Get all departments
  getDepartments(): any {
    // write your logic here
    return null;
  }

  // Get department details by ID
  getDepartmentById(id: number): any {
    // write your logic here
    return null;
  }

  // Add a new department
  addDepartment(department: any): any {
    // write your logic here
    return null;
  }

  // Edit an existing department
  updateDepartment(id: number, department: any): any {
    // write your logic here
    return null;
  }

  // Delete a department by ID
  deleteDepartment(id: number): any {
    // write your logic here
    return null;
  }
}
