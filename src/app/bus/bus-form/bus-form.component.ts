import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {BusService} from '../../../_services/bus.service';
import {Bus} from '../../../_model/bus';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'bm-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.css']
})
export class BusFormComponent implements OnInit {
  emit: boolean;
  error = false;
  message = '';
  ready = false;
  bus = new Bus();
  group = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    station: new FormControl('')
  }, Validators.required);
  typeNames = [];
  stations: string[];

  constructor(private service: BusService, private dialog: MatDialog) {
    this.emit = false;
  }

  getTextError(form: AbstractControl) {
    return form.hasError('required') ? 'Bitte wählen sie einen Wert aus.' : '';
  }

  ngOnInit() {
    this.service.getBusTypes().subscribe(value => {
      value.forEach(value1 => {
        this.typeNames.push(value1.name);
      });
    }, error => {
      this.error = true;
      this.message = error.error.message;
    });
    this.service.getInfo().subscribe(value => {
      this.stations = value.stations;
      this.ready = true;
    });
  }

  saveEntry(f: FormGroupDirective) {
    this.service.addBus(this.bus).subscribe(value => {
      f.resetForm();
      this.group.reset();
      this.error = false;
      this.message = 'Bus erfolgreich gespeichert.';
      this.emit = true;
    }, error1 => {
      this.error = true;
      this.message = error1.error.message;
    });
  }
}
