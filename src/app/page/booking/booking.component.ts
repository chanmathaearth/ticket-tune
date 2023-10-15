// booking.component.ts
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  selectedZone: string = '';
  selectedSeats: string = '';
  zoneSelected: boolean = false;

  constructor() {}

  selectZone(zone: string) {
    this.selectedZone = zone;
    // You can add logic to load available seats for the selected zone here
    this.zoneSelected = true;
  }

  buyTickets() {
    // Add your logic to purchase tickets here
    this.selectedSeats = ''; // Reset selected seats after purchase
  }
}
