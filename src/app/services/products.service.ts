import { environment } from './../../environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { IProduct } from './../Models/iproduct';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOptions;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
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

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient
    .get<IProduct[]>(`${environment.APIURL}/products`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError),
    )
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient
    .get<IProduct[]>(`${environment.APIURL}/products?categoryID=${catID}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError),
    )
  }

  getProductByID(prdID: number): Observable<IProduct> {
    return this.httpClient
    .get<IProduct>(`${environment.APIURL}/products/${prdID}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError),
    )
  }

  addProduct(newPrd: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
  }

  updateProduct(prdID: number, UpdatedPrd: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${environment.APIURL}/products/${prdID}`, UpdatedPrd);
  }

  deleteProduct(prdID: number) {

  }

}












/* return this.httpClient
.post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions)
.pipe(
  retry(2),
  catchError((err) => {
    console.log(err);
    return throwError(() => new Error('Post Error'));
  })
); */
