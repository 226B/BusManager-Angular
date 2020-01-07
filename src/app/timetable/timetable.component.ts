import {Component, OnInit, ViewChild} from '@angular/core';
import {TimetableService} from '../../_services/timetable.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Trip} from '../../_model/trip';

@Component({
  selector: 'bm-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  dataSource: MatTableDataSource<Trip>;
  displayedColumns: string[] = [
    'startLocationName',
    'arrivalLocationName',
    'startTime',
    'arrivalTime',
    'startTerminal',
    'arrivalTerminal',
    'busType'
  ];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: TimetableService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.service.getTrips().subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.sort = this.sort;
    });
  }

}
