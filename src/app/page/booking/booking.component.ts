import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';

interface SeatData {
  [zone: string]: string[];
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  currentConcertName: string = 'JAMES ARTHUR SOUTH EAST ASIA TOUR 2023 - BANGKOK';
  isSelectSeatsCompleted: boolean = false;
  steps: MenuItem[] = [];
  activeStepIndex = this.isSelectSeatsCompleted ? 1 : 0;
  currentStep: string = "Select Seats";


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
      if (this.countdown <= 200) {
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
    this.countdown = 300; // 5 minute
    this.updateCountdownDisplay();
  }
  
  


  selectZone(zone: string) {
    this.selectedZone = zone;
    this.zoneSelected = true;
    this.displayDialog = true;
    this.availableSeats = this.seatData[zone];
    this.isSelectSeatsCompleted = true;
    this.activeStepIndex = 1;
    this.startCountdown();
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

  
  calculateTotal(): string {
    const ticketPrices: { [zone: string]: number } = {
      'ZONE A': 4900,
      'ZONE B': 3900,
      'ZONE C': 2900,
      'ZONE D': 1900,
    };
  
    const selectedSeatsByZone: { [zone: string]: string[] } = {};
  
    this.selectedSeats.forEach(seat => {
      const zone = this.getZoneForSeat(seat);
      if (zone) {
        if (!selectedSeatsByZone[zone]) {
          selectedSeatsByZone[zone] = [];
        }
        selectedSeatsByZone[zone].push(seat);
      }
    });
  
    let total = 0;
    for (const zone in selectedSeatsByZone) {
      if (selectedSeatsByZone.hasOwnProperty(zone)) {
        const price = ticketPrices[zone];
        if (price) {
          total += price * selectedSeatsByZone[zone].length;
        }
      }
    }
    const formattedTotal = total.toLocaleString() + ' THB';
    return formattedTotal;
  }
  
  getZoneForSeat(seat: string): string {
    for (const zone in this.seatData) {
      if (this.seatData.hasOwnProperty(zone)) {
        if (this.seatData[zone].includes(seat)) {
          return zone;
        }
      }
    }
    return ''; // Return an empty string or an appropriate value when the seat is not found
  }

  // Inside BookingComponent class
displaySummary: boolean = false;
selectedPaymentMethod: string = '';


// ...
selectedSeatsSummary: { seat: string; zone: string }[] = [];


buyTickets() {
  // Create a summary of the selected seats
  const seatSummary = this.selectedSeats.map(seat => ({
    seat,
    zone: this.getZoneForSeat(seat), // If you have a function to get the zone for a seat
  }));
  // Store the previous selections
  const previousSelectedSeats = [...this.selectedSeats];
  const previousTotal = this.calculateTotal();
  const previousQuantity = this.selectedSeats.length;

  // Clear the selections
  this.selectedSeats = [];

  this.displaySummary = true;

  this.selectedSeats = previousSelectedSeats;

  this.selectedSeatsSummary = seatSummary;
  if (this.selectedPaymentMethod === 'creditDebit') {
    // Display the summary dialog
    this.displaySummary = true;
  }
}


confirmBooking() {
  // Handle the "Confirm Booking" button click
  // Get the selected payment method (either 'creditDebit' or 'promptPay')
  console.log('confirmBooking function called');
  console.log('Booking confirmed with', this.selectedPaymentMethod);

  this.displayPaymentConfirmation = true;
  // Close the summary dialog
  this.displaySummary = false;
  this.showPaymentSuccessMessage();
} 
confirmPayment() {
  if (this.selectedPaymentMethod === 'creditDebit') {
    // Handle credit/debit card payment logic here.
    // You can simulate a successful payment for demonstration purposes.
    this.finalizePayment();
  } else if (this.selectedPaymentMethod === 'promptPay') {
    // Handle PromptPay payment logic here.
    // You can simulate a successful payment for demonstration purposes.
    this.finalizePayment();
  }
}





displayPaymentConfirmation: boolean = false;

  // Declare the finalizePayment function (you can implement its logic)
  finalizePayment() {
    this.displaySummary = false;
    this.showPaymentSuccessMessage();
  }

  showPaymentSuccessMessage() {
    // You can customize this method to display a success message or navigate to a success page.
    // For now, we'll use the PrimeNG MessageService to show a success message.
    this.messageService.add({
      severity: 'success',
      summary: 'Payment Successful',
      detail: 'Your payment has been confirmed for ' + this.selectedPaymentMethod + '.',
    });
  }


  displayQRCode: boolean = false;
  showQRCodePopup() {
    if (this.selectedPaymentMethod === 'promptPay') {
      this.displayQRCode = true; // Show the QR code popup only when 'promptPay' is selected
    }
  }
cardNumber: string = '';
expiryDate: string = '';
nameOnCard: string = '';
cvvCvc: string = '';
saveCard: boolean = false;

selectCard(selectedCard: any) {
  // Update the selected card information
  this.cardNumber = selectedCard.cardNumber;
  this.nameOnCard = selectedCard.nameOnCard;
  this.expiryDate = selectedCard.expiryDate;
  this.cvvCvc = selectedCard.cvvCvc;
  this.saveCard = selectedCard.saved;
}

savedCards: any[] = [
  // Initialize with some example saved card data
  {
    cardNumber: '1234 5678 9012 3456',
    nameOnCard: 'John Doe',
    expiryDate: '12/24',
    cvvCvc: '123',
  },
  {
    cardNumber: '9999 9999 9999 9999',
    nameOnCard: 'Joe Ray',
    expiryDate: '10/24',
    cvvCvc: '456',
  },
  // Add more saved card objects as needed
];


}
