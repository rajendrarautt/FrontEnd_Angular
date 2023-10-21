import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://api.example.com'; // Replace with your actual API base URL

  constructor() {}

  getApiUrl(path: string): string {
    return `${this.apiUrl}/${path}`;
  }
}
