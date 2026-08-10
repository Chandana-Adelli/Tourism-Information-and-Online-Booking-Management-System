import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  firstName = '';
  lastName = '';
  email = '';
  mobile = '';
  message = '';

  successMessage = false;

sendMessage(form:any){
  form.reset();
  this.successMessage = true;
}

}