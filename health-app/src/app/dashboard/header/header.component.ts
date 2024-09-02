import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchBarComponent} from "../../common/search-bar/search-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  userProfilePicture: string | null = null;  // Assign user's profile picture URL here
  userInitials = 'PB';  // Assign user's initials here

  activeLink: string = 'Dashboard'; // Set the default active link

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
