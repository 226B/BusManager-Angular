import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Bus, BusType} from '../../../_model/bus';
import {BusService} from '../../../_services/bus.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'bm-bustype-form',
  templateUrl: './bustype-form.component.html',
  styleUrls: ['./bustype-form.component.css']
})
export class BustypeFormComponent implements OnInit {
  error = false;
  message = '';
  group = new FormGroup({
    name: new FormControl(''),
    capacity: new FormControl('', [Validators.min(0)]),
    recoveryTime: new FormControl('', [Validators.min(0)]),
    maxRange: new FormControl('', [Validators.min(0)]),
    distancePerH: new FormControl('', [Validators.min(0)])
  }, Validators.required);
  busType = new BusType();

  getTextError(form: AbstractControl) {
    return form.hasError('required') ? 'Bitte geben sie einen Wert ein.' : '';
  }
  getNumberError(form: AbstractControl) {
    return form.hasError('required') ? 'Bitte geben sie einen Wert ein.' :
      form.hasError('min') ? 'Die Zahl muss grösser als 0 sein.' :
        '';
  }

  constructor(private service: BusService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  saveEntry(formDirective: FormGroupDirective) {
    this.service.addType(this.busType).subscribe(value => {
      this.busType = new BusType();
      this.error = false;
      this.message = 'BusType erfoglreich gespeichert.';
      this.group.reset();
      formDirective.resetForm();
    }, error => {
      this.error = true;
      this.message = error.error.message;
    });
  }
}
