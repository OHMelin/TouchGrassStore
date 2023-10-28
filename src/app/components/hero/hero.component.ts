import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    var elements = document.getElementsByClassName("stack");

    var mouseOver = function() {
      for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].className)
        switch (elements[i].className) {
          case "stack letter":
            elements[i].classList.add('transform-letter');
            break;
          case "stack certificate":
            elements[i].classList.add('transform-certificate');
            break;
          case "stack grass":
            elements[i].classList.add('transform-grass');
            break;
          case "stack card":
            elements[i].classList.add('transform-card');
            break;
          default:
            elements[i].innerHTML = "";
        }
      console.log(elements[i].classList)
      }
    };

    var mouseOut = function() {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('transform-letter', 'transform-certificate', 'transform-grass', 'transform-card');
      }
    }

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', mouseOver, false);
        elements[i].addEventListener('mouseout', mouseOut, false)
    }
  }
}

