import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  menuJson = 'assets/json/menu/menu.json';

  constructor(private http: HttpClient) { }

  itemsMenu(): Observable<any> {
    return this.http.get<any>(this.menuJson);
  }
}
