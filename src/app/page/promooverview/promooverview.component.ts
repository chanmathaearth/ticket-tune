import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-promooverview',
  templateUrl: './promooverview.component.html',
  styleUrls: ['./promooverview.component.scss']
})
export class PromooverviewComponent implements OnInit {

  products: any[] = [
    { 
      code: 'D1', 
      name: 'Yoasobi', 
      start_date: '10/5/23', 
      end_date: '15/5/23', 
      discount_code: 'DISC10', 
      discount_percentage: 10, 
      description: 'Special discount'
    },
    { 
      code: 'P1002', 
      name: 'Product 2', 
      start_date: '5/5/23', 
      end_date: '25/5/23', 
      discount_code: 'OFF15', 
      discount_percentage: 15, 
      description: 'Limited offer'
    },
  ];

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  deleteRow(index: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this promo?',
      header: 'Confirm Deletion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products.splice(index, 1);
      }
    });
  }
}
