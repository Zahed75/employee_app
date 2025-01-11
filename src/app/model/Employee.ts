export class Employee{
    employeeId: number;
    employeeName: string;
    contatctNo: number;
    emailId: string;
    deptId: number;
    password: string;
    gender: string | undefined;
    role: string;
    createdDate: Date;

    constructor(){
        this.employeeId = 0;
        this.employeeName = '';
        this.contatctNo = 0;
        this.emailId = '';
        this.deptId = 0;
        this.password = '';
        this.role = '';
        this.createdDate = new Date();
    }
}

export interface IParentDept{}