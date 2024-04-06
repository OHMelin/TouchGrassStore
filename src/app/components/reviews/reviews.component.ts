import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews = [
    {
      reviewer: 'Wesley',
      rating: 5,
      title: 'So fun!',
      review: 'Great Quality & Fast delivery!',
    },
    {
      reviewer: 'Winner',
      rating: 5,
      title: '10/10 I recommend',
      review: 'Good grass, looks great on my desk.',
    },
    {
      reviewer: 'Lund',
      rating: 5,
      title: 'Fun prank',
      review: 'The recipient was very thrilled!',
    },
  ]
}
