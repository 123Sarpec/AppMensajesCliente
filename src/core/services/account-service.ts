import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:5103/api/';
  login (credenciales: any) {
    return this.http.post(this.baseUrl + 'account/login', credenciales);
  }
}
