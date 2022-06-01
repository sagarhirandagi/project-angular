import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  deptId: number
  department: Department
  constructor(private route: ActivatedRoute, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.deptId = this.route.snapshot.params['deptId'];

    this.department = new Department();
    this.departmentService.getDepartmentById(this.deptId).subscribe( data => {
      this.department = data;
    });
  }

}
