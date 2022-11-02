import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SaveAccount} from '../model/save-account';
import {Customer} from '../model/customer';
import {Time} from '../model/time';
import {DataResult} from '../model/data-result';
import {environment} from '../../environments/environment';

const API_URL = `${environment.url}`;
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // private API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  findAccountSearchPaging(curPage: number, numberRecord: number): Observable<DataResult<SaveAccount>> {
    return this.httpClient.get<DataResult<SaveAccount>>(API_URL
      + '/saveAccount?page=' + (curPage - 1) + '&size=' + numberRecord);
  }

  deleteAccount(id: number): Observable<SaveAccount> {
    return this.httpClient.delete<SaveAccount>(API_URL + '/saveAccount/delete/' + id);
  }

  findAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer');
  }

  findAllTime(): Observable<Time[]> {
    return this.httpClient.get<Time[]>(API_URL + '/times');
  }

  getById(id: number): Observable<SaveAccount> {
    return this.httpClient.get<SaveAccount>(API_URL + '/saveAccount/' + id);
  }

  updateAccount(id: number, saveAccount: SaveAccount): Observable<SaveAccount> {
    return this.httpClient.put<SaveAccount>(API_URL + '/saveAccount/edit/' + id, saveAccount);
  }

  addAccount(saveAccount: SaveAccount): Observable<SaveAccount> {
    return this.httpClient.post<SaveAccount>(API_URL + '/saveAccount/add', saveAccount);
  }
}
