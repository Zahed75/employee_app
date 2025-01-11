import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  sideMenuOpen: boolean = false; // Sidebar state

  



  // sideBar Menu
  toggleSelectAll(event: any): void {
   
  }

  toggleUserSelection(user: any, event: any): void {
    user.isSelected = event.target.checked;
  }


}
