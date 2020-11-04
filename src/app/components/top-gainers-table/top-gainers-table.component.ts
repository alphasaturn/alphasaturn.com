import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  company: string;
  marketCap: number;
  price: number;
  change: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {company: 'APVO', marketCap: 37.06, price: 11.23, change: 78.25},
  {company: 'ALSK', marketCap: 164.89, price: 1.13, change: 59.16},
  {company: 'BBGI', marketCap: 48.67, price: 1.17, change: 37.10},
  {company: 'INSP', marketCap: 4.46, price: 160.50, change: 31.83},
  {company: 'ESGC', marketCap: 419.19, price: 2.09, change: 27.44},
  {company: 'GCI', marketCap: 220.02, price: 1.45, change: 27.19},
  {company: 'IEA', marketCap: 207.35, price: 8.88, change: 24.72},
  {company: 'MDLY', marketCap: 226.14, price: 6.45, change: 24.28},
  {company: 'REV', marketCap: 313.14, price: 5.201, change: 23.81},
  {company: 'RIDE', marketCap: 632.08, price: 15.99, change: 22.34},
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
