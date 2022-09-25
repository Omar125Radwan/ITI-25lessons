import { APIResponseVM } from './../ViewModels/apiresponse-vm';
import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, retry, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericApiHandlerService {
  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    };
  }

  private setHeaders(key: string, value: string) {
    this.httpOptions.headers.set(key, value);
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAll(APIRoute: string): Observable<APIResponseVM> {
    return this.httpClient.get<APIResponseVM>(`${environment}/${APIRoute}`)
    .pipe(
      retry(2),
      catchError(this.handleError),
    )
  }

  search(...searchItems: string[]) {

  }

  getById(APIRoute: string, id: number) {

  }

  post(APIRoute: string, newObject: any) {

  }

  put(APIRoute: string, id: number, newObject: any) {

  }

  delete(APIRoute: string, id: number) {

  }

}
