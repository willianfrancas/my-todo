import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListModel } from 'src/app/shared/model/list.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }


  loadItems(user: UserModel): Observable<ListModel[]> {
    return this.http.get<ListModel[]>(`${environment.TODO_SERVER}/api/list/${user}`);
  }

  saveItem(item: ListModel): Observable<ListModel> {
    return this.http.post<ListModel>(`${environment.TODO_SERVER}/api/list/item-new`, item);
  }

  updateItem(item: ListModel): Observable<ListModel> {
    return this.http.put<ListModel>(`${environment.TODO_SERVER}/api/list/item`, item);
  }
}
