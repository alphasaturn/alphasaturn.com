import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PrNewswireRelease } from 'src/app/generated/models/pr-newswire-release';
import { PrnewswireService } from 'src/app/generated/services/prnewswire.service';

@Component({
    selector: 'app-prnewswire',
    templateUrl: './prnewswire.component.html',
    styleUrls: ['./prnewswire.component.scss']
})
export class PrnewswireComponent implements OnInit {

    releaseId: string;
    release: PrNewswireRelease;

    constructor(private activatedRoute: ActivatedRoute, private prNewswireService: PrnewswireService, private sanitizer: DomSanitizer) {
        this.activatedRoute.params.subscribe(async param => {
            if (param && param.releaseId) {
                this.releaseId = param.releaseId;
            }
            await this.getRelease(this.releaseId);
        });
    }

    ngOnInit(): void {
    }

    async getRelease(releaseId: string): Promise<void> {
        try {
            const release = await this.prNewswireService.prNewswirecontrollerPrNewswireGetRelease({releaseId}).toPromise();
            this.release = release;
        } catch (error) {
            console.log(error);
            alert('Error finding PRNewswire Release, please contact support');
        }
    }

    sanitize(description: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(description);
    }

    parseTicker(ticker: string): string {
        if (ticker.includes(':')) {
            return ticker.split(':')[1];
        }
        return ticker;
    }

}
