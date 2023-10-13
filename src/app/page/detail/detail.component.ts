import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConcertService } from 'src/app/service/concert/concert.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  subtotal: number = 0;
  promotion: number = 0;
  total: number = 0;

  concertId: string = "";
  concert: any = {};
  selectedTicket: any = {};
  amount: any = 0;
  listPrice: any = [];

  formData: FormGroup = new FormGroup({
    amount: new FormControl(),
  })

  constructor(
    private activateRoute: ActivatedRoute,
    private concertService: ConcertService
  ) {
    this.activateRoute.params.subscribe(params => {
      if (params['id']) {
        this.concertId = params['id'];
        this.getConcert();
      }
    });

    this.formData.get('amount')?.valueChanges.subscribe(value => {
      this.subtotal = parseInt(value) * parseInt(this.selectedTicket.ticket_price);
      this.total = this.subtotal - this.promotion;
  })

    // this.amount.valueChanges.subscribe((value: any) => {
    //   this.subtotal = value * parseInt(this.selectedTicket.ticket_price);
    // });
  }

  getConcert() {
    if (!this.concertId) return;
    this.concertService.getConcertByID(this.concertId).subscribe(res => {
      this.concert = res;
      this.listPrice = this.concert.tickets;
      this.listPrice.map((ticket: any) => {
        ticket.label = ticket.ticket_type_name + " : " + ticket.ticket_price + " บาท"
      });
      console.log(this.listPrice)
    })
  }

  test() {
    console.log(this.subtotal);
    console.log(this.amount);
  }
}
