import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  signIn(): Observable<UserModel> {
    // return this.angularFirestore.collection('user-todo').snapshotChanges();
    return this.http.get<UserModel>(`${environment.TODO_SERVER}/user`);
  }

  signUp(dataUser): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.TODO_SERVER}/user`, dataUser);
    // return this.angularFirestore.collection('user-todo').add(dataUser);
  }
}
