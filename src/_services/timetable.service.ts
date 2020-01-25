import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateTripDto, Trip, TripInfo} from '../_model/trip';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private httpClient: HttpClient) {
  }

  public getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>('http://localhost:8080/api/v1/trip/get');
  }

  public addTrip(createTripDto: CreateTripDto): Observable<Trip> {
    return this.httpClient.post<Trip>('http://localhost:8080/api/v1/trip/add', createTripDto);
  }

  public getInfo(): Observable<TripInfo> {
    return this.httpClient.get<TripInfo>('http://localhost:8080/api/v1/trip/tripinfo/get');
  }
}

