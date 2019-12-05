import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bm-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  @Input() url: string;
  @Input() displayName: string;

  constructor() { }

  ngOnInit() {
  }

}
