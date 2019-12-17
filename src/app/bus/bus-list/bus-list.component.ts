import {Component, OnInit, ViewChild} from '@angular/core';
import {BusService} from '../../bus.service';
import {Bus} from '../../../_model/bus';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'bm-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css', '../../../_styles/expandable-table-style.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class BusListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type'];

  @ViewChild(MatSort) sort: MatSort;
  private dataSource: MatTableDataSource<Bus>;
  expandedElement: Bus | null;

  constructor(private busService: BusService) {
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.busService.getBuses().subscribe(value => {
      this.dataSource = new MatTableDataSource(value);

      // der scheiss wird gebraucht weil type ein nested object ist und material sort das nicht mag...
      // danke https://stackoverflow.com/questions/48891174/angular-material-2-datatable-sorting-with-nested-objects
      this.dataSource.sortingDataAccessor = (item, property) => {
        if (property === 'type') {
          return item.type.name;
        } else {
          return item[property];
        }
      };
      this.dataSource.sort = this.sort;
    });
  }
}
