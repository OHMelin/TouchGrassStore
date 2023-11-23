import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { IncludedComponent } from './components/included/included.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FaqComponent } from './components/faq/faq.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IncludedComponent,
    ReviewsComponent,
    FaqComponent,
    HeroComponent,
    CookieBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
