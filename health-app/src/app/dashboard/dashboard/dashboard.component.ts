import {Component} from '@angular/core';
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
    imports: [
        SidebarComponent,
        CommonModule,
        HeaderComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isSidebarCollapsed = false;

  onToggleSidebar(collapsed: boolean) {
    this.isSidebarCollapsed = collapsed;
  }
}
