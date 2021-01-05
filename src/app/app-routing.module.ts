import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TickerInfoComponent } from './pages/ticker-info/ticker-info.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { GdprComponent } from './pages/gdpr/gdpr.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'ticker/:ticker', component: TickerInfoComponent},
  {path: 'news', component: NewsComponent},
  {path: 'terms-of-service', component: TermsOfServiceComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'gdpr', component: GdprComponent},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
