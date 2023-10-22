import { Component } from '@angular/core';

export interface Card {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardName: string;
    month: string;  
    year: string; 
}


@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
    selectedMethod: string = 'credit';
    addedCards: Card[] = [];
    showDialog: boolean = false;

    card: Card & { month: string; year: string } = {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: '',
        month: '',
        year: ''
    };

    selectPaymentMethod(method: string): void {
        this.selectedMethod = method;
    }

    addCard(): void {
        this.card.expiryDate = `${this.card.month}/${this.card.year}`;
        const newCard = { ...this.card };
        this.addedCards.push(newCard);
        this.showDialog = false;

        this.resetCard();
    }

    getMaskedCardNumber(cardNumber: string): string {
        const cleanedCardNumber = this.cleanNumber(cardNumber);
        const visibleDigits = cleanedCardNumber.slice(-4);
        return '**** **** **** ' + visibleDigits;
    }
    

    resetCard(): void {
        this.card = {
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            cardName: '',
            month: '01', 
            year: `${this.currentYear}` 
        };
    }    

    formatInput(event: any) {
        let value = event.target.value.replace(/\D/g, '');
        let newValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0 && i < 16) { 
                newValue += ' ';
            }
            newValue += value[i];
        }
        event.target.value = newValue.slice(0, 19);
    }
    
    cleanNumber(num: string): string {
        return num.replace(/\D/g, '');
    }
    
    
    currentYear = new Date().getFullYear();
    years: number[] = Array.from({length: 15}, (_, i) => this.currentYear + i);


    removeCard(index: number): void {
        this.addedCards.splice(index, 1);
    }
}


