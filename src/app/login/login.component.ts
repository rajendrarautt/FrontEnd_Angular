import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as core from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  apiUrl = 'https://api.example.com/login'; // Replace with your actual API endpoint

  constructor(private http: HttpClient,private apiService: ApiService) {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    const loginUrl = this.apiService.getApiUrl('login');

    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post(loginUrl, credentials)
      .subscribe(
        (response) => {
          console.log('Login successful:', response);
          // Handle successful login (e.g., redirect to another page)
        },
        (error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          // Handle login error (e.g., display an error message)
        }
      );
  }
}
