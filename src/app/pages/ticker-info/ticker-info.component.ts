import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TickerDetailsResponse } from 'src/app/generated/models/ticker-details-response';
import { NewsService } from 'src/app/generated/services/news.service';

@Component({
    selector: 'app-ticker-info',
    templateUrl: './ticker-info.component.html',
    styleUrls: ['./ticker-info.component.scss']
})
export class TickerInfoComponent implements OnInit {

    ticker: string;
    tickerInfo: TickerDetailsResponse;

    constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) {
        if (this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.ticker) {
            this.ticker = this.activatedRoute.snapshot.params.ticker;
        }
    }

    async ngOnInit(): Promise<void> {
        await this.getTickerInfo();
    }

    async getTickerInfo(): Promise<void> {
        try {
            const news = await this.newsService.newsControllerGetTickerDetailsForWebsite({ticker: this.ticker}).toPromise();
            this.tickerInfo = news;
            console.log(this.tickerInfo);
        } catch (error) {
            console.log(error);
            alert('An error has occurred, please contact support');
        }
    }

}
