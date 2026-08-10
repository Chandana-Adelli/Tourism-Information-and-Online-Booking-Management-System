import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { destinationsData } from '../destinations/destinations-data';
import { SafeUrlPipe } from '../safe-url-pipe';

@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [CommonModule, RouterModule,SafeUrlPipe],
  templateUrl: './place-details.html',
  styleUrls: ['./place-details.css']
})
export class PlaceDetailsComponent {

  selectedplace: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.selectedplace = destinationsData.find(
      place => place.id === id
    );
  }

  goToHotelBooking() {
  this.router.navigate(['/book-hotel'], {
    queryParams: { placeId: this.selectedplace.id }
  });
}
}