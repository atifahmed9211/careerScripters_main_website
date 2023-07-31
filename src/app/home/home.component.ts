import { Component, OnInit, HostListener } from '@angular/core';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    var oTop;
    // var countNum = 0;
    if ($('.counterUp').length !== 0) {
      oTop = $('.counterUp').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counterUp').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: 0
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: (countNum) => {
            $this.text(Math.floor(countNum));
          },
          complete: (countNum) => {
            $this.text(countNum);
          }
        });
      });
    }
  }

  // Count Up
  counter() {
    var oTop;
    var countNum;
    if ($('.counterUp').length !== 0) {
      oTop = $('.counterUp').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counterUp').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: () => {
            $this.text(Math.floor(this.countNum));
          },
          complete: () => {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
}
