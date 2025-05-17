import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ToolComponent } from '../../components/tool/tool.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, AboutComponent, ToolComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
