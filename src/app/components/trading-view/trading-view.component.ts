import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading-view',
  templateUrl: './trading-view.component.html',
  styleUrls: ['./trading-view.component.scss']
})
export class TradingViewComponent implements OnInit, AfterViewInit {

    @Input('ticker')
    ticker: string;

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.innerHTML = `
            new TradingView.widget(
                {
                // "width": 1200,
                // "height": 610,
                autosize: true,
                "symbol": '${this.ticker}',
                "timezone": "America/New_York",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "withdateranges": true,
                "range": "1D",
                "allow_symbol_change": true,
                "details": false,
                "studies": [
                "MAWeighted@tv-basicstudies",
                "Volume@tv-basicstudies",
                "VWAP@tv-basicstudies"
                ],
                "container_id": "tradingview_${this.ticker}"
            }
        );`;
        this.elementRef.nativeElement.append(s);
    }

}
