import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {DatosHistoricos, RespDatos} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };

  errorHandl(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('API error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  constructor(private http: HttpClient) {}
  obtenerDatos(): Observable<RespDatos> {
    return this.http.get<RespDatos>('http://127.0.0.1:8080/obtener-todosdatos')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
}
