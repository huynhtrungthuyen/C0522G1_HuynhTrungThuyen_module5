import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  findAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL + 'contracts');
  }

  addContract(contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.API_URL + 'contracts', contract);
  }
}
