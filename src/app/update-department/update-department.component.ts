import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  deptId: number;
  department: Department = new Department();
  constructor(private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.deptId = this.route.snapshot.params['deptId'];

    this.departmentService.getDepartmentById(this.deptId).subscribe(data => {
      this.department = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.departmentService.updateDepartment(this.deptId, this.department).subscribe( data =>{
      this.goToDepartmentList();
    }
    , error => console.log(error));
  }

  goToDepartmentList(){
    this.router.navigate(['/departments']);
  }

}
