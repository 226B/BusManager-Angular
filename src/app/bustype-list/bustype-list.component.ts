import {Component, OnInit, ViewChild} from '@angular/core';
import {Bus, BusType} from '../model/bus';
import {BusService} from '../bus.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'bm-bustype-list',
  templateUrl: './bustype-list.component.html',
  styleUrls: ['./bustype-list.component.css', './../styles/expandable-table-style.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class BustypeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'capacity', 'recoveryTime', 'maxRange', 'distancePerH'];
  private dataSource: MatTableDataSource<BusType>;
  expandedElement: BusType | null;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private busService: BusService) { }

  ngOnInit() {
    this.busService.getBusTypes().subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.sort = this.sort;
    });
  }

}
