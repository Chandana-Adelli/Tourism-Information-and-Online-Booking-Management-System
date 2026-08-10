import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {

  successMessage: string = '';

  user = {
    username: '',
    password: '',
    email: '',
    city: '',
    phone: ''
  };

  constructor(private router: Router) {}

  register() {

    localStorage.setItem('user', JSON.stringify(this.user));

    this.successMessage = "Signup Successful!";

  }

  goToSignin() {
    this.router.navigate(['/signin']);
  }

}