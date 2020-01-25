import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {TimetableService} from '../../../_services/timetable.service';
import {CreateTripDto, TripInfo} from '../../../_model/trip';
import {Observable} from 'rxjs';

@Component({
  selector: 'bm-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.css']
})
export class TripFormComponent implements OnInit {
  error = false;
  loaded = false;
  message = '';
  info: TripInfo;
  group = new FormGroup({
    start: new FormControl(''),
    end: new FormControl(''),
    capacity: new FormControl('', ),
    time: new FormControl('')
  }, Validators.required);
  tripDto = new CreateTripDto();
  constructor(private service: TimetableService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getInfo().subscribe(value => {
      console.log(value);
      this.info = value;
      this.loaded = true;
    });
  }

  saveEntry(formDirective: FormGroupDirective) {
    this.service.addTrip(this.tripDto).subscribe(value => {
      this.tripDto = new CreateTripDto();
      this.error = false;
      this.message = 'Trip erfoglreich gespeichert.';
      this.group.reset();
      formDirective.resetForm();
    }, error => {
      this.error = true;
      this.message = error.error.message;
    });
  }

  isValid() {
    if (
      this.tripDto.time == null ||
      this.tripDto.startStation == null ||
      this.tripDto.endStation == null ||
      this.tripDto.time < new Date(Date.now())  ||
      !this.info.capacities.includes(this.tripDto.capacity) ||
      !this.info.stations.includes(this.tripDto.startStation) ||
      !this.info.stations.includes(this.tripDto.endStation)
    ) {
      return false;
    }
    return true;
  }
}
