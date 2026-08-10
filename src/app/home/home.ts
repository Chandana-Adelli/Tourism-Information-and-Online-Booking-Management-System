import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { destinationsData } from '../destinations/destinations-data'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  showAll = false;

  allDestinations = [
    {name:'Gulmarg', state:'Jammu & Kashmir', img:'https://www.peakadventuretour.com/assets/imgs/gulmarg-hill-station-kashmir.webp'},
    {name:'Dharamshala', state:'Himachal Pradesh', img:'https://www.peakadventuretour.com/assets/imgs/dharamshala-hill-station-himachal.webp'},
    {name:'Nainital', state:'Uttarakhand', img:'https://www.peakadventuretour.com/assets/imgs/nainital-hill-station-uttarakhand.webp'},
    {name:'Leh', state:'Ladakh', img:'https://www.peakadventuretour.com/assets/imgs/leh-hill-station-ladakh.webp'},
  ];

  get destinations() {
    return this.showAll
      ? this.allDestinations
      : this.allDestinations.slice(0,4);
  }

  toggleView() {
    this.showAll = !this.showAll;

  }
}