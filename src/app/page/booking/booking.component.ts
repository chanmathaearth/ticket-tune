import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


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

  countdown: number = 60;
  countdownInterval: any;

  constructor(private messageService: MessageService) {
    this.startCountdown();
  }

  startCountdown() {
    this.resetCountdown(); // Reset the countdown
    this.countdownInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
        this.updateCountdownDisplay();
      } else {
        clearInterval(this.countdownInterval); // Stop the countdown when it reaches 0
        this.handleTimeout();
      }
    }, 1000);
  }
  
  

  updateCountdownDisplay() {
    const timerElement = document.getElementById('countdown-timer');
    if (timerElement) {
      const minutes = Math.floor(this.countdown / 60);
      const seconds = this.countdown % 60;
      const formattedMinutes = minutes.toString().padStart(2, '0'); // leading zero
      const formattedSeconds = seconds.toString().padStart(2, '0'); // leading zero
      const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
      timerElement.textContent = `Time Left : ${formattedTime}`;
      if (this.countdown <= 50) {
        timerElement.classList.add('red-timer');
      } else {
        timerElement.classList.remove('red-timer');
      }
    }
  }
  
  
  handleTimeout() {
    this.messageService.add({
      severity: 'error',
      summary: 'Timeout',
      detail: 'The countdown timer has reached zero.'
    });
    this.resetSelection();
  }
  

  resetCountdown() {
    clearInterval(this.countdownInterval);
    this.countdown = 60; // 1 minute
    this.updateCountdownDisplay();
  }
  
  


  selectZone(zone: string) {
    this.selectedZone = zone;
    this.zoneSelected = true;
    this.displayDialog = true;
    this.availableSeats = this.seatData[zone];
    this.startCountdown();
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
    const index = this.selectedSeats.indexOf(seat);
    if (index !== -1) {
      // If the seat is already selected, remove it
      this.selectedSeats.splice(index, 1);
    } else {
      // If the seat is not selected, add it
      this.selectedSeats.push(seat);
    }
  }
  
  
  

  seatData: SeatData = {
    'ZONE A': ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20'],
    'ZONE B': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20'],
    'ZONE C': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20', 'C21', 'C22', 'C23', 'C24', 'C25', 'C26', 'C27', 'C28', 'C29', 'C30'],
    'ZONE D': ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'D21', 'D22', 'D23', 'D24', 'D25', 'D26', 'D27', 'D28', 'D29', 'D30', 'D31', 'D32', 'D33', 'D34', 'D35', 'D36', 'D37', 'D38', 'D39', 'D40'],
  };

  isSeatSelected(seat: string): boolean {
    return this.selectedSeats.includes(seat);
  }

  // reset the seat selection
  resetSelection() {
    this.selectedSeats = [];
  }

  seatButtonWidth: string = '44px';

  setButtonWidth(width: string) {
    this.seatButtonWidth = width;
  }


}
