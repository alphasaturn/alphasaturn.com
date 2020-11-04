import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  company: string;
  marketCap: number;
  price: number;
  change: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {company: 'ATIF', marketCap: 36.16, price: .76, change: -41.73},
  {company: 'SEDG', marketCap: 10.84, price: 206.37, change: -22.92},
  {company: 'OSPN', marketCap: 775.14, price: 18.20, change: -19.15},
  {company: 'GHL', marketCap: 199.48, price: 10.56, change: -19.14},
  {company: 'IPI', marketCap: 125.49, price: 9.18, change: -17.59},
  {company: 'AIRI', marketCap: 25.74, price: 1.08, change: -17.31},
  {company: 'AMBO', marketCap: 53.22, price: 2.20, change: -16.98},
  {company: 'ESPR', marketCap: 704.70, price: 24.20, change: -16.52},
  {company: 'AIV', marketCap: 3.88, price: 26.96, change: -16.06},
  {company: 'BBW', marketCap: 47.40, price: 3.78, change: -14.67},
];
@Component({
  selector: 'app-top-losers-table',
  templateUrl: './top-losers-table.component.html',
  styleUrls: ['./top-losers-table.component.scss']
})
export class TopLosersTableComponent implements OnInit {
  displayedColumns: string[] = ['company', 'marketCap', 'price', 'change'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
