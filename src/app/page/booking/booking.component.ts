// booking.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  selectedZone: string = '';
  selectedSeats: string = '';
  zoneSelected: boolean = false;
  displayDialog: boolean = false; 

  constructor() {}

  selectZone(zone: string) {
    this.selectedZone = zone;
    this.zoneSelected = true;
    this.displayDialog = true;
  }

  buyTickets() {
    this.selectedSeats = '';
  }
  hideDialog() {
    this.displayDialog = false; // Hide the dialog
  }
}
