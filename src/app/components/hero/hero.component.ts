import { Component } from '@angular/core';
import posthog from 'posthog-js'

@Component({
  selector: 'app-hero',
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

  posthogBuy1() {
    posthog.capture(
      'Clicked buy 1', 
    )
  }
}
