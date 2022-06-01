import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseURL = "http://localhost:9090/api/v1/departments";

  constructor(private httpClient: HttpClient) { }
  
  getDepartmentsList(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.baseURL}`);
  }

  createDepartment(department: Department): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, department);
  }

  getDepartmentById(deptId: number): Observable<Department>{
    return this.httpClient.get<Department>(`${this.baseURL}/${deptId}`);
  }

  updateDepartment(deptId: number, department: Department): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${deptId}`, department);
  }

  deleteDepartment(deptId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${deptId}`);
  }
}
