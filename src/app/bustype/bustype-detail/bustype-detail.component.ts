import {Component, Input, OnInit} from '@angular/core';
import {BusType} from '../../../_model/bus';

@Component({
  selector: 'bm-bustype-detail',
  templateUrl: './bustype-detail.component.html',
  styleUrls: ['./bustype-detail.component.css']
})
export class BustypeDetailComponent implements OnInit {
  @Input() private busType: BusType;

  constructor() {}

  ngOnInit() {
  }
}
