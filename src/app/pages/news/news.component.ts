import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Finviz } from 'src/app/generated/models/finviz';
import { News } from 'src/app/generated/models/news';
import { NewsService } from 'src/app/generated/services/news.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    news: News[] = [];
    gainers: Finviz[] = [];
    losers: Finviz[] = [];
    sources: string[] = [];
    selectedSource: string;
    searchQuery: string;

    constructor(private newsService: NewsService, private sanitizer: DomSanitizer, private router: Router, private activatedRoute: ActivatedRoute) {

        this.activatedRoute.queryParams.subscribe(async query => {
            if (query && query.q) {
                this.searchQuery = query.q;
            }
            await this.getNews(null, this.searchQuery);
        });
    }

    async ngOnInit(): Promise<void> {
        await this.getGainersLosers();
        await this.getSources();
    }

    async selectSource(source: string): Promise<void> {
        this.selectedSource = source;
        await this.getNews(this.selectedSource, this.searchQuery);
    }

    checkUrl(url: string, releaseId: string): string {
        if (url.includes('.cision.')) {
            return `/prnewswire/${releaseId}`;
        }
        return url;
    }

    async getSources(): Promise<void> {
        try {
            const sources = await this.newsService.newsControllerGetSourcesForWebsite().toPromise();
            this.sources = sources;
        } catch (error) {
            console.log(error);
        }
    }

    async getNews(source?: string, query?: string): Promise<void> {
        try {
            const news = await this.newsService.newsControllerGetLatestNewsForWebsite({source, query}).toPromise();
            this.news = news;
            // console.log(this.news);
        } catch (error) {
            console.log(error);
            alert('An error has occurred fetching news, please contact support');
        }
    }

    async getGainersLosers(): Promise<void> {
        try {
            const { gainers, losers } = await this.newsService.newsControllerGetLatestGainersAndLosersForWebsite().toPromise();
            this.gainers = gainers;
            this.losers = losers;
            // console.log(gainers, losers);
        } catch (error) {
            console.log(error);
        }
    }

    sanitize(description: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(description);
    }

    parseSource(source: string): string {
        return source.split('-')[0].toUpperCase();
    }

    navigateToTicker(ticker: string): void {
        if (ticker) {
            if (ticker.includes(':')) {
                ticker = ticker.split(':')[1];
            }
            this.router.navigate([`/ticker/${ticker}`]);
        }
    }

    getSentimentLabel(sentiment: number): string {
        if (sentiment >= 0.6) {
            return 'Positive';
        } else if (sentiment < 0) {
            return 'Negative';
        }
        return 'Neutral';
    }

    getSentimentStyle(sentiment: number): string {
        if (sentiment >= 0.6) {
            return 'primary';
        } else if (sentiment < 0) {
            return 'warn';
        }
        return 'neutral';
    }

}
