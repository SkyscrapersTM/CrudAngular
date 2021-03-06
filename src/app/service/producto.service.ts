import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista');
  }

  public detalle(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL + `detail/${id}`);
  }

  public detalleName(nombre: string): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL + `detailname/${nombre}`);
  }

  public guarda(producto: Producto): Observable<any>{
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public actualiza(id: number, producto: Producto): Observable<any>{
    return this.httpClient.post<any>(this.productoURL + `update/${id}`, producto);
  }

  public eimina(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}` );
  }
}
