import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus} from './model/Bus';

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
}
