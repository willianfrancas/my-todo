import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, delay, map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UserModel } from "./login/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subjUser$: BehaviorSubject<UserModel> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  register(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.TODO_SERVER}/auth/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.TODO_SERVER}/auth/login`, credentials)
      .pipe(
        tap((user: UserModel) => {
          localStorage.setItem('token', user.token);
          this.subjLoggedIn$.next(true)
          this.subjUser$.next(user);
        }));
  }

  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (token && !this.subjLoggedIn$.value) {
      return this.checkTokenValidation();
    }
    return this.subjLoggedIn$.asObservable();

  }

  checkTokenValidation() {
    return this.http.get<UserModel>(`${environment.TODO_SERVER}/auth/user`)
      .pipe(
        tap((user: UserModel) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.subjLoggedIn$.next(true);
            this.subjUser$.next(user);
          }
        }),
        map((user: UserModel) => (user) ? true : false),
        catchError(error => {
          this.logout();
          return of(false);
        })
      );
  }

  getUser(): Observable<UserModel> {
    return this.subjUser$.asObservable();
  }

  resetPassword(): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.TODO_SERVER}/auth/reset`)
      .pipe(
        tap((user: UserModel) => {
          localStorage.setItem('token', user.token);
          this.subjLoggedIn$.next(true)
          this.subjUser$.next(user);
        }))
  }

  logout() {
    localStorage.removeItem('token');
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null);
  }
}