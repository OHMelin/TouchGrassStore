import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
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
