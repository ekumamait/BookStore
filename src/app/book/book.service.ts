import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Book } from '../shared/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this
              .http
              .get<Book[]>(`${this.API}/AllPosts`)
              .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
              );
  }

  saveUserBook(newBook: {}): Observable<any> {
    return this
              .http
              .post<Book>(`${this.API}/post`, newBook)
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
