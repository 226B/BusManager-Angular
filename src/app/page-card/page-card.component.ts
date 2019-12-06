import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']
})
export class PageCardComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() description = '';


  constructor() { }

  ngOnInit() {
  }

}
