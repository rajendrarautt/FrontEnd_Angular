import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  password: string;
  constructor()
  {
    this.email='',
    this.password=''
  };

  onRegister() {
    // Add your registration logic here
    console.log('Registering with email:', this.email);
    console.log('Registering with password:', this.password);
  }
}
