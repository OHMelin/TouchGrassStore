import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'Is it anonymous?',
      answer: 'Yes! Unless you write any identifying information in your custom message, then there\'s no way to identify you as the sender.',
      icon: 'face',
    },
    {
      question: 'What does "touch grass" mean?',
      answer: 'Touch grass is used on the Internet to tell someone to go outside. The phrase also implies that the person the insult is directed to spends too much time online, and they physically need to get outside and “touch some grass” to reconnect with the real world.',
      icon: 'contact_support',
    },
    {
      question: 'What is the note for?',
      answer: 'We\'ve included a personalized message/note in every order. This is to enable people to purchase the grass as a gift for a friend. Using the note you can personalize a message for them to read when they receive the grass. This personalized message is moderated and there\'s a 150 character limit. We moderate the message to avoid legal trouble, so as long as you\'re not threatening people or writing anything illegal, we\'ll write it for you.',
      icon: 'edit',
    },
    {
      question: 'Where can I ship to?',
      answer: 'Anywhere in the world! No matter if it\'s for yourself, a friend or another address! If you can\'t find the country you\'re looking for, when choosing shipping, try contacting us at touchgrassstore@gmail.com',
      icon: 'location_on',
    },
    {
      question: 'Further questions?',
      answer: 'Don\'t hesitate to contact me at touchgrassstore@gmail.com if you have any questions!',
      icon: 'question_answer',
    },
  ]
}
