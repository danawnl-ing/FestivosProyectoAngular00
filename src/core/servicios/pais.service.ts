import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../../shared/entidades/pais';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PaisService {
  private apiUrl = 'http://localhost:3000/paises';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }

  create(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(this.apiUrl, pais);
  }

  update(pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.apiUrl}/${pais.id}`, pais);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}