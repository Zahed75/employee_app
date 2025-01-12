import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IParentDept } from '../../model/Employee';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-employee',
  imports: [


  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit  {

  ngOnInit(): void {

  }


}
