import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility';
import {FacilityType} from '../model/facility-type';
import {RentType} from '../model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  findAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_URL + 'facilities');
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(this.API_URL + 'facilities/' + id);
  }

  findAllFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(this.API_URL + 'facilityTypes');
  }

  findAllRentType(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.API_URL + 'RentTypes');
  }

  addFacility(facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.API_URL + 'facilities', facility);
  }

  getById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.API_URL + 'facilities/' + id);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(this.API_URL + 'facilities/' + id, facility);
  }
}
