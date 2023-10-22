import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchText: string = '';
  listConcert: any[] = [
    {
      concert_id: 1,
      name: 'OTHER WORLD',
      img_url: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/e0d3d4305a0111ee911101117567899b.jpg?opt=mild&resize=w200,h290',
      location: 'REXKL'
    },
    {
      concert_id: 2,
      name: 'BUD LIVEHOUSE:OCT 2023',
      img_url: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/0af42db05dc111ee911101117567899b.jpg?format=basic&resize=w425,h610',
      location: 'Lido Connect'
    },
    {
      concert_id: 3,
      name: 'ANATOMY RABBIT',
      img_url: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/13c7c4906bf611ee911101117567899b.jpg?format=basic&resize=w425,h610',
      location: 'Blueprint Livehouse'
    },
    {
      concert_id: 4,
      name: 'Office Syndrome + YOURHEART + ALISON',
      img_url: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/cb9c01a06c2611ee911101117567899b.jpg?format=basic&resize=w425,h610',
      location: 'Blueprint Livehouse'
    },
    {
      concert_id: 5,
      name: 'DOOR PLANT + Chucky Factory Land + But Hate Panic',
      img_url: 'https://s3-ap-southeast-1.amazonaws.com/tm-img-poster-event/b2a6bf3057ba11ee911101117567899b.jpg?opt=mild&resize=w200,h290',
      location: 'Blueprint Livehouse'
    },
  ];
  filteredConcerts: any[] = [];

  constructor() {
    this.filteredConcerts = this.listConcert;
  }

  search() {
    if (this.searchText) {
      this.filteredConcerts = this.listConcert.filter((concert: any) => {
        return (
          concert.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          concert.location.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    } else {
      this.filteredConcerts = this.listConcert;
    }
  }
}
