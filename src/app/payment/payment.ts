import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class PaymentComponent implements OnInit {

  amount: number = 0;
  room: string = '';

  // 🔹 CHANGE THIS TO YOUR REAL UPI ID
  upiID: string = "8125422004@axl";
  name: string = "Hill Explorer";

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.amount = Number(params['amount']) || 0;
      this.room = params['place'] || 'Selected Destination';
    });
  }

payWithUPI() {
  alert('This is a demo payment. No real transaction will be processed.');
}
  
  completePayment() {
  this.router.navigate(['/success']);
}

}