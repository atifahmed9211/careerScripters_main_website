import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scrollToTop();
  }
  scrollToTop()
  {
    window.scrollTo(0,0);
  }
}
