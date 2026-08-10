import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { destinationsData } from '../../destinations/destinations-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-hotel.html',
  styleUrls: ['./book-hotel.css']
})
export class BookHotelComponent implements OnInit {

  allPlaces = destinationsData;

  selectedPlace:any;

  checkIn:string='';
  checkOut:string='';

  rooms:number=1;
  adults:number=1;
  children:number=0;

  roomTypes = [
    { name: 'Standard Room', price: 2000 },
    { name: 'Deluxe Room', price: 3500 },
    { name: 'Suite', price: 5000 }
  ];

  selectedRoom:any=null;

  accommodationPrice:number=0;
  addonsTotal:number=0;

  dynamicAccommodationOptions:any[]=[];

  addons = [
    { name: 'Airport Pickup', price: 1200, selected:false },
    { name: 'Local Sightseeing', price: 2000, selected:false },
    { name: 'Bonfire Night', price: 1500, selected:false }
  ];

  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(){

    this.route.queryParams.subscribe(params =>{

      const id = Number(params['placeId']);

      if(id){
        this.selectedPlace = destinationsData.find(p=>p.id === id);
      }

    });

  }

  selectRoom(room:any){

    this.selectedRoom = room;

    this.accommodationPrice = 0;
    this.addonsTotal = 0;

    this.addons.forEach(a=>a.selected=false);

    this.dynamicAccommodationOptions = [

      { name:'Stay Only', price:0 },

      { name:'Stay + Breakfast', price:room.price * 0.2 },

      { name:'Stay + Breakfast + Dinner', price:room.price * 0.4 }

    ];

  }

  get nights():number{

    if(!this.checkIn || !this.checkOut) return 0;

    const start = new Date(this.checkIn);
    const end = new Date(this.checkOut);

    const diff = (end.getTime() - start.getTime()) / (1000*60*60*24);

    return diff > 0 ? diff : 0;

  }

  get totalPrice():number{

    if(!this.selectedRoom) return 0;

    return this.nights * this.selectedRoom.price * this.rooms;

  }

  selectAccommodation(price:number){

    this.accommodationPrice = price;

  }

  toggleAddon(addon:any){

    addon.selected = !addon.selected;

    this.addonsTotal = this.addons
    .filter(a=>a.selected)
    .reduce((sum,a)=>sum+a.price,0);

  }

  get totalBeforeTax():number{

    return this.totalPrice + this.accommodationPrice + this.addonsTotal;

  }

  get tax():number{

    return this.totalBeforeTax * 0.12;

  }

  get finalTotal():number{

    return this.totalBeforeTax + this.tax;

  }

  goToPayment(){

    if(!this.selectedRoom || this.totalBeforeTax <= 0){

      alert("Please complete booking details");

      return;

    }

    this.router.navigate(['/payment'],{

      queryParams:{

        amount:this.finalTotal,

        room:this.selectedRoom.name

      }

    });

  }

}