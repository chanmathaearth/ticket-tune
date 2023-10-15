import { Component } from '@angular/core';

export interface Card {
    cardNumber: string;
    expiryDate: string;
    cvv: number;
    cardName: string;
}

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
    selectedMethod = 'credit';
    addedCards: any[] = [];
    showDialog: boolean = false;

    selectPaymentMethod(method: string) {
        this.selectedMethod = method;
    }

    
    addCard(cardNumber: string, expiry: string, cvc: string, cardOwner: string) {
      const card = {
          cardNumber: cardNumber,
          expiryDate: expiry,
          cvv: cvc,
          cardName: cardOwner
      };
  
      this.addedCards.push(card);
      this.showDialog = false;
  }
  

    onMonthYearChange(event: any): void {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 1) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
        }
        event.target.value = value.slice(0, 5);
    }

    formatInput(event: any) {
        let value = event.target.value.replace(/ /g, ''); 
        let newValue = '';

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                newValue += ' ';
            }
            newValue += value[i];
        }

        event.target.value = newValue;
    }
    removeCard(index: number) {
      this.addedCards.splice(index, 1);
  }  
  
}
