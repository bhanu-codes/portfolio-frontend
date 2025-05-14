import {Component, Output, EventEmitter} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @Output() navigateTo = new EventEmitter<string>();

  navigate(component: string) {
    this.isMenuOpen = false;
    this.navigateTo.emit(component);
  }
}
