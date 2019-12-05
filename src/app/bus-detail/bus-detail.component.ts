import {Component, Input, OnInit} from '@angular/core';
import {Bus} from '../model/bus';

@Component({
  selector: 'bm-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {
  @Input() bus: Bus;
  constructor() { }

  ngOnInit() {
  }

}
