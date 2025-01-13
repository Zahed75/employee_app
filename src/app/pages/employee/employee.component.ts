import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';
import {Employee, IApiResponse, IChildDept, IParentDept} from '../../model/Employee';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';


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
  childDeptList: IChildDept[] = [];
  deptId: number = 0;

  employeeObj:Employee = new Employee();


  masterService = inject(MasterService);
  empService = inject(EmployeeService);

  ngOnInit(): void {
    this.getParentDeptList()
  }

  getParentDeptList() {
    this.masterService.getParentDept().subscribe((res: IApiResponse) => {
      this.parentDeptList = res.data
    })
  }

  onDeptChange() {
    this.masterService.getChildDeptByParentId(this.deptId).subscribe((res: IApiResponse) => {
      this.childDeptList=res.data;
    });
  }

  onSaveEmp(){
    this.empService.createNewEmployee(this.employeeObj).subscribe((res:IApiResponse)=>{
      if(res.result){
        alert("Employee created successfully")
      }
      else{
        alert(res.message)
      }
    })
  }

}
