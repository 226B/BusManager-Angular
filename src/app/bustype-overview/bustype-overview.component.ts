import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BusFormComponent} from '../bus-form/bus-form.component';
import {BustypeListComponent} from '../bustype-list/bustype-list.component';
import {BustypeFormComponent} from '../bustype-form/bustype-form.component';

@Component({
  selector: 'bm-bustype-overview',
  templateUrl: './bustype-overview.component.html',
  styleUrls: ['./bustype-overview.component.css', './../styles/overview.css']
})
export class BustypeOverviewComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @ViewChild(BustypeListComponent) list: BustypeListComponent;


  openDialog() {
    const dial = this.dialog.open(BustypeFormComponent, {
      width: '80vw',
      maxWidth: '80vw',
      height: '80vh',
      maxHeight: '100vh',
      autoFocus: true
    });

    dial.afterClosed().subscribe(value => {
      this.list.reload();
    });
  }
  ngOnInit() {
  }

}
