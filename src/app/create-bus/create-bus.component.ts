import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import {Bus} from '../model/Bus';
import {BusType} from '../model/BusType';
import { FormControl } from '@angular/forms';
import {Data} from '../model/Data';

@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})

export class CreateBusComponent implements OnInit {
  currentBus: Bus;
  station = 'Bern';
  error = '';
  name = new FormControl('');
  typename = new FormControl('');

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.currentBus = new Bus();
    this.currentBus.type = new BusType();
  }

  saveEntry() {
    this.apiService.setBus(this.station, this.currentBus).subscribe(value => {
      this.name.setValue('');
      this.typename.setValue('');
      Data.getBuses().push(this.currentBus);
      this.currentBus = new Bus();
      this.error = 'Bus erfoglreich gespeichert';
    }, error => {
      console.log(error);
      this.error = error.error.message;
    });
  }
}
