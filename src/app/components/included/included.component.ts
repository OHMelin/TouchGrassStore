import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import posthog from 'posthog-js'

@Component({
  selector: 'app-included',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
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
