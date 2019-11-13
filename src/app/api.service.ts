import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Bus} from './model/Bus';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getBus(): Observable<Bus> {
    return this.httpClient.get<Bus>('http://localhost:8080/api/station/abc/bus/some-bus');
  }

  public getBuses(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>('http://localhost:8080/api/station/abc/buses/all');
  }
}
