import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TickerInfoComponent } from './pages/ticker-info/ticker-info.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { GdprComponent } from './pages/gdpr/gdpr.component';
import { TradingViewComponent } from './components/trading-view/trading-view.component';
import { NewsComponent } from './pages/news/news.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FavoritesTableComponent } from './components/favorites-table/favorites-table.component';
import { TopGainersTableComponent } from './components/top-gainers-table/top-gainers-table.component';
import { TopLosersTableComponent } from './components/top-losers-table/top-losers-table.component';
import { SectorOverviewTableComponent } from './components/sector-overview-table/sector-overview-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { environment } from 'src/environments/environment';
import { ApiModule } from './generated/api.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrnewswireComponent } from './pages/prnewswire/prnewswire.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    SignUpComponent,
    TickerInfoComponent,
    SignInComponent,
    FooterComponent,
    GdprComponent,
    TradingViewComponent,
    NewsComponent,
    FavoritesTableComponent,
    TopGainersTableComponent,
    TopLosersTableComponent,
    SectorOverviewTableComponent,
    PrnewswireComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot({rootUrl: environment.rootApi}),
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
