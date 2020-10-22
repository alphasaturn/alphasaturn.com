import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  company: string;
  marketCap: number;
  price: number;
  change: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {company: 'FB', marketCap: 1.0079, price: 277.88, change: 0.83},
  {company: 'AMZN', marketCap: 4.0026, price: 3158.68, change: 0.83},
  {company: 'GOOG', marketCap: 6.941, price: 115.21, change: 0.83},
  {company: 'AAPL', marketCap: 9.0122, price: 2312.12, change: -0.83},
  {company: 'MSFT', marketCap: 10.811, price: 115.21, change: 0.83},
  {company: 'TSLA', marketCap: 12.0107, price: 115.21, change: 0.83},
  {company: 'INTC', marketCap: 14.0067, price: 115.21, change: 0.83},
  {company: 'AMD', marketCap: 15.9994, price: 115.21, change: 0.83},
  {company: 'F', marketCap: 18.9984, price: 115.21, change: 0.83},
  {company: 'GE', marketCap: 20.1797, price: 115.21, change: 0.83},
];
@Component({
  selector: 'app-top-gainers-table',
  templateUrl: './top-gainers-table.component.html',
  styleUrls: ['./top-gainers-table.component.scss']
})
export class TopGainersTableComponent implements OnInit {
  displayedColumns: string[] = ['company', 'marketCap', 'price', 'change'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
