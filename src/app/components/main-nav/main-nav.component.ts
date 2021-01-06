import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
    newsSearch: string = '';

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    submitToNews() {
        this.router.navigate(['/news'], {queryParams: {q: this.newsSearch}});
    }

}
