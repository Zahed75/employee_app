import { Component, inject, NgModule } from '@angular/core';
import { IApiResponse, IParentDept } from '../../model/Employee';
import { MasterService } from '../../services/master.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  sideMenuOpen: boolean = false; // Sidebar state
  ParentDeptList: any;
  selectedChildDept: any;


}
