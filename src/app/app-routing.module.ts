import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  // {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'create-department', component: CreateDepartmentComponent},
  // {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-department/:deptId', component: UpdateDepartmentComponent},
  {path: 'department-details/:deptId', component: DepartmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
