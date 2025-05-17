import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

interface Machine {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string | string[];
  versions?: {
    size: string;
    price: number;
  }[];
  price?: number;
}

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, RouterModule, CarouselModule],
  templateUrl: './machines.component.html',
  styleUrl: './machines.component.scss'
})
export class MachinesComponent {
  vpHeater: Machine = {
    id: 'vp-heater',
    name: 'VP Heater',
    description: 'Professional vinyl heating machine featuring two adjustable heating lines with independent heat control.',
    features: [
      'Dual adjustable heating lines',
      'Independent heat control for each line',
      'Digital temperature display',
      'Heavy-duty construction',
      'Made in USA'
    ],
    imageUrl: '/assets/vp-heater.png',
    price: 2499.99
  };

  vpBender: Machine = {
    id: 'vp-bender',
    name: 'VP Bender',
    description: 'Two designs with tool, adjustable thickness up to 10mm, around nose available (upon request)',
    features: [
      'Two design options',
      'Adjustable thickness up to 10mm',
      'Around nose available (upon request)',
      'Includes bending tool',
      'Professional-grade construction'
    ],
    imageUrl: [
      '/assets/vp-bender-1.png',
      '/assets/vp-bender-2.png',
      '/assets/vp-bender-2.png'
    ],
    versions: [
      {
        size: '72"',
        price: 2200.00
      },
      {
        size: '60"',
        price: 1900.00
      }
    ]
  };

  getBenderImages(): string[] {
    return Array.isArray(this.vpBender.imageUrl) ? this.vpBender.imageUrl : [this.vpBender.imageUrl];
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  openManual(machineId: string): void {
    const url = `https://vpbtools.com/manuals/${machineId}`;
    this.document.defaultView?.open(url, '_blank');
  }

  askAboutProduct(productName: string): void {
    const phoneNumber = '14077908177';
    const message = `Hello! I am interested in learning more about the ${productName}. Could you provide me with more information about specifications and pricing?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}