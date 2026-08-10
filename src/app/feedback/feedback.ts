import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css']
})
export class FeedbackComponent {

  showPopup = false;

  submitFeedback(form: NgForm){

    if(form.valid){

      console.log("Feedback:", form.value);

      this.showPopup = true;

      form.reset();

    }

  }

  closePopup(){

    this.showPopup = false;

  }

}