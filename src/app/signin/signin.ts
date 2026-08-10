import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css']
})
export class SigninComponent {

  username = '';
  password = '';
  loginMessage: string = '';

  constructor(private router: Router) {}

  login() {

    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (
      this.username === storedUser.username &&
      this.password === storedUser.password
    ) {
      this.loginMessage = "Login Successful!";
      this.router.navigate(['/home']);
    } 
    else {
      this.loginMessage = "Invalid username or password";
    }

  }

}