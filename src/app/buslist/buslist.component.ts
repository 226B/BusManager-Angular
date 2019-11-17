import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import {Bus} from '../model/Bus';
import {FormControl} from '@angular/forms';
import {MatTable} from '@angular/material';

@Component({
  selector: 'app-bus-list',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})


export class BuslistComponent implements OnInit {
  station = 'Bern';
  buses;
  currentBus = new Bus();
  error = '';
  name = new FormControl('');
  typename = new FormControl('');
  @ViewChild('busTable') dataTable: MatTable<any>;
  displayedColumns: string[] = ['name', 'type', 'capacity'];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getBuses(this.station).subscribe((data) => {
      this.buses = data;
    });
  }

  saveEntry() {
    this.apiService.setBus(this.station, this.currentBus).subscribe(value => {
      this.name.setValue('');
      this.typename.setValue('-');
      this.buses.push(this.currentBus);
      this.currentBus = new Bus();
      this.dataTable.renderRows();
      this.error = 'Bus erfolgreich gespeichert';
    }, error => {
      console.log(error);
      this.error = error.error.message;
    });
  }
}
