import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import {Bus} from '../model/Bus';
import {Data} from '../model/Data';

@Component({
  selector: 'app-bus-list',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})


export class BuslistComponent implements OnInit {
  station = 'Bern';
  buses;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getBuses(this.station).subscribe((data) => {
      this.buses = data;
      Data.setBuses(this.buses);
    });
  }
}
