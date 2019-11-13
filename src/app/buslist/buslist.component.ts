import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  buses;

  ngOnInit() {
    this.apiService.getBuses().subscribe((data) => {
      this.buses = data;
    });
  }
}

