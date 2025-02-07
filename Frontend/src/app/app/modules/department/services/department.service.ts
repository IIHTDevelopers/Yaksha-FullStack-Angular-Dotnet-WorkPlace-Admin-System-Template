import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = '';

  constructor(private httpService: HttpService) { }

  getDepartments(): any {
    // write your logic here
    return null;
  }

  getDepartmentById(id: number): any {
    // write your logic here
    return null;
  }

  addDepartment(department: any): any {
    // write your logic here
    return null;
  }

  updateDepartment(id: number, department: any): any {
    // write your logic here
    return null;
  }

  deleteDepartment(id: number): any {
    // write your logic here
    return null;
  }
}
