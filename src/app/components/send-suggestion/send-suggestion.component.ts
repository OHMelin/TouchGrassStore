import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import posthog from 'posthog-js'

@Component({
  selector: 'app-send-suggestion',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './send-suggestion.component.html',
  styleUrl: './send-suggestion.component.scss'
})
export class SendSuggestionComponent {
  posthogBuy3() {
    posthog.capture(
      'Clicked buy 3', 
    )
  }

  sendTo = [
    "yourself",
    "the nolife",
    "the workaholic",
    "the wannabe influencer",
    "the gamer",
    "the bookworm",
    "the screen addict",
  ]
}
