import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success {
  constructor(private router: Router){}

  goHome(){
    this.router.navigate(['/home']);
  }

}
