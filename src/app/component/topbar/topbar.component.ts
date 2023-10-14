import { Component, OnInit } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports: [
    PrimeNGModule,
  ]
})

export class TopbarComponent {}
export class ButtonTextDemo {}

// ngOnInit(): void {  }