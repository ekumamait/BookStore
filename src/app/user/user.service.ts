import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../shared/interfaces/user';

@Injectable({
 providedIn: 'root'
})
export class UserService {
  private API = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this
              .http
              .get<User[]>(`${this.API}/getAll`)
              .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }

  getUserDetails(id: number): Observable<User> {
    return this
              .http
              .get<User>(`${this.API}/getOne/${id}`)
              .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }

  addUser(user: User): Observable<User> {
    return this
              .http
              .post<User>(`${this.API}/user`, user)
              .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }

  saveUserFavorite(newFav: {}): Observable<any> {
    return this
              .http
              .put<User>(`${this.API}/saveUserFav`, newFav)
              .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }

}
