import { Component, Input, OnInit } from '@angular/core';
import { Finviz } from 'src/app/generated/models/finviz';

@Component({
  selector: 'app-top-gainers-table',
  templateUrl: './top-gainers-table.component.html',
  styleUrls: ['./top-gainers-table.component.scss']
})
export class TopGainersTableComponent implements OnInit {
  displayedColumns: string[] = ['ticker', 'volume', 'price', 'change'];
  @Input('stocks') stocks: Finviz[];
  constructor() { }

  ngOnInit(): void { }

}
