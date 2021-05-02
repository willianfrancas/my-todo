import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  loadProfileUser(): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.TODO_SERVER}/auth/user`);
  }

  saveUser(userProfile: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.TODO_SERVER}/auth/user`, userProfile);
  }

  saveLocal(userProfile: UserModel): void {
    delete userProfile._id;
    delete userProfile.password;

    localStorage.setItem('user', JSON.stringify(userProfile));
  }
}
