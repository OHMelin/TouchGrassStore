import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import posthog from 'posthog-js'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  goToLink(url: string) {
    window.open(url, "_blank");
  }

  posthogTikTok() {
    posthog.capture(
      'Clicked socials "TikTok"', 
    )
  }

  posthogGitHub() {
    posthog.capture(
      'Clicked socials "GitHub"', 
    )
  }
}
