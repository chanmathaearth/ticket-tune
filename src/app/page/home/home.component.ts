import { Component } from '@angular/core';
import { ConcertService } from 'src/app/service/concert/concert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchText: string = '';
  listConcert: any = []

  constructor(private concertService: ConcertService) {
    this.getConscert();
  }
  getConscert() { 
    this.concertService.getConcert().subscribe(res => {
      this.listConcert = res
    })
  }
  search() { }
}
