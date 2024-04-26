import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import posthog from 'posthog-js'

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './sticky-cta.component.html',
  styleUrl: './sticky-cta.component.scss'
})
export class StickyCtaComponent {
  isBlockVisible: boolean = false;

  constructor() { }

  toggleBlock(): void {
    this.isBlockVisible = !this.isBlockVisible; // Toggle the boolean value
  }

  goToLink(url: string) {
    window.open(url, "_self");
  }

  posthogBuyCta() {
    posthog.capture(
      'Clicked buy cta', 
    )
  }

  posthogToggleSupport() {
    posthog.capture(
      'Clicked toggle support'
    )
  }
}
