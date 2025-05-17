import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const navbarElement = (event.target as HTMLElement).closest('.navbar-container');
    if (!navbarElement && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isMenuOpen = false;
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  openWhatsApp(): void {
    const phoneNumber = '14077908177';
    const message = 'Hello! I am interested in learning more about VPB Tools vinyl bending machines. Could you provide me with more information?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}