import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'q1',
      answer: 'a1',
    },
    {
      question: 'q2',
      answer: 'a2',
    },
    {
      question: 'q3',
      answer: 'a3',
    },
  ]
}
