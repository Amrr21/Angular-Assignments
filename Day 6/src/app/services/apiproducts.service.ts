import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyProduct } from '../Interface/my-product';

@Injectable({
  providedIn: 'root'
})
export class APIProductsService {
  httpOption;

  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': "hussein"
      })
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAllProducts(): Observable<MyProduct[]> {
    return this.httpClient.get<MyProduct[]>(`${environment.apiUrl}`)
  }

  getCateg(catID: number): Observable<MyProduct[]> {
    return this.httpClient.get<MyProduct[]>(`${environment.apiUrl}?categoryID=${catID}`)
  }

  addProduct(newProduct: MyProduct): Observable<MyProduct> {
    return this.httpClient.post<MyProduct>(`${environment.apiUrl}`, JSON.stringify(newProduct), this.httpOption).pipe(
      retry(2),
      catchError(this.handleError)
    )


  }




}