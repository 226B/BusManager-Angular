import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {TripFormComponent} from '../trip-form/trip-form.component';

@Component({
  selector: 'bm-trip-overview',
  templateUrl: './trip-overview.component.html',
  styleUrls: ['./trip-overview.component.css', '../../../_styles/overview.css']
})
export class TripOverviewComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dia = this.dialog.open(TripFormComponent, {
      width: '80vw',
      maxWidth: '80vw',
      height: '80vh',
      maxHeight: '100vh',
      autoFocus: true,
    });
  }

  ngOnInit() {
  }

}
