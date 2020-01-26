import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus, BusType, Stations} from '../_model/bus';
import {TripInfo} from '../_model/trip';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private httpClient: HttpClient) {
  }

  public getBuses(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>('http://localhost:8080/api/v1/bus/get/');
  }

  public getBus(name: string): Observable<Bus> {
    return this.httpClient.get<Bus>('http://localhost:8080/api/v1/bus/get/' + encodeURIComponent(name));
  }

  public getBusTypes(): Observable<BusType[]> {
    return this.httpClient.get<BusType[]>('http://localhost:8080/api/v1/bus/type/get/');
  }

  public getBusType(name: string): Observable<BusType> {
    return this.httpClient.get<BusType>('http://localhost:8080/api/v1/bus/type/get/' + encodeURIComponent(name));
  }

  public addType(type: BusType): Observable<BusType> {
    return this.httpClient.post<BusType>('http://localhost:8080/api/v1/bus/type/add?override=false', type);
  }

  public addBus(bus: Bus): Observable<Bus> {
    return this.httpClient.post<Bus>('http://localhost:8080/api/v1/bus/add?override=false', bus);
  }

  public getInfo(): Observable<Stations> {
    return this.httpClient.get<Stations>('http://localhost:8080/api/v1/bus/getinfo');
  }
}
