import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;

  send(data: any) {
    return this.http.post(`${this.endpoint}/messages`, data);
  }
}
