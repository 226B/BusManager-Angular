import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BusFormComponent} from '../bus-form/bus-form.component';
import {BusListComponent} from '../bus-list/bus-list.component';

@Component({
  selector: 'bm-bus-overview',
  templateUrl: './bus-overview.component.html',
  styleUrls: ['./bus-overview.component.css', '../../../_styles/overview.css']
})
export class BusOverviewComponent implements OnInit {
  @ViewChild(BusListComponent) list: BusListComponent;

  constructor(private dialog: MatDialog) {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dia = this.dialog.open(BusFormComponent, {
      width: '80vw',
      maxWidth: '80vw',
      height: '80vh',
      maxHeight: '100vh',
      autoFocus: true,
    });
    dia.afterClosed().subscribe(value => {
      this.list.reload();
    });
  }

  ngOnInit() {
  }

}
