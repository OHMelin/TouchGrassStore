import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { IncludedComponent } from '../included/included.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { FaqComponent } from '../faq/faq.component';
import { FooterComponent } from '../footer/footer.component';
import { StickyCtaComponent } from '../sticky-cta/sticky-cta.component';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [
    HeroComponent,
    IncludedComponent,
    ReviewsComponent,
    FaqComponent,
    FooterComponent,
    StickyCtaComponent,
  ],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss'
})
export class FrontpageComponent {

}
