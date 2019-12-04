import { Component, OnInit } from '@angular/core';
import {BusService} from '../bus.service';
import {Bus} from '../model/bus';

@Component({
  selector: 'bm-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  private data: Bus[];
  displayedColumns: string[] = ['name', 'type'];

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.busService.getBuses().subscribe(value => {
      this.data = value;
    });
  }
}
