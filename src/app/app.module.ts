import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { IncludedComponent } from './components/included/included.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ShippingComponent,
    IncludedComponent,
    ReviewsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
