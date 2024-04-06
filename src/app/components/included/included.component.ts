import { Component } from '@angular/core';
import posthog from 'posthog-js'

@Component({
  selector: 'app-included',
  templateUrl: './included.component.html',
  styleUrls: ['./included.component.scss']
})
export class IncludedComponent {
  posthogBuy2() {
    posthog.capture(
      'Clicked buy 2', 
    )
  }
}
