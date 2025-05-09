import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {
  BASE_API = "http://localhost:3000"
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json"
    })
  }
  //HttpCliente é o 'provideHttpClient' que colocamos no providers em AppModule
  constructor(private http: HttpClient) {
   }

   listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.BASE_API}/produtos`);
   }

   buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.BASE_API}/produtos/${id}`)
   }

   deletar(id?: number): Observable<Produto> {
    return this.http.delete<Produto>(`${this.BASE_API}/produtos/${id}`)
   }

   inserir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.BASE_API}/produtos`, produto, this.httpOptions)
   }

   editar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.BASE_API}/produtos/${id}`, produto, this.httpOptions)
   }
}
