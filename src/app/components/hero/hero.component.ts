import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import posthog from 'posthog-js'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollToSection() {
    const targetElement = document.getElementById('included');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  goToLink(url: string) {
    window.open(url, "_self");
  }

  posthogReadMore() {
    posthog.capture(
      'Clicked read more', 
    )
  }

  posthogBuyHero() {
    posthog.capture(
      'Clicked buy "hero"', 
    )
  }
}
