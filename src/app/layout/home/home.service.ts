import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {
  }

  // getSpaceList(params: any): Observable<any> {
  //   return this.http.post('http://10.2.215.213:8080/data-reporter/api/list', params);
  // }


}
