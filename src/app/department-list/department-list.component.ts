import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[];

  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  private getDepartments(){
    this.departmentService.getDepartmentsList().subscribe(data => {
      this.departments = data;
    });
  }

  departmentDetails(deptId: number){
    this.router.navigate(['department-details', deptId]);
  }

  updateDepartment(deptId: number){
    this.router.navigate(['update-department', deptId]);
  }

  deleteDepartment(deptId: number){
    this.departmentService.deleteDepartment(deptId).subscribe( data => {
      console.log(data);
      this.getDepartments();
    })
  }

}
