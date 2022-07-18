import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country, CountryRegion } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiUrl: string = 'https://restcountries.com/v3.1';
  apiRegiones: string = 'https://restcountries.com/v2/regionalbloc/';

  

  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  getPaisCodigo(id:string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string): Observable<CountryRegion[]>{
    const params = new HttpParams()
          .set('fields', 'name,capital,alpha2Code,flags,population' )
    const url = `${this.apiRegiones}${region}`;
    return this.http.get<CountryRegion[]>(url, {params});
  }


}
