import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MenuModel } from '../shared/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  menuJson = '../assets/json/menu/menu.json';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<any> {

    return this.http.get<any>(this.menuJson)
    // .pipe(
    //   // tap(menus => console.log({ menus })),
    //   catchError(error => {
    //     return throwError(error);
    //   })
    // );
  }
}
