import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { destinationsData } from './destinations-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule,RouterLink],
  templateUrl: './destinations.html',
  styleUrls: ['./destinations.css']
})
export class DestinationsComponent {

  destinations = destinationsData;

  searchText: string = '';
  selectedCategory: string = 'All';
  selectedSort: string = '';
  selectedPrice: string = '';

  // ✅ Pagination Variables
  currentPage: number = 1;
  itemsPerPage: number = 6;

  // 🔹 Filter + Sort Logic (unchanged but structured)
get filteredDestinations() {

  let filtered = this.destinations.filter(place =>
    (this.selectedCategory === 'All' || place.category === this.selectedCategory) &&
    place.name.toLowerCase().includes(this.searchText.toLowerCase())
  );

  // Sort by popularity
  if (this.selectedSort === 'popularity') {
    filtered = [...filtered].sort((a, b) => b.visitors - a.visitors);
  }

  // Sort by rating
  if (this.selectedSort === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  // Price: Low → High
  if (this.selectedPrice === 'Low → High') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }

  // Price: High → Low
  if (this.selectedPrice === 'High → Low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return filtered;
}

  // ✅ Paginated Data
  get paginatedDestinations() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredDestinations.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // ✅ Total Pages
  get totalPages() {
    return Math.ceil(this.filteredDestinations.length / this.itemsPerPage);
  }

  // ✅ Change Page
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // ✅ Reset page when filter changes
  resetPagination() {
    this.currentPage = 1;
  }

  constructor(private router: Router) {}

/* -------- TOUR BOOKING -------- */
goToTourBooking(place: any) {
  this.router.navigate(['/book-tour'], {
    queryParams: { placeId: place.id }
  });
}

/* -------- HOTEL BOOKING -------- */
goToHotelBooking(place: any) {
  this.router.navigate(['/book-hotel'], {
    queryParams: { placeId: place.id }
  });
}
}
