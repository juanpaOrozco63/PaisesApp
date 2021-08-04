import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
 private url:string='https://restcountries.eu/rest/v2'
 get httpParams(){
   return  new HttpParams()
   .set("fields","name;capital:alpha2Code;flag;population")
 }
  constructor(private http:HttpClient) { }
  
  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.url}/name/${termino}`

    return this.http.get<Country[]>(url)
  }
  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.url}/capital/${termino}`
    return this.http.get<Country[]>(url,{params:this.httpParams})

  }
  buscarRegion(region:string):Observable<Country[]>{
   
    const url = `${this.url}/region/${region}`
    return this.http.get<Country[]>(url,{params:this.httpParams})

  }
  obtenerPaisCodigoAlpha(id:string){
    const url = `${this.url}/alpha/${id}`
    return this.http.get<Country>(url)
  }
}
