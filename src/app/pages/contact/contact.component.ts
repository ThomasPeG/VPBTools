import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  openWhatsApp(): void {
    const phoneNumber = '14077908177';
    const message = 'Hello! I am interested in learning more about VPB Tools vinyl bending machines. Could you provide me with more information?';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
