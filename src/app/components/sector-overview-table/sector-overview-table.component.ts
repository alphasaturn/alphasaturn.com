import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  sector: string;
  intradayChange: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sector: 'Energy', intradayChange: 0.83},
  {sector: 'Health Care', intradayChange: 0.83},
  {sector: 'Utilities', intradayChange: 0.83},
  {sector: 'Finance', intradayChange: -0.83},
  {sector: 'Industrials',intradayChange: 0.83},
  {sector: 'Miscellaneous', intradayChange: 0.83},
  {sector: 'Real Estate', intradayChange: 0.83},
  {sector: 'Communication Services', intradayChange: 0.83},
  {sector: 'Materials', intradayChange: 0.83},
  {sector: 'Technology', intradayChange: 0.83},
  {sector: 'Consumer Staples', intradayChange: 0.83},
  {sector: 'Consumer Discretionary', intradayChange: 0.83},
];
@Component({
  selector: 'app-sector-overview-table',
  templateUrl: './sector-overview-table.component.html',
  styleUrls: ['./sector-overview-table.component.scss']
})
export class SectorOverviewTableComponent implements OnInit {
  displayedColumns: string[] = ['sector', 'intradayChange'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
