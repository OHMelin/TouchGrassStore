import { Component } from '@angular/core';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { IncludedComponent } from './components/included/included.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaqComponent,
    FooterComponent,
    HeroComponent,
    IncludedComponent,
    ReviewsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TouchGrassStore';
}
