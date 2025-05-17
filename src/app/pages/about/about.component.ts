import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, CardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  yearsFounded: number = 15;
  projectsCompleted: number = 1000;
  satisfiedClients: number = 500;
}
