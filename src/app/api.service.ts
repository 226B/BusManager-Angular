import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus} from './model/Bus';
import {BusType} from './model/BusType';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getBus(station: string, bus: string): Observable<Bus> {
    return this.httpClient.get<Bus>('http://localhost:8080/api/station/' +
      encodeURIComponent(station) + '/bus/get/' + encodeURIComponent(bus));
  }

  public getBuses(station: string): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>('http://localhost:8080/api/station/' + encodeURIComponent(station) + '/bus/getAll/');
  }

  public setBus(station: string, bus: Bus): Observable<Bus> {
    return this.httpClient.post<Bus>('http://localhost:8080/api/station/' + encodeURIComponent(station) + '/bus/set/', bus );
  }


  public getBusTypes(): Observable<BusType[]> {
    return this.httpClient.get<BusType[]>('http://localhost:8080/api/station/bustype/getAll/');
  }

  public getBusType(bustype: string): Observable<BusType> {
    return this.httpClient.get<BusType>('http://localhost:8080/api/station/bustype/get/' + encodeURIComponent(bustype));
  }

  public setBusType(busType: BusType): Observable<BusType> {
    return this.httpClient.post<BusType>('http://localhost:8080/api/station/bustype/set/', busType );
  }
}
