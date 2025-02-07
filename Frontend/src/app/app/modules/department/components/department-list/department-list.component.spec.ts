import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentService } from '../../services/department.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('DepartmentListComponent', () => {
  let component: DepartmentListComponent;
  let fixture: ComponentFixture<DepartmentListComponent>;
  let departmentService: DepartmentService;
  let router: Router;

  beforeEach(async () => {
    // Mock the DepartmentService
    const departmentServiceMock = {
      getDepartments: jest.fn(),
      deleteDepartment: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [DepartmentListComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: DepartmentService, useValue: departmentServiceMock },
      ]
    }).compileComponents();

    departmentService = TestBed.inject(DepartmentService);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the DepartmentListComponent', () => {
      expect(component).toBeTruthy();
    });

    it('should load departments on component initialization', () => {
      const mockDepartments = [
        { id: 1, name: 'HR', description: 'Human Resources' },
        { id: 2, name: 'IT', description: 'Information Technology' }
      ];

      const departmentServiceMock = departmentService.getDepartments as jest.Mock;
      departmentServiceMock.mockReturnValue(of(mockDepartments));

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.departments.length).toBe(2);
      expect(component.departments[0].name).toBe('HR');
    });

    it('should display an error message if departments fail to load', () => {
      const departmentServiceMock = departmentService.getDepartments as jest.Mock;
      departmentServiceMock.mockReturnValue(throwError('Error'));

      component.ngOnInit();
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.error-message')?.textContent).toContain('Failed to load departments. Please try again later.');
    });

    it('should render the table with departments', () => {
      const mockDepartments = [
        { id: 1, name: 'HR', description: 'Human Resources' },
        { id: 2, name: 'IT', description: 'Information Technology' }
      ];

      const departmentServiceMock = departmentService.getDepartments as jest.Mock;
      departmentServiceMock.mockReturnValue(of(mockDepartments));

      component.ngOnInit();
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const rows = compiled.querySelectorAll('table tbody tr');
      expect(rows.length).toBe(2);
      expect(rows[0].textContent).toContain('HR');
      expect(rows[1].textContent).toContain('IT');
    });

    it('should navigate to the add department page when Add Department button is clicked', () => {
      const navigateSpy = jest.spyOn(router, 'navigate');
      const addButton = fixture.nativeElement.querySelector('button.btn-success');
      addButton.click();

      expect(navigateSpy).toHaveBeenCalledWith(['/department', 'new']);
    });

    it('should navigate to the department details page when View button is clicked', () => {
      const navigateSpy = jest.spyOn(router, 'navigate');
      const mockDepartments = [
        { id: 1, name: 'HR', description: 'Human Resources' }
      ];

      component.departments = mockDepartments;
      fixture.detectChanges();

      const viewButton = fixture.nativeElement.querySelector('button.btn-info');
      viewButton.click();

      expect(navigateSpy).toHaveBeenCalledWith(['/department/details', 1]);
    });

    it('should navigate to the department edit page when Edit button is clicked', () => {
      const navigateSpy = jest.spyOn(router, 'navigate');
      const mockDepartments = [
        { id: 1, name: 'HR', description: 'Human Resources' }
      ];

      component.departments = mockDepartments;
      fixture.detectChanges();

      const editButton = fixture.nativeElement.querySelector('button.btn-warning');
      editButton.click();

      expect(navigateSpy).toHaveBeenCalledWith(['/department/edit', 1]);
    });

    it('should delete department when Delete button is clicked and confirmation is given', () => {
      const departmentServiceMock = departmentService.deleteDepartment as jest.Mock;
      departmentServiceMock.mockReturnValue(of({}));

      const mockDepartments = [
        { id: 1, name: 'HR', description: 'Human Resources' }
      ];

      component.departments = mockDepartments;
      fixture.detectChanges();

      const deleteButton = fixture.nativeElement.querySelector('button.btn-danger');
      const confirmSpy = jest.spyOn(window, 'confirm').mockReturnValue(true);  // Mock the confirm dialog
      deleteButton.click();

      expect(confirmSpy).toHaveBeenCalledWith('Are you sure you want to delete this department?');
      expect(departmentServiceMock).toHaveBeenCalledWith(1);  // Assuming 1 is the ID of the department
      expect(component.departments.length).toBe(0); // Assuming that the department gets removed
    });

    it('should show an error message if delete fails', () => {
      const departmentServiceMock = departmentService.deleteDepartment as jest.Mock;
      departmentServiceMock.mockReturnValue(throwError('Error'));

      const mockDepartments = [
        { id: 1, name: 'HR', description: 'Human Resources' }
      ];

      component.departments = mockDepartments;
      fixture.detectChanges();

      const deleteButton = fixture.nativeElement.querySelector('button.btn-danger');
      const confirmSpy = jest.spyOn(window, 'confirm').mockReturnValue(true);
      deleteButton.click();

      expect(confirmSpy).toHaveBeenCalledWith('Are you sure you want to delete this department?');
      expect(component.errorMessage).toContain('Failed to delete department. Please try again later.');
    });
  });
});
