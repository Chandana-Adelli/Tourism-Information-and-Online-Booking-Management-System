import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { destinationsData } from '../../destinations/destinations-data';

@Component({
  selector: 'app-book-tour',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-tour.html',
  styleUrls: ['./book-tour.css']
})
export class BookTourComponent {

  allPlaces = destinationsData;

  selectedPlace: any = null;

  fullName: string = '';
  email: string = '';
  phone: string = '';

  travelDate: string = '';

  adults: number = 1;
  children: number = 0;

constructor(
  private router: Router,
  private route: ActivatedRoute
) {}
  goToPayment(){

    if(!this.selectedPlace){
      alert("Please select destination");
      return;
    }

    if(!this.fullName || !this.email || !this.phone){
      alert("Please fill personal details");
      return;
    }

    if(!this.travelDate){
      alert("Please select travel date");
      return;
    }

    this.router.navigate(['/payment'],{
      queryParams:{
        place:this.selectedPlace.name,
        amount:this.selectedPlace.price,
        persons:this.adults + this.children
      }
    });

  }

  ngOnInit() {

  this.route.queryParams.subscribe(params => {

    const id = Number(params['placeId']);

    if (id) {
      this.selectedPlace = this.allPlaces.find(p => p.id === id);
    }

  });

}
}