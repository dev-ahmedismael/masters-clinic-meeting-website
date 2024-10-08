import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  endpoint = environment.endpoint;

  login(data: any) {
    return this.http.post(`${this.endpoint}/login`, data);
  }
}
