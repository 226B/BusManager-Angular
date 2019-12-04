import { Component, OnInit } from '@angular/core';
import {Bus, BusType} from '../model/bus';
import {BusService} from '../bus.service';

@Component({
  selector: 'bm-bustype-list',
  templateUrl: './bustype-list.component.html',
  styleUrls: ['./bustype-list.component.css']
})
export class BustypeListComponent implements OnInit {
  private data: BusType[];
  displayedColumns: string[] = ['name', 'capacity', 'recoveryTime', 'maxRange', 'distancePerH'];

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.busService.getBusTypes().subscribe(value => {
      this.data = value;
    });
  }

}
