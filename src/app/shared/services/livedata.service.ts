import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable(
  // providedIn: 'root'
)
  
  
export class LivedataService {

  constructor(public http:HttpClient) { }
public getData(): Observable<any>{
  const url = `${environment.API_ENDPOINT}sensordata/findall`
  return this.http.get(url).pipe(map(response  =>{
    return response;
  }
    ));
}
}
