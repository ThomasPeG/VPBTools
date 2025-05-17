import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterModule, CarouselModule],
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
  toolInfo = {
    title: 'Our Specialized Tools',
    description: 'At VPB Tools, we specialize in manufacturing high-quality vinyl bending machines for stairs. Our tools are designed to optimize your work and ensure professional results.',
    features: [
      'Ergonomic design for professional use',
      'Manufacturing with premium quality materials',
      'Innovative technology for precise results',
      'Specialized technical support'
    ],
    imageUrl: '/assets/vp-bender.png',
    bendingImages: [
      '/assets/vp-bender.png',
      '/assets/vp-bender-c.jpg',
      '/assets/vp-bender-ll.jpg',
      '/assets/vp-bender-l.jpg',
    ]
  };
}