import { Component } from '@angular/core';

interface SeatData {
  [zone: string]: string[]; // An object with keys (zone names) that map to string arrays (seat numbers)
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  selectedZone: string = '';
  selectedSeats: string[] = [];
  zoneSelected: boolean = false;
  displayDialog: boolean = false;

  availableSeats: string[] = [];

  constructor() {}

  selectZone(zone: string) {
    this.selectedZone = zone;
    this.zoneSelected = true;
    this.displayDialog = true;

    this.availableSeats = this.seatData[zone];
  }

  buyTickets() {
    this.selectedSeats = [];
  }

  hideDialog() {
    this.displayDialog = false;
  }

  isSeatTaken(seat: string): boolean {

    return false;
  }

  selectSeat(seat: string) {
    // Check if the seat is already selected
    if (!this.selectedSeats.includes(seat)) {
      this.selectedSeats.push(seat);
    }
  }
  
  

  seatData: SeatData = {
    'ZONE A': ['A1', 'A2', 'A3', 'A4', 'A5'],
    'ZONE B': ['B1', 'B2', 'B3', 'B4', 'B5'],
    'ZONE C': ['C1', 'C2', 'C3', 'C4', 'C5'],
  };

}
