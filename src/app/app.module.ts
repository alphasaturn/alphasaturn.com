import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LandingPageComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    SignUpComponent,
    TickerInfoComponent,
    SignInComponent,
    FooterComponent,
    GdprComponent,
    TradingViewComponent
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
    MatSelectModule

  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
