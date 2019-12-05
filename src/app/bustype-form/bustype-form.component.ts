import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BusType} from '../model/bus';
import {BusService} from '../bus.service';

@Component({
  selector: 'bm-bustype-form',
  templateUrl: './bustype-form.component.html',
  styleUrls: ['./bustype-form.component.css']
})
export class BustypeFormComponent implements OnInit {
  error = false;
  message = '';
  name = new FormControl('', [Validators.required]);
  capacity = new FormControl('', [Validators.required, Validators.min(0)]);
  recoveryTime = new FormControl('', [Validators.required, Validators.min(0)]);
  maxRange = new FormControl('', [Validators.required, Validators.min(0)]);
  distancePerH = new FormControl('', [Validators.required, Validators.min(0)]);

  group = new FormGroup({
    name: this.name,
    capacity: this.capacity,
    recoveryTime: this.recoveryTime,
    maxRange: this.maxRange,
    distancePerH: this.distancePerH
  });
  getTextError(form: FormControl) {
    return form.hasError('required') ? 'Bitte geben sie einen Wert ein.' : '';
  }

  isValid(): boolean {
    return this.name.valid && this.capacity.valid && this.recoveryTime.valid && this.maxRange.valid && this.distancePerH.valid;
  }

  getNumberError(form: FormControl) {
    return form.hasError('required') ? 'Bitte geben sie einen Wert ein.' :
      form.hasError('min') ? 'Die Zahl muss grösser sein als 0.' :
        '';
  }

  constructor(private service: BusService) {
  }

  ngOnInit() {
  }

  saveEntry() {
    console.log('submitted');
    const busType = new BusType();
    busType.name = this.name.value;
    busType.capacity = this.capacity.value;
    busType.recoveryTime = this.recoveryTime.value;
    busType.maxRange = this.maxRange.value;
    busType.distancePerH = this.distancePerH.value;

    this.service.addType(busType).subscribe(value => {
      this.name.setValue('');
      this.name.markAsUntouched();

      this.capacity.setValue('');
      this.capacity.markAsUntouched();

      this.recoveryTime.setValue('');
      this.recoveryTime.markAsUntouched();

      this.maxRange.setValue('');
      this.maxRange.markAsUntouched();

      this.distancePerH.setValue('');
      this.distancePerH.markAsUntouched();

      this.error = false;
      this.message = 'BusType erfoglreich gespeichert.';
    }, error => {
      this.error = true;
      this.message = error.error.message;
    });
    return;
  }
}
