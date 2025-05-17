import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
  private serviceId = 'YOUR_SERVICE_ID'; // Reemplazar con tu ID de servicio de EmailJS
  private templateId = 'YOUR_TEMPLATE_ID'; // Reemplazar con tu ID de plantilla
  private userId = 'YOUR_USER_ID'; // Reemplazar con tu ID de usuario

  constructor(private http: HttpClient) {}

  sendEmail(data: EmailData): Observable<any> {
    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      phone_number: data.phone,
      message: data.message
    };

    const emailData = {
      service_id: this.serviceId,
      template_id: this.templateId,
      user_id: this.userId,
      template_params: templateParams
    };

    return this.http.post(this.apiUrl, emailData);
  }
}