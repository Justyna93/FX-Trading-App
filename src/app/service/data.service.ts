import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Panel } from '../model/panel.model';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Panel[]> {
    return interval(1000).pipe(
      switchMap(() => this.http.get("http://localhost:3000/")),
      map((response: Panel[]) => response)
    )
  }
}
