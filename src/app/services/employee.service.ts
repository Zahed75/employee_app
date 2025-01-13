import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee, IApiResponse} from '../model/Employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  createNewEmployee(obj:Employee):Observable<IApiResponse>{
    return this.http.post<IApiResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee",obj)
  }
}
