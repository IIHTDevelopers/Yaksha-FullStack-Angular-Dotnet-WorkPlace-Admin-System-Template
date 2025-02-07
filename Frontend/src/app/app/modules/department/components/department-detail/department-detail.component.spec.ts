import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentDetailComponent } from './department-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

describe('DepartmentDetailComponent', () => {
  let component: DepartmentDetailComponent;
  let fixture: ComponentFixture<DepartmentDetailComponent>;
  let departmentService: DepartmentService;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    // Create a mock for DepartmentService
    const departmentServiceMock = {
      getDepartmentById: jest.fn(),
      updateDepartment: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [DepartmentDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: DepartmentService, useValue: departmentServiceMock },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: jest.fn().mockReturnValue('1') } } } },
        Location
      ]
    }).compileComponents();

    departmentService = TestBed.inject(DepartmentService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the DepartmentDetailComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message if department details fail to load', () => {
    // Mock an error scenario for getDepartmentById
    departmentService.getDepartmentById = jest.fn().mockReturnValue(throwError('Error'));

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.errorMessage).toBe('Error fetching department details. Please try again later.');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-message')?.textContent).toContain('Error fetching department details. Please try again later.');
  });

  it('should toggle between view and edit mode based on URL', () => {
    component.isEditMode = true;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const saveButton = compiled.querySelector('button.btn-primary');
    expect(saveButton).toBeTruthy();

    component.isEditMode = false;
    fixture.detectChanges();

    const editButton = compiled.querySelector('a.btn-warning');
    expect(editButton).toBeTruthy();
  });

  it('should call save() and navigate when save button is clicked', () => {
    const departmentMock = { id: 1, name: 'HR', description: 'Human Resources Department' };
    component.department = departmentMock;
    component.isEditMode = true;

    departmentService.updateDepartment = jest.fn().mockReturnValue(of({}));

    const navigateSpy = jest.spyOn(router, 'navigate');

    const saveButton = fixture.nativeElement.querySelector('button.btn-primary');
    saveButton.click();

    expect(departmentService.updateDepartment).toHaveBeenCalledWith(1, departmentMock);
    expect(navigateSpy).toHaveBeenCalledWith(['/departments']);
  });

  it('should show error message if save fails', () => {
    const departmentMock = { id: 1, name: 'HR', description: 'Human Resources Department' };
    component.department = departmentMock;
    component.isEditMode = true;

    departmentService.updateDepartment = jest.fn().mockReturnValue(throwError('Error'));

    const saveButton = fixture.nativeElement.querySelector('button.btn-primary');
    saveButton.click();

    fixture.detectChanges();

    expect(component.errorMessage).toBe('Error saving department details. Please try again later.');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-message')?.textContent).toContain('Error saving department details. Please try again later.');
  });

  it('should navigate back to departments on cancel button click', () => {
    const cancelButton = fixture.nativeElement.querySelector('button.btn-secondary');
    const navigateSpy = jest.spyOn(router, 'navigate');
    
    cancelButton.click();

    expect(navigateSpy).toHaveBeenCalledWith(['/departments']);
  });
});
