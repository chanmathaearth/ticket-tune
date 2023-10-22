import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

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
    addedCards: Card[] = [{
        cardNumber: '1234 5678 9012 3456',
        expiryDate: '01/25',
        cvv: '123',
        cardName: 'John Doe',
        month: '01',
        year: '2025'
    }];
    showDialog: boolean = false;

    card: Card & { month: string; year: string } = {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: '',
        month: '',
        year: ''
    };

    constructor(private confirmationService: ConfirmationService) { }
    
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
    maskCVV(cvv: string): string {
        return '*'.repeat(cvv.length);
    }
    
    
    
    currentYear = new Date().getFullYear();
    years: number[] = Array.from({length: 15}, (_, i) => this.currentYear + i);


    removeCard(index: number): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this card?',
            header: 'Confirm Deletion',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
        this.addedCards.splice(index, 1);
    }
    });
}

}
