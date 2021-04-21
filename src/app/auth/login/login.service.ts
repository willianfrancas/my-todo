import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  signIn(dataUser): Observable<UserModel> {
    // return this.angularFirestore.collection('user-todo').snapshotChanges();
    return this.http.post<UserModel>(`${environment.TODO_SERVER}/login`, dataUser);
  }

  signUp(dataUser): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.TODO_SERVER}/signup`, dataUser);
    // return this.angularFirestore.collection('user-todo').add(dataUser);
  }

  resetPassword(dataUser): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.TODO_SERVER}/reset/password`, dataUser);
  }
}