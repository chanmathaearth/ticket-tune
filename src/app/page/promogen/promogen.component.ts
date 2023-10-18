import { Component } from '@angular/core';

@Component({
  selector: 'app-promogen',
  templateUrl: './promogen.component.html',
  styleUrls: ['./promogen.component.scss']
})
export class PromogenComponent {
  issumary: boolean = false;
  
  togglenext() {
    this.issumary = !this.issumary;
  }

}

