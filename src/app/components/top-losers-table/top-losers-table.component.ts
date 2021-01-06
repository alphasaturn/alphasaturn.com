import { Component, Input, OnInit } from '@angular/core';
import { Finviz } from 'src/app/generated/models/finviz';

@Component({
  selector: 'app-top-losers-table',
  templateUrl: './top-losers-table.component.html',
  styleUrls: ['./top-losers-table.component.scss']
})
export class TopLosersTableComponent implements OnInit {
  displayedColumns: string[] = ['ticker', 'volume', 'price', 'change'];
  @Input('stocks') stocks: Finviz[];
  constructor() { }

  ngOnInit(): void { }

}
