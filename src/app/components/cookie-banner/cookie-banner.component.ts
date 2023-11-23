import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {

  constructor(private cookieService: CookieService) {
    if(this.cookieService.get('cookiesAccepted') === 'true') {
      this.injectTracking();
    }
  }

  displayCookieBanner(): boolean {
    return this.cookieService.get('cookiesAccepted') == '';
  }

  acceptCookies() {
    this.cookieService.set('cookiesAccepted', 'true');
    this.injectTracking();
  }

  denyCookies() {
    this.cookieService.set('cookiesAccepted', 'false');
  }

  private injectTracking() {
    this.injectHotjarScript();
    this.injectGoogleAnalyticsScript();
  }

  private injectHotjarScript() {
    const head = document.getElementsByTagName('head')[0];

    const hotjar = document.createElement('script');
    hotjar.innerHTML = `
    (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:3357274,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;
    head.appendChild(hotjar);
  }

  private injectGoogleAnalyticsScript() {
    const head = document.getElementsByTagName('head')[0];

    const gtag2 = document.createElement('script');
    gtag2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-73NSFTK9Y1');`;
    head.appendChild(gtag2);
  }
}
