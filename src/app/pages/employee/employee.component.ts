import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';
import {IApiResponse, IParentDept} from '../../model/Employee';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-employee',
  imports: [
    FormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  parentDeptList: IParentDept[] = [];

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getParentDeptList()
  }

  getParentDeptList() {
    this.masterService.getParentDept().subscribe((res: IApiResponse) => {
      this.parentDeptList=res.data
    })
  }


}
