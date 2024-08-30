import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {LogoComponent} from "../common/logo/logo.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isCollapsed = false;

  @Output() toggleSidebar = new EventEmitter<boolean>();

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleSidebar.emit(this.isCollapsed);
  }
}
